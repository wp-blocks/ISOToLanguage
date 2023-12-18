import { isoList } from './iso'
import { isoLang } from './lang.ts'

// The ISO language code type e.g. 'UK' 'US'
type ISOCode = keyof typeof isoList
type ISOCountry = typeof isoList

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

type IsoDataType =
    | 'iso'
    | 'name'
    | 'original'
    | 'language'
    | 'language-name'
    | 'language-original'
    | 'language-code'
    | 'locale'
