import type { Country, ISOCode, ISOLangCode, Language } from './types'
import { isoLang } from './lang'
import { isValidCountry, isValidLanguage } from './validation'
import { getLanguageName, getLanguageOriginalName } from './get'
import { isoCountries } from './countries'


/**
 * Retrieves the data for a given country from a list of ISO country codes.
 *
 * @param {string[]} isos - the array of ISO country codes to search for
 * @return {Record<string, Country>} The data associated with the country if found, null otherwise.
 */
export function getCountriesByISO(isos: string[]): Record<string, Country> {
    const result: Record<string, Country> = {}

    for (const iso in isos) {
        // check if the key of isoData is the same as the iso code
        if (isValidCountry(isos[iso])) {
            result[isos[iso]] = isoCountries[isos[iso] as ISOCode]
        }
    }

    return result
}

/**
 * Retrieves the language information based on the provided language code.
 *
 * @param {string} language - The language code.
 * @param {'language' | 'language-name' | 'language-original'} type - The type of language information to retrieve.
 * @return {string} The requested language information.
 */
export function getLanguageBy(
    language: string,
    type: 'language' | 'language-name' | 'language-original'
): string {
    // by default, we use the language code
    let key = language
    // if we want the language name or original name
    if (type === 'language-name') {
        key = getLanguageName(language)
    } else if (type === 'language-original') {
        key = getLanguageOriginalName(language)
    }
    return key
}

/**
 * This function takes an array of ISO codes and returns a dictionary of languages
 * corresponding to those codes. It iterates over each ISO code and checks if it is a
 * valid language. If it is, the language is added to the result dictionary.
 *
 * @param {string[]} isos - An array of ISO language codes.
 * @return {Record<string, Language>} A dictionary of languages indexed by their ISO codes.
 */
export function getLanguagesByISO(isos: string[]): Record<string, Language> {
    const result: Record<string, Language> = {}

    for (const iso in isos) {
        // check if the key of isoData is the same as the iso code
        if (isValidLanguage(isos[iso])) {
            result[isos[iso]] = isoLang[isos[iso] as ISOLangCode]
        }
    }

    return result
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
export function getCountriesByLanguage(languages: string[]): {
    [key: string]: Country
} {
    const result: { [K in ISOCode]?: Country } = {}

    for (const iso in isoCountries) {
        const isoData = isoCountries[iso as ISOCode]

        for (const language of languages) {
            // Check if the iso code is valid and the language matches
            if ((isoData.languages as string[]).includes(language)) {
                result[iso as ISOCode] = isoData
            }
        }
    }

    return result
}
