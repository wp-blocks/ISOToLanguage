import type { ISOCode, IsoDataType } from './types'

import { isoCountries } from './countries'
import { format } from './format'

/**
 * Retrieves all ISO codes from the isoCountries object.
 *
 * This function does not accept any parameters.
 *
 * @private
 * @return {string[]} An array of ISO codes.
 */
export function getAllISO(): string[] {
    return Object.keys(isoCountries)
}

/**
 * Retrieves all available languages.
 * @private
 *
 * @returns {string[]} An array of all available languages.
 */
export function getAllLanguages(): string[] {
    const languages: Record<string, boolean> = {}
    for (const iso in isoCountries) {
        for (const language of isoCountries[iso as ISOCode].languages) {
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
export function getAllCountryLanguage(separator: string = '_'): string[] {
    const languageCodes: Record<string, boolean> = {}
    for (const iso in isoCountries) {
        for (const language of isoCountries[iso as ISOCode].languages) {
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
export function getAllLanguageCodes(): string[] {
    return getAllCountryLanguage('-')
}

/**
 * Returns an array of all language codes.
 * @private
 *
 * @returns {string[]} - An array of language codes.
 */
export function getAllLocales(): string[] {
    return getAllCountryLanguage()
}

/**
 * Iterates over isoCountries and collects the name property
 * of each item into an array.
 *
 * This function takes no parameters.
 * @private
 *
 * @return {string[]} An array of names collected from isoCountries.
 */
export function getAllNames(): string[] {
    const names: string[] = []
    for (const iso in isoCountries) {
        names.push(isoCountries[iso as ISOCode].name)
    }
    return names
}

/**
 * Retrieves all original names from the isoCountries.
 *
 * This function iterates over each element in the isoCountries, extracting
 * the 'original' property value, and stores them in an array. The
 * array of original names is then returned.
 * @private
 *
 * @return {string[]} An array of original names from the isoCountries.
 */
export function getAllOriginalNames(): string[] {
    const names: string[] = []
    for (const iso in isoCountries) {
        names.push(isoCountries[iso as ISOCode].original)
    }
    return names
}

/**
 * Retrieves all items of a specified type.
 *
 * @param {string} type - Type of items to retrieve. It Can be "iso", "languages",
 * "names", "original", "language-codes", or "locale". If no type is provided, return the isoCountries.
 * @return Depending on the type parameter, either a list of ISOs, languages,
 * names, original names, or the isoCountries.
 */
export function getAll(type?: IsoDataType): string[] | typeof isoCountries {
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
            return isoCountries
    }
}
