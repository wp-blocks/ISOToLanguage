import type { IsoType } from './types'
import { countriesIso } from './data/countries-iso'
import { langIso } from './data/lang-iso'

function isValidCountry(iso: string): boolean {
    return iso in countriesIso
}

function isValidLanguage(iso: string): boolean {
    return iso in langIso
}

export function validateISO(iso: string, type?: IsoType): boolean | IsoType {
    if (!type) {
        if (isValidCountry(iso)) return 'country'
        if (isValidLanguage(iso)) return 'language'
        return false
    }
    switch (type) {
        case 'country':
            return isValidCountry(iso)
        case 'language':
            return isValidLanguage(iso)
    }
}
