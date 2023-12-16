import { describe, expect } from '@jest/globals'
import ISOToLanguage from '../src/index'
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
})
