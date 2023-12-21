import { isoCountries } from './countries'
import { isoLang } from './lang'

// The ISO language code type e.g. 'UK' 'US'
export type ISOCode = keyof typeof isoCountries
export type ISOCountry = typeof isoCountries

export type ISOLangCode = keyof typeof isoLang
export type ISOLanguage = typeof isoLang

// the object that holds the ISO data for a specified language
export interface Country {
    languages: string[]
    name: string
    original: string
}

export interface Language {
    name: string
    original: string
}

// the object that holds the data for a specified language included the ISO code for that language
export interface CountryData extends Country {
    code: ISOCode
}

export interface LanguageData extends Language {
    code: ISOLanguage
}

/**
 * the data type that can be retrieved by the `ISO` functions
 */
export type IsoDataType =
    | 'iso'
    | 'name'
    | 'original'
    | 'language'
    | 'language-name'
    | 'language-original'
    | 'language-code'
    | 'locale'
