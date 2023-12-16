import { describe, expect } from '@jest/globals'
import ISOToLanguage from '../src/index'
import { isoList } from '../src/iso'

describe('get', () => {
    let isoToLanguage: ISOToLanguage

    beforeEach(() => {
        isoToLanguage = new ISOToLanguage()
    })

    describe('getByIso', () => {
        it('should return languages for the provided ISO code and type "languages"', () => {
            const isoCode = 'AD'
            const result = isoToLanguage.get(isoCode, 'languages')
            const expectedLanguages = isoList[isoCode].languages.map(
                (language) => `${language}`
            )

            expect(result).toEqual(expectedLanguages)
        })

        it('should return languages for the provided ISO code and type "locale"', () => {
            const isoCode = 'AD'
            const result = isoToLanguage.get(isoCode, 'locale')
            const expectedLanguages = isoList[isoCode].languages.map(
                (language) => `${language}_${isoCode}`
            )

            expect(result).toEqual(expectedLanguages)
        })

        it('should return languages for the provided ISO code and type "language-code"', () => {
            const isoCode = 'AD'
            const result = isoToLanguage.get(isoCode, 'language-code')
            const expectedLanguages = isoList[isoCode].languages.map(
                (language) => `${language}-${isoCode}`
            )

            expect(result).toEqual(expectedLanguages)
        })

        it('should return languages for the provided ISO code and type "languages"', () => {
            const isoCode = 'AD'
            const result = isoToLanguage.get(isoCode, 'locale')
            const expectedLanguages = isoList[isoCode].languages.map(
                (language) => `${language}_${isoCode}`
            )

            expect(result).toEqual(expectedLanguages)
        })

        it('should return name for the provided ISO code and type "names"', () => {
            const isoCode = 'AD'
            const result = isoToLanguage.get(isoCode, 'names')
            const expectedName = isoList[isoCode].name

            expect(result).toEqual(expectedName)
        })

        it('should return original data for the provided ISO code and type "original"', () => {
            const isoCode = 'AD'
            const result = isoToLanguage.get(isoCode, 'original')
            const expectedOriginal = isoList[isoCode].original

            expect(result).toEqual(expectedOriginal)
        })

        it('should return ISO data for the provided ISO code and no type', () => {
            const isoCode = 'AD'
            const result = isoToLanguage.get(isoCode)
            const expectedData = isoList[isoCode]

            expect(result).toEqual(expectedData)
        })

        it('should return ISO data for the provided ISO code and no type', () => {
            const isoCode = null
            const result = isoToLanguage.get(isoCode as unknown as string)
            const expectedData = false

            expect(result).toEqual(expectedData)
        })

        it('should return false for an invalid type', () => {
            const isoCode = 'AD'
            const result = isoToLanguage.get(isoCode, 'invalidType' as unknown as 'locale')

            expect(result).toMatchObject({
                languages: ['ca'],
                name: 'Andorra',
                original: 'Andorra',
            })
        })

        it('should return ISO data for a valid ISO code', () => {
            const validISO = 'AD'
            const result = isoToLanguage.get(validISO)
            const expectedData = isoList[validISO]

            expect(result).toEqual(expectedData)
        })

        it('should return ISO data for a valid ISO code', () => {
            const validISO = 'IT'
            const result = isoToLanguage.get(validISO)
            const expectedData = {
                languages: ['it'],
                name: 'Italy',
                original: 'Italia',
            }

            expect(result).toEqual(expectedData)
        })

        it('should return false for an invalid ISO code', () => {
            const invalidISO = 'InvalidCode'
            const result = isoToLanguage.get(invalidISO)

            expect(result).toBe(false)
        })

        it('should return false for an empty ISO code', () => {
            const emptyISO = ''
            const result = isoToLanguage.get(emptyISO)

            expect(result).toBe(false)
        })

        it('should return false for undefined ISO code', () => {
            const result = isoToLanguage.get(undefined as unknown as string)

            expect(result).toBe(false)
        })

        it('should return false for null ISO code', () => {
            const result = isoToLanguage.get(null as unknown as string)

            expect(result).toBe(false)
        })

        it('should return false for a non-string ISO code', () => {
            const nonStringISO = 123
            const result = isoToLanguage.get(nonStringISO as unknown as string)

            expect(result).toBe(false)
        })
    })
})
