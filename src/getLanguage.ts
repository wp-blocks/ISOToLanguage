import type {
    ISOLangCode,
    Language,
    LanguageData,
    LanguageDataFields,
    LanguageFields,
} from './types.js'
import { validateISO } from './validation.js'
import { langIso } from './data/lang-iso.js'

/**
 * Retrieves the ISO language object based on the provided language code.
 *
 * @param {ISOLangCode | string} key - The language code to search for.
 * @param {string} fields - The fields to retrieve. If not provided, all fields are returned.
 * @return {ISOLanguage | false} The ISO language object corresponding to the language code, or false if the language code is invalid.
 */
export function getLanguage(
    key: string,
    fields?: string | string[] | LanguageDataFields | LanguageData
): LanguageData | string | string[] | false {
    let language: Language | false = false
    let isoCode: ISOLangCode | false = false

    // check if the key is a valid language code
    if (validateISO(key, 'language')) {
        language = { ...langIso[key as ISOLangCode] }
        isoCode = key as ISOLangCode
    } else {
        // Otherwise, loop for each language and find if the field matches the iso
        for (const lang of Object.entries(langIso)) {
            // if the name matches the iso, then return the language
            if (lang[1].name === key || lang[1].original === key || lang[1].iso3 === key) {
                language = lang[1]
                isoCode = lang[0] as ISOLangCode
                break
            }
        }
    }

    if (language) {
        if (fields) {
            // if the fields are iso, return the isoCode otherwise create the array of fields to return
            if (fields === 'iso2') {
                return isoCode
            } else if (fields === 'all') {
                fields = ['iso2', 'name', 'original', 'iso3']
            } else if (typeof fields === 'string') {
                fields = [fields]
            }

            // if the fields are not an iso, return the fields
            const collected = [] as Partial<LanguageData>
            if (Object.keys(fields).length === 1) {
                return language[Object.values(fields)[0] as LanguageFields]
            } else {
                for (const field in fields) {
                    collected[field as LanguageFields] = language[field as LanguageFields]
                }
            }

            // return the collected fields
            return collected as LanguageData
        }
        // if the fields are not defined, return the language object
        return { ...language, iso2: isoCode } as LanguageData
    }

    return false
}
