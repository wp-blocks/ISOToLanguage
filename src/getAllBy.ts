import { getIso } from './iso'
import { isoFormat } from './isoFormat'

/**
 * Retrieves all languages associated with the given array of ISO codes.
 *
 * @param {string[]} isos - An array of ISO codes.
 * @return {string[]} An array of all languages associated with the given ISO codes.
 */
export function getAllLanguagesByISO(isos: string[]): string[] {
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
export function getAllLanguageCodesByISO(isos: string[], type?: string): string[] {
    const languageCodes: Record<string, boolean> = {}
    const separator = type === 'locale' ? '_' : '-'

    for (const iso of isos) {
        const isoData = getIso(iso)
        if (isoData) {
            isoData.languages.forEach((language) => {
                const languageCode = isoFormat(language, iso, { separator })
                if (languageCode) {
                    languageCodes[languageCode] = true
                }
            })
        }
    }

    return Object.keys(languageCodes)
}
