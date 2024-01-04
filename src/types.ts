import { countriesIso } from './data/countries-iso.js'
import { langIso } from './data/lang-iso.js'
import { LangIso3 } from './data/lang-iso3'

/** Type of ISO */
export type IsoType = 'country' | 'language'

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
}
export type CountryExtendedFields = keyof CountryData
export type ISOCountry = Record<ISOCountryCode, Country>

export interface CountryLocaleData extends Country {
    locale: string[] | string | false
    'language-code': string[] | string | false
}

export interface CountryGeo {
    capital?: string
    region: 'Oceania' | 'Americas' | 'Europe' | 'Africa' | 'Asia'
    continent: 'AF' | 'AN' | 'AS' | 'EU' | 'NA' | 'OC' | 'SA'
    subRegion:
        | 'Sub-Saharan Africa'
        | 'Northern Africa'
        | 'Eastern Africa'
        | 'Middle Africa'
        | 'Southern Africa'
        | 'Western Africa'
        | 'Antarctica'
        | 'Australia and New Zealand'
        | 'Melanesia'
        | 'Micronesia'
        | 'Polynesia'
        | 'Latin America and the Caribbean'
        | 'Caribbean'
        | 'Central America'
        | 'North America'
        | 'South America'
        | 'Central Asia'
        | 'Eastern Asia'
        | 'South-Eastern Asia'
        | 'Southern Asia'
        | 'Western Asia'
        | 'South-eastern Asia'
        | 'Eastern Europe'
        | 'Northern Europe'
        | 'Southern Europe'
        | 'Western Europe'
        | 'Northern America'
    intermediateRegion?:
        | 'Eastern Africa'
        | 'Middle Africa'
        | 'Southern Africa'
        | 'Western Africa'
        | 'Sub-Saharan Africa'
        | 'Northern Africa'
        | 'Antarctica'
        | 'Australia and New Zealand'
        | 'Melanesia'
        | 'Micronesia'
        | 'Polynesia'
        | 'Northern Europe'
        | 'Southern Europe'
        | 'Western Europe'
        | 'Eastern Europe'
        | 'Latin America and the Caribbean'
        | 'Caribbean'
        | 'Central America'
        | 'North America'
        | 'South America'
        | 'Central Asia'
        | 'Eastern Asia'
        | 'South-Eastern Asia'
        | 'Southern Asia'
        | 'Western Asia'
        | 'South-eastern Asia'
        | 'Channel Islands'
    nameFormal?: string
}
export type CountryGeoFields = keyof CountryGeo
export type ISOCountryGeo = Record<ISOCountryCode, CountryGeo>

export interface CountryExtra {
    tld?: string
    dial?: string
    currency_code?: string
    currency?: string
}
export type CountryExtraFields = keyof CountryExtra
export type ISOCountryExtra = Record<ISOCountryCode, CountryExtra>

/**
 * Country data fields to retrieve.
 */
export type CountryDataCustomFields =
    | 'language-extra'
    | 'language-iso3'
    | 'country-extra'
    | 'country-geo'
    | 'all'
export type CountryDataExtraFields = CountryExtendedFields | CountryExtraFields | CountryGeoFields
export type CountryDataFields = CountryDataExtraFields | CountryDataCustomFields | IsoCodeFormat
export type CountryDataExtended = CountryGeo & CountryExtra & CountryData & CountryLocaleData

/**
 * The Language code
 */
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

export interface LanguageIso3 extends Language {
    hierarchy: ISO3LangCode[]
    name: string
}
export type ISO3LangCode = keyof typeof LangIso3
export type ISO3Language = Record<ISO3LangCode, LanguageIso3>

// The Language code type e.g. 'en' 'fr'
export type ISOLangCode = keyof typeof langIso
export type ISOLanguage = Record<ISOLangCode, Language>

/**
 * The format of the ISO code
 */
export type IsoCodeFormat = 'locale' | 'language-code'

export type IsoFormat = IsoCodeFormat
export type IsoCode = ISOCountryCode | ISOLangCode
