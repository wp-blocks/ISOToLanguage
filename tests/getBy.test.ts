import { describe, expect } from '@jest/globals'
import ISOToLanguage from '../src'
import { isoList } from '../src/iso'

describe('getBy', () => {
    let isoToLanguage: ISOToLanguage

    beforeEach(() => {
        isoToLanguage = new ISOToLanguage()
    })

    describe('getByIso', () => {
        it('should return languages for the provided ISO code and type "languages"', () => {
            const isoCode = 'AD'
            const result = isoToLanguage.getBy(isoCode, 'languages')
            const expectedLanguages = isoList[isoCode].languages.map(
                (language) => `${language}`
            )

            expect(result).toEqual(expectedLanguages)
        })

        it('should return languages for the provided ISO code and type "locale"', () => {
            const isoCode = 'AD'
            const result = isoToLanguage.getBy(isoCode, 'locale')
            const expectedLanguages = isoList[isoCode].languages.map(
                (language) => `${language}_${isoCode}`
            )

            expect(result).toEqual(expectedLanguages)
        })

        it('should return languages for the provided ISO code and type "language-code"', () => {
            const isoCode = 'AD'
            const result = isoToLanguage.getBy(isoCode, 'language-code')
            const expectedLanguages = isoList[isoCode].languages.map(
                (language) => `${language}-${isoCode}`
            )

            expect(result).toEqual(expectedLanguages)
        })

        it('should return languages for the provided ISO code and type "languages"', () => {
            const isoCode = 'AD'
            const result = isoToLanguage.getBy(isoCode, 'locale')
            const expectedLanguages = isoList[isoCode].languages.map(
                (language) => `${language}_${isoCode}`
            )

            expect(result).toEqual(expectedLanguages)
        })

        it('should return name for the provided ISO code and type "names"', () => {
            const isoCode = 'AD'
            const result = isoToLanguage.getBy(isoCode, 'names')
            const expectedName = isoList[isoCode].name

            expect(result).toEqual(expectedName)
        })

        it('should return original data for the provided ISO code and type "original"', () => {
            const isoCode = 'AD'
            const result = isoToLanguage.getBy(isoCode, 'original')
            const expectedOriginal = isoList[isoCode].original

            expect(result).toEqual(expectedOriginal)
        })

        it('should return ISO data for the provided ISO code and no type', () => {
            const isoCode = 'AD'
            const result = isoToLanguage.getBy(isoCode)
            const expectedData = isoList[isoCode]

            expect(result).toEqual(expectedData)
        })

        it('should return ISO data for the provided ISO code and no type', () => {
            const isoCode = null
            const result = isoToLanguage.getBy(isoCode)
            const expectedData = false

            expect(result).toEqual(expectedData)
        })

        it('should return false for an invalid type', () => {
            const isoCode = 'AD'
            const result = isoToLanguage.getBy(isoCode, 'invalidType')

            expect(result).toMatchObject({
                languages: ['ca'],
                name: 'Andorra',
                original: 'Andorra',
            })
        })
    })
})
