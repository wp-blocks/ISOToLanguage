import type { Country, ISOCountryCode } from './types'
import { countriesIso } from './data/countries-iso'

/**
 * Returns a list of countries that speak the given languages.
 * For example, if you pass in ["en", "fr"], it will return all countries that speak English or French.
 * TODO: Add support for AND/OR
 *
 * @param {string[]} languages - An array of languages to check against.
 * @return {{[key: string]: Country}[]} Returns an array of countries that speak any of the
 * given languages.
 */
export function getCountriesByLanguages(languages: string[]): {
    [key: string]: Country
} {
    const result: { [K in ISOCountryCode]?: Country } = {}

    for (const iso in countriesIso) {
        const isoData = countriesIso[iso as ISOCountryCode]

        for (const language of languages) {
            // Check if the iso code is valid and the language matches
            if ((isoData.languages as string[]).includes(language)) {
                result[iso as ISOCountryCode] = isoData
            }
        }
    }

    return result
}
