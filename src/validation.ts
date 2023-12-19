import type { ISOCode, ISOLangCode } from './types'
import { isoCountries } from './countries'
import { isoLang } from './lang'

/**
 * Checks if the provided ISO code is valid or not.
 *
 * @param {string} iso - ISO code to be validated
 * @return {boolean} True if the ISO code is valid, false otherwise
 */
export function isValidCountry(iso: string): iso is ISOCode {
    return iso in isoCountries
}

/**
 * Checks if the provided ISO code is valid or not.
 *
 * @param {string} lang - ISO Language code to be validated
 * @return {boolean} True if the ISO Language code is valid, false otherwise
 */
export function isValidLanguage(lang: string): lang is ISOLangCode {
    return lang in isoLang
}
