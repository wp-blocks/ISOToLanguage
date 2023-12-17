import { Country, CountryData, ISOCode, ISOCountry, IsoDataType } from './type'
import { isoList } from './iso'

function tryCountriesFallback(language: string) {
    // Fallback for specific languages
    const fallbackMap: { [key: string]: string } = {
        en: 'US', // Fallback English to en_US - United States
        zh: 'CN', // Fallback Chinese (Simplified) to zh_CN - China
        ar: 'SA', // Fallback Arabic to ar_SA - Saudi Arabia
        ja: 'JP', // Fallback Japanese to ja_JP - Japan
        ko: 'KR', // Fallback Korean to ko_KR - South Korea
        sv: 'SE', // Fallback Swedish to sv_SE - Sweden
        hi: 'IN', // Fallback Hindi to hi_IN - India
    }

    // Check if there's a fallback for the given language
    if (fallbackMap[language]) {
        return fallbackMap[language]
    }

    return undefined
}

/**
 * Formats the language and country into a single string.
 *
 * @param language - The language code.
 * @param country - The country code. Fallback to the same value as `language` if not provided but may fail or produce unexpected results.
 * @param options - Optional parameters.
 * @param options.separator - The separator used to join the language and country code. Defaults to '_'.
 * @param options.type - The type of key to generate. It Can be one of 'locale' or 'language-code'. Defaults to 'locale'.
 * @returns The formatted string combining the language and country code.
 */
function format(
    language: string,
    country?: string,
    { separator, type }: { separator?: string; type?: 'locale' | 'language-code' } = {}
): string | null {
    // if a null value is passed in, return null
    if (!language) {
        return null
    }

    // Step 1: Set separator based on type or use the default separator
    if (!separator) {
        separator = type ? getSeparator(type) : '_'
    }

    // Step 2: Try a defined fallback if country is not provided
    if (!country) {
        country = tryCountriesFallback(language.toLowerCase())
    }

    // Step 3: Try to get country from language if country is not provided
    if (!country) {
        const countries = getCountriesByLanguage([language.toLowerCase()])
        const countriesKeys = Object.keys(countries)
        if (countriesKeys.length === 1) {
            country = countriesKeys[0]
        }
    }

    // Return the formatted string if both language and country are found
    if (country) {
        return `${language.toLowerCase()}${separator}${country.toUpperCase()}`
    }

    return null
}

/**
 * Returns a separator based on the given type.
 *
 * @private
 * @param {('locale' | 'language-code')} type - The type of separator to get.
 * @return {string} - The separator.
 */
function getSeparator(type?: 'locale' | 'language-code' ): string {
    return type === 'locale' ? '_' : '-'
}

/**
 * @note GET_ISO - a core function that guards the type of the iso code
 */

/**
 * Checks if the provided ISO code is valid or not.
 *
 * @param {string} iso - ISO code to be validated
 * @return {boolean} True if the ISO code is valid, false otherwise
 */
function isValidIso(iso: string): iso is ISOCode {
    return iso in isoList
}

/**
 * @note GET_ALL
 */

/**
 * Retrieves all ISO codes from the isoList object.
 *
 * This function does not accept any parameters.
 *
 * @private
 * @return {string[]} An array of ISO codes.
 */
function getAllISO(): string[] {
    return Object.keys(isoList)
}

/**
 * Retrieves all available languages.
 * @private
 *
 * @returns {string[]} An array of all available languages.
 */
function getAllLanguages(): string[] {
    const languages: Record<string, boolean> = {}
    for (const iso in isoList) {
        for (const language of isoList[iso as ISOCode].languages) {
            languages[language] = true
        }
    }
    return Object.keys(languages)
}

/**
 * Returns an array of languages divided by a custom separator.
 *
 * @private
 * @param {string} separator - The separator used to join the language and country code. Defaults to '_'.
 * @returns {string[]} - An array of language codes.
 */
function getAllCountryLanguage(separator: string = '_'): string[] {
    const languageCodes: Record<string, boolean> = {}
    for (const iso in isoList) {
        for (const language of isoList[iso as ISOCode].languages) {
            const languageCode = format(language, iso, { separator })
            if (languageCode) {
                languageCodes[languageCode] = true
            }
        }
    }
    return Object.keys(languageCodes)
}

/**
 * Returns an array of all language codes.
 * @private
 *
 * @returns {string[]} - An array of Locale codes.
 */
function getAllLanguageCodes(): string[] {
    return getAllCountryLanguage('-')
}

/**
 * Returns an array of all language codes.
 * @private
 *
 * @returns {string[]} - An array of language codes.
 */
function getAllLocales(): string[] {
    return getAllCountryLanguage()
}

/**
 * Iterates over isoList and collects the name property
 * of each item into an array.
 *
 * This function takes no parameters.
 * @private
 *
 * @return {string[]} An array of names collected from isoList.
 */
function getAllNames(): string[] {
    const names: string[] = []
    for (const iso in isoList) {
        names.push(isoList[iso as ISOCode].name)
    }
    return names
}

/**
 * Retrieves all original names from the isoList.
 *
 * This function iterates over each element in the isoList, extracting
 * the 'original' property value, and stores them in an array. The
 * array of original names is then returned.
 * @private
 *
 * @return {string[]} An array of original names from the isoList.
 */
function getAllOriginalNames(): string[] {
    const names: string[] = []
    for (const iso in isoList) {
        names.push(isoList[iso as ISOCode].original)
    }
    return names
}

/**
 * @note GET_BY_ISO - here we get the data using the iso code (e.g. "IT")
 */

/**
 * Retrieves ISO data by ISO code or string.
 *
 * @private
 * @param {ISOCode | string} iso - ISO code or string.
 * @return {ISOCountry[ISOCode] | false} ISO data if found, otherwise false.
 */
function getIso(iso: ISOCode | string): ISOCountry[ISOCode] | false {
    // Return false if no data is found
    if (isValidIso(iso)) {
        return isoList[iso]
    }
    return false
}

/**
 * Fetches the languages associated with the given ISO code.
 *
 * @param {string} iso - The ISO code of the country.
 * @param format - The format to return the data in.
 * @private
 * @return {string[] | false} An array of languages associated with the ISO code,
 *                            or false if no data found.
 */
function getLanguages(iso: string, format?: 'locale' | 'language-code'): string[] | false {
    const isoData = getIso(iso)
    // Return false if no data is found
    if (!isoData) {
        return false
    }
    switch (format) {
        case 'locale':
            return isoData.languages.map((language) => {
                return `${language}_${iso}`
            })
        case 'language-code':
            return isoData.languages.map((language) => {
                return `${language}-${iso}`
            })
        default:
            return isoData.languages
    }
}

/**
 * Returns the name associated with the given ISO code.
 *
 * @param {string} iso - An ISO code
 * @private
 * @return {string | false} The name associated with the ISO code,
 * or false if no such ISO code exists.
 */
function getNameByISO(iso: string): string | false {
    const isoData = getIso(iso)
    return isoData ? isoData.name : false
}

/**
 * Returns the original data by ISO code.
 *
 * @param {string} iso - The ISO code to fetch data for
 * @private
 * @return {string | false} The original data related to the ISO code
 * or false if it doesn't exist
 */
function getOriginalNameByISO(iso: string): string | false {
    const isoData = getIso(iso)
    return isoData ? isoData.original : false
}

/**
 * Generates a new object where the keys are derived from the specified `isoData` object's `languages` property.
 * The values of the new object are copies of the `isoData` objects with an additional `code` property set to the ISO code.
 *
 * @param iso - The ISO code for the `isoData` object.
 * @param countryData - The `CountryData` object containing language information.
 * @private
 * @param type - Optional. Specify the type of key to generate. It Can be one of 'locale' or 'language-code'. Defaults to 'locale'.
 * @returns A new object with keys derived from the `languages` property and values consisting of copies of `isoData` objects with an additional `code` property.
 */
function useKey(
    iso: ISOCode | string,
    countryData: Country,
    type?: 'locale' | 'language-code'
): Record<string, CountryData> {
    const result: { [key: string]: CountryData } = {}
    // Get the separator based on the type
    const separator = getSeparator( type )
    countryData.languages.forEach((language) => {
        // Format the language and country code
        const locale = format(language, iso, { separator })
        // Add the country data to the result
        if (locale) {
            result[locale] = { ...countryData, code: iso as ISOCode }
        }
    })
    return result
}

/**
 * Get country data by a given a locale format (e.g. "en_US") or a language code (e.g. "en-US").
 *
 * @param {string} languageCode - A language code in the form of "Locale_Format"
 * @return {Country | false} Returns CountryData if a match is found, null otherwise
 */
function getCountryData(languageCode: string): Country | false {
    let iso: string = ''
    // check if the languageCode has 2 characters
    if (languageCode.length === 2) {
        iso = languageCode
    } else if (languageCode.length === 5) {
        // get the country code from the language code or locale
        iso = languageCode.substring(3, 5)
    } else {
        return false
    }

    // Check if the iso code is valid
    return getIso(iso)
}

/**
 * Retrieves the data for a given country from a list of ISO country codes.
 *
 * @param {string[]} isos - the array of ISO country codes to search for
 * @return {Record<string, Country>} The data associated with the country if found, null otherwise.
 */
function getCountriesByISO(isos: string[]): Record<string, Country> {
    const result: Record<string, Country> = {}

    for (const iso in isos) {
        // check if the key of isoData is the same as the iso code
        if (isValidIso(isos[iso])) {
            result[isos[iso]] = isoList[isos[iso] as ISOCode]
        }
    }

    return result
}

/**
 * Retrieves all languages associated with the given array of ISO codes.
 *
 * @param {string[]} isos - An array of ISO codes.
 * @return {string[]} An array of all languages associated with the given ISO codes.
 */
function getAllLanguagesByISO(isos: string[]): string[] {
    const languages: Record<string, boolean> = {}

    for (const iso of isos) {
        const isoData = getIso(iso)
        if (isoData) {
            isoData.languages.forEach((language) => {
                languages[language] = true
            })
        }
    }

    return Object.keys(languages)
}

/**
 * Retrieves all language codes associated with the given array of ISO codes.
 *
 * @param {string[]} isos - An array of ISO codes.
 * @param {string} type - Optional. Specify the type of key to generate. It Can be one of 'locale' or 'language-code'. Defaults to 'locale'.
 * @return {string[]} An array of all language codes associated with the given ISO codes.
 */
function getAllLanguageCodesByISO(isos: string[], type?: string): string[] {
    const languageCodes: Record<string, boolean> = {}
    const separator = type === 'locale' ? '_' : '-'

    for (const iso of isos) {
        const isoData = getIso(iso)
        if (isoData) {
            isoData.languages.forEach((language) => {
                const languageCode = format(language, iso, { separator })
                if (languageCode) {
                    languageCodes[languageCode] = true
                }
            })
        }
    }

    return Object.keys(languageCodes)
}

/**
 * Retrieves all items of a specified type.
 *
 * @param {string} type - Type of items to retrieve. It Can be "iso", "languages",
 * "names", "original", "language-codes", or "locales". If no type is provided, return the isoList.
 * @return Depending on the type parameter, either a list of ISOs, languages,
 * names, original names, or the isoList.
 */
function getAll(
    type?: IsoDataType
): string[] | typeof isoList {
    switch (type) {
        case 'iso':
            return getAllISO()
        case 'language':
            return getAllLanguages()
        case 'name':
            return getAllNames()
        case 'original':
            return getAllOriginalNames()
        case 'language-code':
            return getAllLanguageCodes()
        case 'locale':
            return getAllLocales()
        default:
            return isoList
    }
}

/**
 * Retrieves data by ISO code and a specific type.
 *
 * @param {string} iso - The ISO code to search for.
 * @param {'language'|'name'|'original'|'language-code'|'locale'} type - The type of data to retrieve.
 *                                                If not provided, default data is returned.
 * @return The data corresponding to the provided ISO and type.
 */
function ISO(
    iso: string,
    type?: IsoDataType
): string | string[] | Country | false {
    if (type !== undefined) {
        if (type === 'language') {
            return getLanguages(iso)
        } else if (type === 'name') {
            return getNameByISO(iso)
        } else if (type === 'original') {
            return getOriginalNameByISO(iso)
        } else if (type === 'iso') {
            return iso
        }  else if (type === 'language-code' || type === 'locale') {
            return getLanguages(iso, type)
        }
    }
    return getIso(iso)
}

/**
 * Returns a list of countries that speak the given languages.
 * For example, if you pass in ["en", "fr"], it will return all countries that speak English or French.
 * TODO: Add support for AND/OR
 *
 * @param {string[]} languages - An array of languages to check against.
 * @return {{[key: string]: Country}[]} Returns an array of countries that speak any of the
 * given languages.
 */
function getCountriesByLanguage(languages: string[]): {
    [key: string]: Country
} {
    const result: { [K in ISOCode]?: Country } = {}

    for (const iso in isoList) {
        const isoData = isoList[iso as ISOCode]

        for (const language of languages) {
            // Check if the iso code is valid and the language matches
            if ((isoData.languages as string[]).includes(language)) {
                result[iso as ISOCode] = isoData
            }
        }
    }

    return result
}

/**
 * Generates a new object where the keys are derived from the specified field of each item in the `isoList` object.
 * The values of the new object are copies of the corresponding `isoData` objects with an additional `code` property set to the ISO code.
 *
 * @param field - The field to use as the key for the resulting object. It can be one of 'language', 'name', or 'original'.
 * @returns A new object with keys derived from the specified field and values consisting of copies of the corresponding `isoData` objects with an additional `code` property.
 */
function getAsKey(
    field: 'language' | 'name' | 'original' | 'locale' | 'language-code'
): Record<string, CountryData> {
    let result: Record<string, CountryData> = {}

    for (const iso in isoList) {
        const country: Country = isoList[iso as ISOCode]
        if (field === 'locale' || field === 'language-code') {
            const results = useKey(iso as ISOCode, country, field)
            result = { ...result, ...results }
        } else if (field === 'language') {
            if (country['languages'] instanceof Array) {
                country.languages.forEach((language) => {
                    result[language] = { ...country, code: iso as ISOCode }
                })
            }
        } else {
            const keyValue = country[field]
            result[keyValue] = { ...country, code: iso as ISOCode }
        }
    }

    return result
}

/**
 * Generates an array of objects suitable for React Select options based on the specified field.
 *
 * @param {string} key - The field to use as the key for the resulting object. It can be one of 'iso', 'language', 'name', 'original', 'language-code', or 'locale'.
 * @param {string} value - The field to use as the value for the resulting object. It can be one of 'iso', 'language', 'name', 'original', 'language-code', or 'locale'.
 * @returns {Object[]} An array of objects suitable for React Select options.
 */
function getKeyValue(key: IsoDataType, value: IsoDataType): { value: string; label: string }[] {
    const result = [];

    for (const iso in isoList) {
        const keyValue = ISO(iso as ISOCode, key);
        const country = ISO(iso as ISOCode, value);

        if (keyValue instanceof Array) {
            keyValue.forEach((item) => {
                result.push({
                    value: item,
                    label: country.toString(),
                });
            });
        } else {
            result.push({
                value: keyValue.toString(),
                label: country.toString(),
            });
        }
    }

    return result;
}

/**
 * This function retrieves country data by its name.
 *
 * @param {string} name - The name of the country to fetch data for.
 * @return {CountryData} Returns country data for the given name
 * or null if no matching country is found.
 */
function getCountry(name: string): CountryData | false {
    for (const iso in isoList) {
        const isoData = isoList[iso as ISOCode]

        if (isoData.name === name || isoData.original === name) {
            return { ...isoData, code: iso as ISOCode }
        }
    }

    return false
}

export {
    isValidIso,
    format,
    ISO,
    getCountry,
    getCountryData,
    getCountriesByISO,
    getCountriesByLanguage,
    getAsKey,
    getKeyValue,
    getAll,
    getAllLanguagesByISO,
    getAllLanguageCodesByISO,
}
