import { getLanguage } from './getLanguage'
import { getIso } from './iso'

/**
 * Returns the name associated with the given ISO code.
 *
 * @param {string} iso - An ISO code
 * @private
 * @return {string | false} The name associated with the ISO code,
 * or false if no such ISO code exists.
 */
export function getNameByISO(iso: string): string | false {
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
export function getOriginalNameByISO(iso: string): string | false {
    const isoData = getIso(iso)
    return isoData ? isoData.original : false
}

/**
 * Retrieves the name of a language based on its language code.
 *
 * @param {string} languageCode - The language code to retrieve the name for.
 * @return {string | false} The name of the language if found, otherwise false.
 */
export function getLanguageName(languageCode: string): string {
    const language = getLanguage(languageCode)
    return language ? language.name : languageCode
}

/**
 * Retrieves the original name of a language based on its code.
 *
 * @param {string} languageCode - The code of the language.
 * @return {string | false} - The original name of the language, or false if not found.
 */
export function getLanguageOriginalName(languageCode: string): string {
    const language = getLanguage(languageCode)
    return language ? language.original : languageCode
}
