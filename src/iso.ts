import type { Country, ISOCode, ISOCountry, IsoDataType } from './types'
import { getNameByISO, getOriginalNameByISO } from './get'
import { getLanguages } from './getLanguage'
import { isValidCountry } from './validation'
import { isoCountries } from './countries'

/**
 * Retrieves ISO data by ISO code or string.
 *
 * @private
 * @param {ISOCode | string} iso - ISO code or string.
 * @return {ISOCountry[ISOCode] | false} ISO data if found, otherwise false.
 */
export function getIso(iso: ISOCode | string): ISOCountry[ISOCode] | false {
    // Return false if no data is found
    if (isValidCountry(iso)) {
        return isoCountries[iso]
    }
    return false
}

/**
 * Retrieves data by ISO code and a specific type.
 *
 * @param {string} iso - The ISO code to search for.
 * @param {'language'|'name'|'original'|'language-code'|'locale'} type - The type of data to retrieve.
 *                                                If not provided, default data is returned.
 * @return The data corresponding to the provided ISO and type.
 */
export function isoTL(iso: string, type?: IsoDataType): string | string[] | Country | false {
    if (type !== undefined) {
        if (type === 'name') {
            return getNameByISO(iso)
        } else if (type === 'original') {
            return getOriginalNameByISO(iso)
        } else if (type === 'iso') {
            return iso
        } else if (
            type === 'language' ||
            type === 'language-name' ||
            type === 'language-original' ||
            type === 'language-code' ||
            type === 'locale'
        ) {
            return getLanguages(iso, type)
        }
    }
    return getIso(iso)
}
