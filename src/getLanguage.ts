import type { ISOLangCode, ISOLanguage, Language } from './types'
import { isoLang } from './lang'
import { getIso } from './iso'
import { getLanguageName, getLanguageOriginalName } from './get'
import { isValidLanguage } from './validation'

/**
 * Retrieves the ISO language object based on the provided language code.
 *
 * @param {ISOLangCode | string} languageCode - The language code to search for.
 * @return {ISOLanguage[ISOLangCode] | false} The ISO language object corresponding to the language code, or false if the language code is invalid.
 */
export function getLanguage(languageCode: ISOLangCode | string): ISOLanguage[ISOLangCode] | false {
    if (isValidLanguage(languageCode)) {
        return isoLang[languageCode]
    }
    return false
}

/**
 * Retrieves the language data for the specified language code.
 *
 * @param languageCode - The language code or locale.
 * @returns The language data as a `Language` object if found, or `false` if not found.
 */
export function getLanguageData(languageCode: string): Language | false {
    let language: string = ''
    // check if the languageCode has 2 characters
    if (languageCode.length === 2) {
        language = languageCode
    } else if (languageCode.length === 5) {
        // get the country code from the language code or locale
        language = languageCode.substring(0, 2)
    } else {
        return false
    }

    return getLanguage(language)
}

/**
 * Fetches the languages associated with the given ISO code.
 *
 * @param {string} iso - The ISO code of the country.
 * @param format - The isoFormat to return the data in.
 * @private
 * @return {string[] | false} An array of languages associated with the ISO code,
 *                            or false if no data found.
 */
export function getLanguages(
    iso: string,
    format?: 'locale' | 'language-code' | 'language' | 'language-name' | 'language-original'
): string[] | false {
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
        case 'language-name':
            return isoData.languages.map((language) => {
                return getLanguageName(language)
            })
        case 'language-original':
            return isoData.languages.map((language) => {
                return getLanguageOriginalName(language)
            })
        default:
            return isoData.languages
    }
}
