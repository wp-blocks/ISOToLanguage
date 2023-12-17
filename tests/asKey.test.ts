import { describe, expect } from '@jest/globals'
import { getAsKey } from '../src/'

describe('getAsKey', () => {
    describe('getAsKey', () => {
        it('should return an object with languages as keys', () => {
            const result = getAsKey('language')
            const expectedKeys = Object.keys(result)

            expect(expectedKeys.length).toBeGreaterThan(10)
        })

        it('should return an object with names as keys', () => {
            const result = getAsKey('name')
            const expectedKeys = Object.keys(result)

            expect(expectedKeys).toEqual(
                expect.arrayContaining(['Andorra', 'United Arab Emirates', 'Afghanistan'])
            )
        })

        it('should return an object with locale as keys', () => {
            const result = getAsKey('locale')
            const expectedKeys = Object.keys(result)

            expect(expectedKeys).toEqual(
                expect.arrayContaining([
                    'ca_AD',
                    'ar_AE',
                    'ps_AF',
                    'uz_AF',
                    'tk_AF',
                    'en_AG',
                    'en_AI',
                ])
            )
        })

        it('should return an object with language-code as keys', () => {
            const result = getAsKey('language-code')
            const expectedKeys = Object.keys(result)

            expect(expectedKeys).toEqual(
                expect.arrayContaining([
                    'ca-AD',
                    'uz-AF',
                    'tk-AF',
                    'en-AG',
                    'en-AI',
                    'sq-AL',
                    'hy-AM',
                ])
            )
        })

        it('should return an object with original data as keys', () => {
            const result = getAsKey('iso')
            const expectedKeys = Object.keys(result)

            expect(expectedKeys).toEqual(
                expect.arrayContaining(['AD', 'AE', 'AF', 'AG', 'AI', 'AL', 'AM', 'AO', 'AQ', 'AR'])
            )
        })

        it('should return an object with original data as keys', () => {
            const result = getAsKey('original')
            const expectedKeys = Object.keys(result)

            expect(expectedKeys).toEqual(
                expect.arrayContaining([
                    'Andorra',
                    'دولة الإمارات العربية المتحدة',
                    'افغانستان',
                    'Antigua and Barbuda',
                    'Anguilla',
                    'Shqipëria',
                ])
            )
        })
    })
})
