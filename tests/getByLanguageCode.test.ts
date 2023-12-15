import { describe, expect } from '@jest/globals'
import ISOToLanguage from '../src'

describe('ISOToLanguage', () => {
    let isoToLanguage: ISOToLanguage

    beforeEach(() => {
        isoToLanguage = new ISOToLanguage()
    })

    describe('getByLanguageCode', () => {
        it('should return the country data for a valid language code', () => {
            const result = isoToLanguage.getByLocale('AF_tk')
            const expectedData = {
                code: 'AF',
                languages: ['ps', 'uz', 'tk'],
                name: 'Afghanistan',
                original: 'افغانستان',
            }

            expect(result).toEqual(expectedData)
        })

        it('should return null for an invalid language code', () => {
            const result = isoToLanguage.getByLocale('InvalidCode')

            expect(result).toBeNull()
        })
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

describe('ISOToLanguage', () => {
    let isoToLanguage: ISOToLanguage

    beforeEach(() => {
        isoToLanguage = new ISOToLanguage()
    })

    describe('getByLanguageCode', () => {
        it('should return the country data for a valid language code', () => {
            const result = isoToLanguage.getByLocale('AF_tk')
            const expectedData = {
                code: 'AF',
                languages: ['ps', 'uz', 'tk'],
                name: 'Afghanistan',
                original: 'افغانستان',
            }

            expect(result).toEqual(expectedData)
        })

        it('should return null for an invalid language code', () => {
            const result = isoToLanguage.getByLocale('InvalidCode')

            expect(result).toBeNull()
        })

        it('should return null for an invalid ISO code', () => {
            const result = isoToLanguage.getByLocale('Invalid_ISO')

            expect(result).toBeNull()
        })
    })

    describe('getCountriesByISO', () => {
        it('should return an object of country data for valid ISO codes', () => {
            const result = isoToLanguage.getCountriesByISO(['AD', 'AE', 'AF'])
            const expectedData = {
                AD: {
                    languages: ['ca'],
                    name: 'Andorra',
                    original: 'Andorra',
                },
                AE: {
                    languages: ['ar'],
                    name: 'United Arab Emirates',
                    original: 'دولة الإمارات العربية المتحدة',
                },
                AF: {
                    languages: ['ps', 'uz', 'tk'],
                    name: 'Afghanistan',
                    original: 'افغانستان',
                },
            }

            expect(result).toEqual(expectedData)
        })

        it('should return an empty object for an array of invalid ISO codes', () => {
            const result = isoToLanguage.getCountriesByISO([
                'Invalid1',
                'Invalid2',
            ])

            expect(result).toEqual({})
        })

        it('should return an empty object for an empty array', () => {
            const result = isoToLanguage.getCountriesByISO([])

            expect(result).toEqual({})
        })
    })
})
