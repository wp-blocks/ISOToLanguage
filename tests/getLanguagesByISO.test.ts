import { describe, expect } from '@jest/globals'
import ISOToLanguage from '../src'
import { isoList } from '../src/iso'

describe('ISOToLanguage', () => {
    let isoToLanguage: ISOToLanguage

    beforeEach(() => {
        isoToLanguage = new ISOToLanguage()
    })

    describe('getLanguagesByISO', () => {
        it('should return an array of languages for a valid ISO code', () => {
            const isoCode = 'AD'
            const result = isoToLanguage.getLanguages(isoCode, 'locale')
            const expectedLanguages = isoList[isoCode].languages.map(
                (language) => `${language}_${isoCode}`
            )

            expect(result).toEqual(expectedLanguages)
        })

        it('should return false for an invalid ISO code', () => {
            const isoCode = 'InvalidISO'
            const result = isoToLanguage.getLanguages(isoCode, 'locale')

            expect(result).toBe(false)
        })
    })

    describe('getNameByISO', () => {
        it('should return the name for a valid ISO code', () => {
            const isoCode = 'AD'
            const result = isoToLanguage.getNameByISO(isoCode)
            const expectedName = isoList[isoCode].name

            expect(result).toEqual(expectedName)
        })

        it('should return false for an invalid ISO code', () => {
            const isoCode = 'InvalidISO'
            const result = isoToLanguage.getNameByISO(isoCode)

            expect(result).toBe(false)
        })
    })

    describe('getOriginalByISO', () => {
        it('should return the original data for a valid ISO code', () => {
            const isoCode = 'AD'
            const result = isoToLanguage.getOriginalNameByISO(isoCode)
            const expectedOriginal = isoList[isoCode].original

            expect(result).toEqual(expectedOriginal)
        })

        it('should return false for an invalid ISO code', () => {
            const isoCode = 'InvalidISO'
            const result = isoToLanguage.getOriginalNameByISO(isoCode)

            expect(result).toBe(false)
        })
    })
})
