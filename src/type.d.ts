import { isoList } from './iso'

// The ISO language code type e.g. 'UK' 'US'
type ISOCode = keyof typeof isoList
type ISOCountry = typeof isoList

// the object that holds the ISO data for a specified language
interface Country {
    languages: string[]
    name: string
    original: string
}

// the object that holds the data for a specified language included the ISO code for that language
interface CountryData extends Country {
    code: ISOCode
}

type IsoDataType = 'iso' | 'language' | 'name' | 'original' | 'language-code' | 'locale'
