import { describe, expect } from '@jest/globals'
import { getAsKey } from '../src/ISOToLanguage'

describe('getAsKey', () => {
    describe('getAsKey', () => {
        it('should return an object with languages as keys', () => {
            const result = getAsKey('languages')
            const expectedKeys = Object.keys(result)

            expect(expectedKeys.length).toBeGreaterThan(10)
        })

        it('should return an object with names as keys', () => {
            const result = getAsKey('name')
            const expectedKeys = Object.keys(result)

            expect(expectedKeys).toEqual(expect.arrayContaining(['Andorra', 'United Arab Emirates', 'Afghanistan']))
        })

        it('should return an object with original data as keys', () => {
            const result = getAsKey('original')
            const expectedKeys = Object.keys(result)

            expect(expectedKeys).toEqual(expect.arrayContaining(["Andorra", "دولة الإمارات العربية المتحدة", "افغانستان", "Antigua and Barbuda", "Anguilla", "Shqipëria"]))
        })
    })
})
