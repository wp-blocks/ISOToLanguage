import type { Country, CountryData, ISOCode, IsoDataType } from './types'

import { getSeparator } from './utils'
import { isoFormat } from './isoFormat'
import { isoCountries } from './countries'
import { isoTL } from './iso'
import { getLanguageBy } from './getBy'

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
export function useKey(
    iso: ISOCode | string,
    countryData: Country,
    type?: 'locale' | 'language-code'
): Record<string, CountryData> {
    const result: { [key: string]: CountryData } = {}
    // Get the separator based on the type
    const separator = getSeparator(type)
    countryData.languages.forEach((language) => {
        // Format the language and country code
        const locale = isoFormat(language, iso, { separator })
        // Add the country data to the result
        if (locale) {
            result[locale] = { ...countryData, code: iso as ISOCode }
        }
    })
    // Return all the matches
    return result
}

/**
 * Retrieves country data based on the specified ISO code or string and language type.
 *
 * @param {ISOCode | string} iso The ISO code or string representing the country.
 * @param {Country} countryData The country data object.
 * @param {'language' | 'language-name' | 'language-original'} type The type of language to retrieve.
 * @returns {Record<string, CountryData>} An object containing the country data for each language key.
 */
export function useLanguageKey(
    iso: ISOCode | string,
    countryData: Country,
    type: 'language' | 'language-name' | 'language-original'
): Record<string, CountryData> {
    const result: Record<string, CountryData> = {}
    // Add the country data to the result
    if (countryData['languages'] instanceof Array) {
        countryData.languages.forEach((language) => {
            // the language type "language" is already of the type needed (2 digit code)
            const key = type === 'language' ? language : getLanguageBy(language, type)
            // Add the country data to the result
            result[key] = { ...countryData, code: iso as ISOCode }
        })
    }
    // Return all the matches
    return result
}

/**
 * Generates a new object where the keys are derived from the specified field of each item in the `isoList` object.
 * The values of the new object are copies of the corresponding `isoData` objects with an additional `code` property set to the ISO code.
 *
 * @param type - The field to use as the key for the resulting object. It can be one of 'language', 'name', or 'original'.
 * @returns A new object with keys derived from the specified field and values consisting of copies of the corresponding `isoData` objects with an additional `code` property.
 */
export function getAsKey(type: IsoDataType): Record<string, CountryData> {
    let result: Record<string, CountryData> = {}

    for (const iso in isoCountries) {
        const country: Country = isoCountries[iso as ISOCode]
        if (type === 'locale' || type === 'language-code') {
            const results = useKey(iso as ISOCode, country, type)
            result = { ...result, ...results }
        } else if (
            type === 'language' ||
            type === 'language-name' ||
            type === 'language-original'
        ) {
            const results = useLanguageKey(iso as ISOCode, country, type)
            result = { ...result, ...results }
        } else if (type === 'iso') {
            result[iso] = { ...country, code: iso as ISOCode }
        } else {
            const keyValue = country[type]
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
export function getKeyValue(
    key: IsoDataType,
    value: IsoDataType
): { value: string; label: string }[] {
    const result = []

    for (const iso in isoCountries) {
        const keyValue = isoTL(iso as ISOCode, key)
        const country = isoTL(iso as ISOCode, value)

        if (keyValue instanceof Array) {
            keyValue.forEach((item) => {
                result.push({
                    value: item,
                    label: country.toString(),
                })
            })
        } else {
            result.push({
                value: keyValue.toString(),
                label: country.toString(),
            })
        }
    }

    return result
}
