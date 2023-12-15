import { describe, expect } from '@jest/globals'
import ISOToLanguage from '../src'
import { isoList } from '../src/iso'

describe('ISOToLanguage', () => {
    let isoToLanguage: ISOToLanguage

    beforeEach(() => {
        isoToLanguage = new ISOToLanguage()
    })

    describe('getAllLanguagesByISO', () => {
        it('should return all languages associated with the given ISO codes', () => {
            const isoCodes = ['AD', 'AE', 'AF']
            const result = isoToLanguage.getAllLanguagesByISO(isoCodes)
            const expectedLanguages = Array.from(
                new Set(
                    isoCodes.flatMap((isoCode) => isoList[isoCode].languages)
                )
            )

            expect(result).toEqual(expectedLanguages)
        })

        it('should return an empty array for an empty input', () => {
            const result = isoToLanguage.getAllLanguagesByISO([])
            expect(result).toEqual([])
        })

        it('should return an empty array for invalid ISO codes', () => {
            const isoCodes = ['InvalidCode1', 'InvalidCode2']
            const result = isoToLanguage.getAllLanguagesByISO(isoCodes)
            expect(result).toEqual([])
        })
    })

    describe('getAllLanguageCodesByISO', () => {
        it('should return all language codes associated with the given ISO codes', () => {
            const isoCodes = ['AD', 'AE', 'AF']
            const result = isoToLanguage.getAllLanguageCodesByISO(isoCodes)
            const expectedLanguageCodes = Array.from(
                new Set(
                    isoCodes.flatMap((isoCode) => {
                        return isoList[isoCode].languages.map(
                            (language) => `${language}-${isoCode}`
                        )
                    })
                )
            )

            expect(result).toEqual(expectedLanguageCodes)
        })

        it('should return all language codes associated with the given ISO codes', () => {
            const isoCodes = ['AD', 'AE', 'AF']
            const result = isoToLanguage.getAllLanguageCodesByISO(isoCodes, 'locale')
            const expectedLanguageCodes = Array.from(
                new Set(
                    isoCodes.flatMap((isoCode) => {
                        return isoList[isoCode].languages.map(
                            (language) => `${language}_${isoCode}`
                        )
                    })
                )
            )

            expect(result).toEqual(expectedLanguageCodes)
        })

        it('should return an empty array for an empty input', () => {
            const result = isoToLanguage.getAllLanguageCodesByISO([])
            expect(result).toEqual([])
        })

        it('should return an empty array for invalid ISO codes', () => {
            const isoCodes = ['InvalidCode1', 'InvalidCode2']
            const result = isoToLanguage.getAllLanguageCodesByISO(isoCodes)
            expect(result).toEqual([])
        })
    })
})
