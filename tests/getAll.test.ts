import { describe, expect } from '@jest/globals'
import { getAll } from '../src/'
import { countriesIso } from '../src/data/countries-iso'

describe('getAll', () => {
    it('should return isoList when no type is provided', () => {
        const result = getAll()
        expect(result).toEqual(countriesIso)
    })

    it('should return all ISO codes when type is "iso"', () => {
        const result = getAll('iso2')
        const expectedISOs = Object.keys(countriesIso)

        expect(result).toEqual(expect.arrayContaining(expectedISOs))
    })

    it('should return isoList when an invalid type is provided', () => {
        const result = getAll('invalidType' as unknown as 'iso2')
        expect(result).toEqual(countriesIso)
    })

    describe('getAll deep', () => {
        test.each([
            ['iso2', Object.keys(countriesIso)],
            ['iso3', ['AND', 'ARE', 'AFG', 'ATG', 'AIA', 'ALB', 'ARM', 'AGO', 'ATA', 'ARG']],
            ['languages', ['ar', 'en', 'en', 'en', 'en', 'sq', 'en']],
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
            const result = getAll(
                type as 'iso2' | 'iso3' | 'languages' | 'name' | 'locale' | 'language-code'
            )

            if (type !== 'countries') {
                // Test only a part of the result array
                expect(result).toEqual(expect.arrayContaining(expected as unknown[]))
            } else {
                // For other types, test objects
                expect(result).toMatchObject(
                    expected as Record<string, unknown> | Record<string, unknown>[]
                )
            }
        })
    })
})
