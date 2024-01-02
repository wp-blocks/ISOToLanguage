import { Country, CountryData, CountryDataExtended, CountryDataFields, CountryFields, ISOCountry, ISOCountryCode, ISOLangCode, ISOLanguage, IsoType, Language, LanguageData, LanguageDataFields, LanguageFields } from './types'
import { countriesIso } from './data/countries-iso'
import { validateISO } from './validation'
import { langIso } from './data/lang-iso'
import { formatIso } from './formatIso'
import { countriesGeo } from './data/countries-geo'
import { countriesExtra } from './data/countries-extra'
import { isExtraField, isGeoField } from './utils'

function findMatchingFields( countryData: Partial<CountryDataExtended>, fields: string[] | string): Partial<keyof CountryDataExtended>[] {
    const fieldsCollected: Partial<keyof CountryDataExtended>[] = [];
    for (const field of fields) {
        if (field in countryData) {
            fieldsCollected.push(field as keyof CountryDataExtended);
        }
    }
    return fieldsCollected
}

/**
 * This function retrieves country data by its name.
 *
 * @param {string} key - The name of the country to fetch data for.
 * @param {string} fields - The fields to retrieve. If not provided, all fields are returned.
 * @return {CountryData} Returns country data for the given name
 * or null if no matching country is found.
 */
export function getCountry(
    key: string,
    fields?: string | CountryDataFields[]
): ISOLangCode[] | Partial<CountryDataExtended> | LanguageData[] | string | string[] | false {
    let country: Country | false = false
    let countryIso: ISOCountryCode | false = false

    if (validateISO(key, 'country')) {
        country = countriesIso[key as ISOCountryCode] as Country
        countryIso = key as ISOCountryCode
    } else {
        // loop for each langIso item and find if the name matches the iso
        for (const currentCountry of Object.entries(countriesIso)) {
            if (currentCountry[1].name === key || currentCountry[1].original === key) {
                country = currentCountry[1] as Country
                countryIso = currentCountry[0] as ISOCountryCode
                break
            }
        }
    }

    if (country && countryIso !== false) {
        // If the requested fields is the code, return the iso country code
        if (fields) {
            if (typeof fields !== 'string') {
                // else if the fields are an array starrt to collect the country data
                let countryData = { iso2: countryIso, ...country } as Partial<CountryDataExtended>

                if (fields.includes('all')) {
                    fields = ['locale', 'language-code', 'iso2', 'language-extra' , 'country-extra', 'country-geo']
                }

                if (fields.includes('country-geo') || isExtraField(fields) ) {
                    // merge the country geo data
                    countryData = { ...countryData, ...countriesExtra[countryIso] }
                }

                if (fields.includes('country-extra') || isGeoField(fields)) {
                    // merge the country extra data
                    countryData = { ...countryData, ...countriesGeo[countryIso] }
                }

                if (fields.includes('locale')) {
                    const isoCodes =
                        country.languages.map(
                            (langIso) =>
                                formatIso(
                                    langIso as ISOLangCode,
                                    countryIso as ISOCountryCode,
                                    'locale'
                                ) as string
                        ) || []
                    countryData.locale = isoCodes
                }

                if (fields.includes('language-code')) {
                    const isoCodes =
                        country.languages.map(
                            (langIso) =>
                                formatIso(
                                    langIso as ISOLangCode,
                                    countryIso as ISOCountryCode,
                                    'language-code'
                                ) as string
                        ) || []
                    countryData['language-code'] = isoCodes
                }

                // If the requested fields is the code, return the iso country code
                if (fields.includes('iso2')) {
                    countryData.iso2 = countryIso
                }

                // If the requested field is 'languageData', return the country with extended language data
                if (fields.includes('language-extra')) {
                    const languageData =
                        country.languages.map((iso) => getIso(iso as ISOLangCode, 'language')) || []
                    countryData.languages = languageData as LanguageData[]
                }

                const matchingFields = findMatchingFields(countryData, fields);
                if (matchingFields.length) {
                    // If the requested fields is a single field, return the value
                    if (matchingFields.length === 1) {
                        return countryData[matchingFields[0]] || false
                    }
                    // If the requested fields are multiple fields, return an object with the values
                    let newCountryData = {}
                    for (const field of matchingFields) {
                        if (field && countryData) {
                            newCountryData = {
                                ...newCountryData,
                                [field]: countryData[field]
                            }
                        }
                    }
                    // Return the new country data
                    return newCountryData
                }

                return countryData
            }

            // Otherwise, return the requested fields
            return fields in country ? country[fields as CountryFields] : false
        }

        // If no fields are provided, return all fields
        return { iso2: countryIso, ...country } as CountryData
    }

    return false
}

/**
 * Retrieves the ISO language object based on the provided language code.
 *
 * @param {ISOLangCode | string} key - The language code to search for.
 * @param {string} fields - The fields to retrieve. If not provided, all fields are returned.
 * @return {ISOLanguage | false} The ISO language object corresponding to the language code, or false if the language code is invalid.
 */
export function getLanguage(
    key: string,
    fields?: string | LanguageDataFields
): LanguageData | string | string[] | false {
    let language: Language | false = false
    let isoCode: ISOLangCode | false = false

    if (validateISO(key, 'language')) {
        language = langIso[key as ISOLangCode]
        isoCode = key as ISOLangCode
    } else {
        // loop for each langIso item and find if the name matches the iso
        for (const lang of Object.entries(langIso)) {
            // if the name matches the iso, then return the language
            if (lang[1].name === key || lang[1].original === key) {
                language = lang[1]
                isoCode = lang[0] as ISOLangCode
                break
            }
        }
    }

    if (language) {
        if (fields) {
            // if the fields are code, return the isoCode
            if (fields === 'code') {
                return isoCode
            }
            // if the fields are not code, return the fields
            return fields in language ? language[fields as LanguageFields] : false
        }
        // if the fields are not defined, return the language object
        return { ...language, iso2: isoCode } as LanguageData
    }

    return false
}

/**
 * Retrieves the ISO value for a given code, type, and fields.
 *
 * @param {string} code - The code to retrieve the ISO value for.
 * @param {IsoType} [type] - The type of ISO value to retrieve (language or country). Defaults to undefined.
 * @param {string} [fields] - The fields to retrieve the ISO value for. Defaults to undefined.
 * @return {string | ISOLanguage | ISOCountry | false} - The ISO value corresponding to the given code, type, and fields.
 */
export function getIso(
    code: string,
    type?: IsoType,
    fields?: LanguageDataFields | CountryFields
): string | string[] | LanguageData | LanguageData[] |  Partial<CountryDataExtended> | ISOLangCode | ISOCountryCode | false {
    // if the type is not defined, find the language or country based on the fields
    if (!type) {
        // try first to get the language
        const lang = getLanguage(code, fields)
        if (lang) return lang

        // if the language is not found, try to get the country
        const country = getCountry(code, fields)
        if (country) return country

        // if the country is not found, return false
        return false
    }

    // if the type is defined, return the selected data fields
    switch (type) {
        case 'language':
            return getLanguage(code, fields)
        case 'country':
            return getCountry(code, fields)
    }
}
