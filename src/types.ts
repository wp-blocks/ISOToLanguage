import { countriesIso } from './data/countries-iso'
import { langIso } from './data/lang-iso'

/** The Country code */
export interface Country {
    iso3: string
    languages: ISOLangCode[] | LanguageData[]
    name: string
    original: string
}
export type CountryFields = keyof Country

/** The Country code type e.g. 'GB' 'US' */
export type ISOCountryCode = keyof typeof countriesIso

export interface CountryData extends Country {
    iso2: ISOCountryCode
    locale: string[]
    'language-code': string | string[]
}
export type CountryExtendedFields = keyof CountryData
export type ISOCountry = Record<ISOCountryCode, Country>

export interface CountryGeo {
    Capital?: string;
    Region: string;
    Continent: string;
    subRegion: string;
    intermediateRegion?: string;
    name_formal?: string;
}
export type CountryGeoFields = keyof CountryGeo
export type ISOCountryGeo = Record<ISOCountryCode, CountryGeo>

export interface CountryExtra {
    TLD?: string;
    Dial?: string;
    currency_code?: string;
    currency?: string;
}
export type CountryExtraFields = keyof CountryExtra
export type ISOCountryExtra = Record<ISOCountryCode, CountryExtra>

/**
 * Country data fields to retrieve.
 */
export type CountryDataFields = CountryFields | CountryExtendedFields | CountryExtraFields | CountryGeoFields | 'language-extra' | 'country-extra' | 'country-geo' | 'all'
export type CountryDataExtended = CountryGeo & CountryExtra & CountryData


/** The way to format the language code */
export type CountryCodeFormat = 'country-iso'
export type CountryFormat = CountryCodeFormat | CountryDataFields

/** The Language code */
export interface Language {
    iso3: string
    name: string
    original: string
}
export type LanguageFields = keyof Language

export interface LanguageData extends Language {
    iso2: ISOLangCode
}
export type LanguageDataFields = keyof LanguageData

// The Language code type e.g. 'en' 'fr'
export type ISOLangCode = keyof typeof langIso
export type ISOLanguage = Record<ISOLangCode, Language>

/** The format of the ISO */
// The way to format the language code
export type LanguageCodeFormat = 'locale' | 'language-code' | 'language-iso'
export type LanguageFormat = LanguageCodeFormat | LanguageDataFields

export type IsoFormat = CountryFormat | LanguageFormat

// Type of ISO
export type IsoType = 'country' | 'language'
