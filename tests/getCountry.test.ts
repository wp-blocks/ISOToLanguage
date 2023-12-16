import { describe, expect } from '@jest/globals'
import ISOToLanguage from '../src/index'

let isoToLanguage: ISOToLanguage

describe('ISOToLanguage', () => {

    beforeEach(() => {
        isoToLanguage = new ISOToLanguage()
    })

    describe('getCountry', () => {
        it('should return the country data for a valid country name', () => {
            const resultByName = isoToLanguage.getCountry('Andorra')
            const expectedDataAD = {
                code: 'AD',
                languages: ['ca'],
                name: 'Andorra',
                original: 'Andorra',
            }
            const resultByOriginal = isoToLanguage.getCountry(
                'دولة الإمارات العربية المتحدة'
            )
            const expectedDataAE = {
                code: 'AE',
                languages: ['ar'],
                name: 'United Arab Emirates',
                original: 'دولة الإمارات العربية المتحدة',
            }

            expect(resultByName).toEqual(expectedDataAD)
            expect(resultByOriginal).not.toBeNull()
            expect(resultByOriginal).toEqual(
                expect.objectContaining(expectedDataAE)
            )
        })

        it('should return null for an invalid country name', () => {
            const result = isoToLanguage.getCountry('InvalidName')

            expect(result).toBeFalsy()
        })
    })
})
