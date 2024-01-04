import {
    CountryDataExtended,
    CountryExtraFields,
    CountryFields,
    CountryGeoFields,
    IsoCodeFormat,
    LanguageFields,
} from './types.js'
import { validateISO } from './validation.js'

export function isExtraField(fields: string[]): fields is CountryExtraFields[] {
    return (
        fields.includes('TLD') ||
        fields.includes('Dial') ||
        fields.includes('currency_code') ||
        fields.includes('currency')
    )
}

export function isGeoField(fields: string[]): fields is CountryGeoFields[] {
    return (
        fields.includes('Capital') ||
        fields.includes('Region') ||
        fields.includes('subRegion') ||
        fields.includes('intermediateRegion') ||
        fields.includes('name_formal')
    )
}

export function isLanguageCodeFormat(value: string): value is IsoCodeFormat {
    return value === 'locale' || value === 'language-code'
}

export function isCountryFormat(value: string): value is CountryFields {
    return value === 'iso3' || value === 'languages' || value === 'name' || value === 'original'
}
export function isLanguageFormat(value: string): value is LanguageFields {
    return value === 'iso3' || value === 'name' || value === 'original'
}

export function findMatchingFields(
    countryData: Partial<CountryDataExtended>,
    fields: string[] | string
): Partial<keyof CountryDataExtended>[] {
    const fieldsCollected: Partial<keyof CountryDataExtended>[] = []
    for (const field of fields) {
        if (field in countryData) {
            fieldsCollected.push(field as keyof CountryDataExtended)
        }
    }
    return fieldsCollected
}

/**
 * Returns a separator based on the given type.
 *
 * @private
 * @param {('locale' | 'language-code')} type - The type of separator to get.
 * @return {string} - The separator.
 */
export function getSeparator(type?: string | IsoCodeFormat): string {
    if (type && isLanguageCodeFormat(type)) {
        return type === 'locale' ? '_' : '-'
    }
    return type ?? '-'
}

export function isCountryOrLanguage(input: string): 'country' | 'language' | false {
    if (input.length <= 3) {
        if (input === input.toUpperCase()) {
            return 'country'
        } else if (input === input.toLowerCase()) {
            return 'language'
        }
    }
    return false
}

/**
 * Get country data by a given a locale formatIso (e.g. "en_US") or a language code (e.g. "en-US").
 *
 * @param {string} isoCode - A language code in the form of "Locale_Format"
 * @return {Country | false} Returns CountryData if a match is found, null otherwise
 */
export function parseIsoCodes(
    isoCode: string
):
    | { language: string | undefined; separator: string | undefined; country: string | undefined }
    | false {
    const codeLength = isoCode.length
    if (codeLength === 2 || codeLength === 3) {
        if (isoCode.toUpperCase() === isoCode) {
            return {
                language: undefined,
                separator: undefined,
                country: validateISO(isoCode as string, 'country') ? isoCode : undefined,
            }
        } else if (isoCode.toLowerCase() === isoCode) {
            return {
                language: validateISO(isoCode as string, 'language') ? isoCode : undefined,
                separator: undefined,
                country: undefined,
            }
        }
    } else if (codeLength === 5) {
        return parseIso5Code(isoCode)
    }
    return false
}

export function parseIso5Code(isoCode: string) {
    return {
        language: isoCode[0] + isoCode[1],
        separator: isoCode[2],
        country: isoCode[3] + isoCode[4],
    }
}
