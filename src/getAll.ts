import { CountryFormat, ISOCountryCode, LanguageCodeFormat, LanguageFormat } from './types'

import { countriesIso } from './data/countries-iso'
import { formatIso } from './formatIso'
import { langIso } from './data/lang-iso'

/**
 * Returns an array of languages divided by a custom separator.
 *
 * @private
 * @param {string} type - The separator used to join the language and country code. Defaults to '_'.
 * @returns {string[]} - An array of language codes.
 */
function getAllBy(
    field: CountryFormat | LanguageFormat,
    type: LanguageCodeFormat = 'locale'
): string[] {
    const languageCodes: Record<string, boolean> = {}
    for (const country in countriesIso) {
        for (const language of countriesIso[country as ISOCountryCode].languages) {
            const languageCode = formatIso({ language, country, type })
            if (languageCode) {
                languageCodes[languageCode] = true
            }
        }
    }
    return Object.keys(languageCodes)
}

/**
 * Retrieves all items of a specified type.
 *
 * @param {string} field - Type of items to retrieve. It Can be "iso", "languages",
 * "names", "original", "language-codes", or "locale". If no type is provided, return the isoCountries.
 * @param type - Optional. Specify the type of key to generate. It Can be one of 'locale' or 'language-code'. Defaults to 'locale'.
 * @return Depending on the type parameter, either a list of ISOs, languages,
 * names, original names, or the isoCountries.
 */
export function getAll(
    field?: CountryFormat | LanguageFormat,
    type?: LanguageCodeFormat
): string[] | typeof countriesIso {
    if (field) {
        switch (field) {
            case 'country-iso':
                return Object.keys(countriesIso)
            case 'language-iso':
                return Object.keys(langIso)
            case 'name':
            case 'original':
                return getAllBy(type)
            default:
                return Object.entries(countriesIso).map(([iso, { name, original }]) => ({
                    iso,
                    name,
                    original,
                }))
        }
    } else {
        return countriesIso
    }
}
