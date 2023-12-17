import { describe, expect } from '@jest/globals'
import { ISO } from '../src/ISOToLanguage'
import { isoList } from '../src/iso'

describe('get', () => {
    describe('getByIso', () => {
        it('should return languages for the provided ISO code and type "languages"', () => {
            const isoCode = 'AD'
            const result = ISO(isoCode, 'language')
            const expectedLanguages = isoList[isoCode].languages.map((language) => `${language}`)

            expect(result).toEqual(expectedLanguages)
        })

        it('should return languages for the provided ISO code and type "locale"', () => {
            const isoCode = 'AD'
            const result = ISO(isoCode, 'locale')
            const expectedLanguages = isoList[isoCode].languages.map(
                (language) => `${language}_${isoCode}`
            )

            expect(result).toEqual(expectedLanguages)
        })

        it('should return languages for the provided ISO code and type "language-code"', () => {
            const isoCode = 'AD'
            const result = ISO(isoCode, 'language-code')
            const expectedLanguages = isoList[isoCode].languages.map(
                (language) => `${language}-${isoCode}`
            )

            expect(result).toEqual(expectedLanguages)
        })

        it('should return false for an invalid type', () => {
            const isoCode = 'AD'
            const result = ISO(isoCode, 'invalidType' as unknown as 'locale')

            expect(result).toMatchObject({
                languages: ['ca'],
                name: 'Andorra',
                original: 'Andorra',
            })
        })

        it('should return ISO data for a valid ISO code', () => {
            const validISO = 'AD'
            const result = ISO(validISO)
            const expectedData = isoList[validISO]

            expect(result).toEqual(expectedData)
        })

        it('should return ISO data for a valid ISO code', () => {
            const validISO = 'HH'
            const result = ISO(validISO)

            expect(result).toBeFalsy()
        })

        it('should return languages for the provided ISO code and type "languages"', () => {
            const isoCode = 'AD'
            const result = ISO(isoCode, 'locale')
            const expectedLanguages = isoList[isoCode].languages.map(
                (language) => `${language}_${isoCode}`
            )

            expect(result).toEqual(expectedLanguages)
        })

        it('should return name for the provided ISO code and type "names"', () => {
            const isoCode = 'AD'
            const result = ISO(isoCode, 'name')
            const expectedName = isoList[isoCode].name

            expect(result).toEqual(expectedName)
        })

        it('should return original data for the provided ISO code and type "original"', () => {
            const isoCode = 'AD'
            const result = ISO(isoCode, 'original')
            const expectedOriginal = isoList[isoCode].original

            expect(result).toEqual(expectedOriginal)
        })

        it('should return ISO data for the provided ISO code and no type', () => {
            const isoCode = 'AD'
            const result = ISO(isoCode)
            const expectedData = isoList[isoCode]

            expect(result).toEqual(expectedData)
        })

        it('should return ISO data for the provided ISO code and no type', () => {
            const isoCode = null
            const result = ISO(isoCode as unknown as string)
            const expectedData = false

            expect(result).toEqual(expectedData)
        })

        it('should return ISO data for a valid ISO code', () => {
            const validISO = 'IT'
            const result = ISO(validISO)
            const expectedData = {
                languages: ['it'],
                name: 'Italy',
                original: 'Italia',
            }

            expect(result).toEqual(expectedData)
        })

        it('should return languages for the provided ISO code and type "languages"', () => {
            const isoCode = undefined
            const result = ISO(isoCode as unknown as string, 'language')

            expect(result).toBeFalsy()
        })

        it('should return false for an invalid ISO code', () => {
            const invalidISO = 'InvalidCode'
            const result = ISO(invalidISO)

            expect(result).toBe(false)
        })

        it('should return false for an empty ISO code', () => {
            const emptyISO = ''
            const result = ISO(emptyISO)

            expect(result).toBe(false)
        })

        it('should return false for undefined ISO code', () => {
            const result = ISO(undefined as unknown as string)

            expect(result).toBe(false)
        })

        it('should return false for null ISO code', () => {
            const result = ISO(null as unknown as string)

            expect(result).toBe(false)
        })

        it('should return false for a non-string ISO code', () => {
            const nonStringISO = 123
            const result = ISO(nonStringISO as unknown as string)

            expect(result).toBe(false)
        })
    })
})
