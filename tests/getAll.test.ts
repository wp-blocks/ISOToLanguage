import { describe, expect } from '@jest/globals'
import { getAll } from '../src/ISOToLanguage'
import { isoList } from '../src/iso'

describe('getAll', () => {
    describe('getAll', () => {
        it('should return all ISO codes when type is "iso"', () => {
            const result = getAll('iso')
            const expectedISOs = Object.keys(isoList)

            expect(result).toEqual(expect.arrayContaining(expectedISOs))
        })

        it('should return isoList when no type is provided', () => {
            const result = getAll()
            expect(result).toEqual(isoList)
        })

        it('should return isoList when an invalid type is provided', () => {
            const result = getAll('invalidType' as unknown as 'iso')
            expect(result).toEqual(isoList)
        })

        describe('getAll', () => {
            test.each([
                ['iso', Object.keys(isoList)],
                ['countries', { AD: {}, AE: {} }],
                ['language', ['ar', 'en', 'en', 'en', 'en', 'sq', 'en']],
                [
                    'name',
                    [
                        'Armenia',
                        'Angola',
                        'Antarctica',
                        'Argentina',
                        'American Samoa',
                        'Austria',
                        'Australia',
                    ],
                ],
                [
                    'original',
                    [
                        'دولة الإمارات العربية المتحدة',
                        'افغانستان',
                        'Antigua and Barbuda',
                        'Anguilla',
                        'Shqipëria',
                    ],
                ],
                [
                    'language-code',
                    [
                        'ca-AD',
                        'ar-AE',
                        'ps-AF',
                        'uz-AF',
                        'tk-AF',
                        'en-AG',
                        'en-AI',
                        'sq-AL',
                        'hy-AM',
                        'ru-AM',
                    ],
                ],
                [
                    'locale',
                    [
                        'ca_AD',
                        'ar_AE',
                        'ps_AF',
                        'uz_AF',
                        'tk_AF',
                        'en_AG',
                        'en_AI',
                        'sq_AL',
                        'hy_AM',
                        'ru_AM',
                    ],
                ],
            ])('should return correct result for type "%s"', (type, expected) => {
                // Run the test
                const result = getAll(type)

                if (type !== 'countries') {
                    // Test only a part of the result array
                    expect(result).toEqual(expect.arrayContaining(expected))
                } else {
                    // For other types, test objects
                    expect(result).toMatchObject(expected)
                }
            })
        })
    })
})
