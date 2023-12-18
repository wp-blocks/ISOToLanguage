import { getSeparator } from './utils'
import { tryCountriesFallback } from './fallbacks'
import { getCountriesByLanguage } from './getBy'

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
export function format(
    language: string,
    country?: string,
    { separator, type }: { separator?: string; type?: 'locale' | 'language-code' } = {}
): string | null {
    // Step 0: Set language to lowercase
    language = language.toLowerCase()

    // Step 1: Set separator based on type or use the default separator
    if (! separator) {
        separator = getSeparator(type)
    }

    // Step 2: Try a defined fallback if country is not provided
    if ( ! country ) {
        country = tryCountriesFallback(language)

        if ( ! country ) {
            const countries = getCountriesByLanguage([language])
            const countriesKeys = Object.keys(countries)
            if (countriesKeys.length === 1) {
                country = countriesKeys[0]
            }
        }
    }

    // Return the formatted string if both language and country are found
    if (country) {
        return `${language}${separator}${country.toUpperCase()}`
    }

    return null
}
