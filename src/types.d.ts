import { isoCountries } from './countries.ts'
import { isoLang } from './lang.ts'

// The ISO language code type e.g. 'UK' 'US'
type ISOCode = keyof typeof isoCountries
type ISOCountry = typeof isoCountries

type ISOLangCode = keyof typeof isoLang
type ISOLanguage = typeof isoLang

// the object that holds the ISO data for a specified language
interface Country {
    languages: string[]
    name: string
    original: string
}

interface Language {
    name: string
    original: string
}

// the object that holds the data for a specified language included the ISO code for that language
interface CountryData extends Country {
    code: ISOCode
}

interface LanguageData extends Language {
    code: ISOLanguage
}

/**
 * the data type that can be retrieved by the `ISO` functions
 */
type IsoDataType =
    | 'iso'
    | 'name'
    | 'original'
    | 'language'
    | 'language-name'
    | 'language-original'
    | 'language-code'
    | 'locale'
