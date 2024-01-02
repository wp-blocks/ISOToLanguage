import { Country, CountryData, CountryExtraFields, CountryGeoFields, ISOCountry, ISOLanguage, LanguageCodeFormat, LanguageFormat } from './types'


export function isExtraField(fields: string[]): fields is CountryExtraFields[] {
    return fields.includes('TLD') || fields.includes('Dial') || fields.includes('currency_code') || fields.includes('currency')
}

export function isGeoField(fields: string[]): fields is CountryGeoFields[] {
    return fields.includes('Capital') || fields.includes('Region') || fields.includes('subRegion') || fields.includes('intermediateRegion') || fields.includes('name_formal')
}

export function isLanguageCodeFormat(value: string): value is LanguageCodeFormat {
    return value === 'locale' || value === 'language-code'
}

/**
 * Returns a separator based on the given type.
 *
 * @private
 * @param {('locale' | 'language-code')} type - The type of separator to get.
 * @return {string} - The separator.
 */
export function getSeparator(type?: string | LanguageCodeFormat): string {
    if (type && isLanguageCodeFormat(type)) {
        return type === 'locale' ? '_' : '-'
    }
    return type ?? '-'
}

/**
 * Get country data by a given a locale formatIso (e.g. "en_US") or a language code (e.g. "en-US").
 *
 * @param {string} isoCode - A language code in the form of "Locale_Format"
 * @return {Country | false} Returns CountryData if a match is found, null otherwise
 */
export function parseIsoCodes(isoCode: string): { language: string; country: string } | Error {
    if (isoCode.length === 5) {
        return {
            language: isoCode.substring(0, 2),
            country: isoCode.substring(3, 5),
        }
    }
    throw new Error('Invalid ISO code')
}
