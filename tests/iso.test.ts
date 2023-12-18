import { describe, expect } from '@jest/globals'
import { isoTL } from '../src/'
import { isoCountries } from '../src/countries'

describe('ISO', () => {
    it('should return languages for the provided ISO code and type "languages"', () => {
        const isoCode = 'AD'
        const result = isoTL(isoCode, 'language')
        const expectedLanguages = isoCountries[isoCode].languages.map((language) => `${language}`)

        expect(result).toEqual(expectedLanguages)
    })

    it('should return languages for the provided ISO code and type "locale"', () => {
        const isoCode = 'AD'
        const result = isoTL(isoCode, 'locale')
        const expectedLanguages = isoCountries[isoCode].languages.map(
            (language) => `${language}_${isoCode}`,
        )

        expect(result).toEqual(expectedLanguages)
    })

    it('should return languages for the provided ISO code and type "language-code"', () => {
        const isoCode = 'AD'
        const result = isoTL(isoCode, 'language-code')
        const expectedLanguages = isoCountries[isoCode].languages.map(
            (language) => `${language}-${isoCode}`,
        )

        expect(result).toEqual(expectedLanguages)
    })

    it('should return false for an invalid type', () => {
        const isoCode = 'AD'
        const result = isoTL(isoCode, 'invalidType' as unknown as 'locale')

        expect(result).toMatchObject({
            languages: ['ca'],
            name: 'Andorra',
            original: 'Andorra',
        })
    })

    it('should return ISO data for a valid ISO code', () => {
        const validISO = 'AD'
        const result = isoTL(validISO)
        const expectedData = isoCountries[validISO]

        expect(result).toEqual(expectedData)
    })

    it('should return ISO data for a valid ISO code', () => {
        const validISO = 'HH'
        const result = isoTL(validISO)

        expect(result).toBeFalsy()
    })

    it('should return languages for the provided ISO code and type "languages"', () => {
        const isoCode = 'AD'
        const result = isoTL(isoCode, 'locale')
        const expectedLanguages = isoCountries[isoCode].languages.map(
            (language) => `${language}_${isoCode}`,
        )

        expect(result).toEqual(expectedLanguages)
    })

    it('should return name for the provided ISO code and type "names"', () => {
        const isoCode = 'AD'
        const result = isoTL(isoCode, 'name')
        const expectedName = isoCountries[isoCode].name

        expect(result).toEqual(expectedName)
    })

    it('should return original data for the provided ISO code and type "original"', () => {
        const isoCode = 'AD'
        const result = isoTL(isoCode, 'original')
        const expectedOriginal = isoCountries[isoCode].original

        expect(result).toEqual(expectedOriginal)
    })

    it('should return languages for the provided ISO code and type "languages"', () => {
        const isoCode = undefined
        const result = isoTL(isoCode as unknown as string, 'language')

        expect(result).toBeFalsy()
    })

    it('should return name for the provided ISO code and type "names"', () => {
        const isoCode = 'AD'
        const result = isoTL(isoCode, 'language-name')
        const expectedName = ['Catalan; Valencian']

        expect(result).toEqual(expectedName)
    })

    it('should return name for the provided ISO code and type "names"', () => {
        const isoCode = 'AD'
        const result = isoTL(isoCode, 'language-original')
        const expectedName = ['Català']

        expect(result).toEqual(expectedName)
    })

    it('should return ISO data for the provided ISO code and no type', () => {
        const isoCode = 'AD'
        const result = isoTL(isoCode)
        const expectedData = isoCountries[isoCode]

        expect(result).toEqual(expectedData)
    })

    it('should return ISO data for the provided ISO code and no type', () => {
        const isoCode = null
        const result = isoTL(isoCode as unknown as string)
        const expectedData = false

        expect(result).toEqual(expectedData)
    })

    it('should return ISO data for a valid ISO code', () => {
        const validISO = 'IT'
        const result = isoTL(validISO)
        const expectedData = {
            languages: ['it'],
            name: 'Italy',
            original: 'Italia',
        }

        expect(result).toEqual(expectedData)
    })

    it('should return false for an invalid ISO code', () => {
        const invalidISO = 'InvalidCode'
        const result = isoTL(invalidISO)

        expect(result).toBe(false)
    })

    it('should return false for an empty ISO code', () => {
        const emptyISO = ''
        const result = isoTL(emptyISO)

        expect(result).toBe(false)
    })

    it('should return false for undefined ISO code', () => {
        const result = isoTL(undefined as unknown as string)

        expect(result).toBe(false)
    })

    it('should return false for null ISO code', () => {
        const result = isoTL(null as unknown as string)

        expect(result).toBe(false)
    })

    it('should return false for a non-string ISO code', () => {
        const nonStringISO = 123
        const result = isoTL(nonStringISO as unknown as string)

        expect(result).toBe(false)
    })
})
