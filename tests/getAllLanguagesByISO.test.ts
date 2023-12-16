import { describe, expect } from '@jest/globals'
import { getAllLanguageCodesByISO } from '../src/ISOToLanguage'
import { isoList } from '../src/iso'

describe('getAllLanguageCodesByISO', () => {


    it('should return all language codes associated with the given ISO codes', () => {
        const isoCodes = ['AD', 'AE', 'AF']
        const result = getAllLanguageCodesByISO(isoCodes)
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
        const result = getAllLanguageCodesByISO(isoCodes, 'locale')
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
        const result = getAllLanguageCodesByISO([])
        expect(result).toEqual([])
    })

    it('should return an empty array for invalid ISO codes', () => {
        const isoCodes = ['InvalidCode1', 'InvalidCode2']
        const result = getAllLanguageCodesByISO(isoCodes)
        expect(result).toEqual([])
    })
})
