import { describe, expect } from '@jest/globals'
import { isValidCountry } from '../src/'

describe('ISOToLanguage', () => {
    describe('isValidCountry', () => {
        it('should return true for a valid ISO code', () => {
            const result = isValidCountry('AD')
            expect(result).toBe(true)
        })

        it('should return false for an invalid ISO code', () => {
            const result = isValidCountry('Invalid_ISO')
            expect(result).toBe(false)
        })

        it('should return false for an empty string', () => {
            const result = isValidCountry('')
            expect(result).toBe(false)
        })

        it('should return false for undefined', () => {
            const result = isValidCountry(undefined as unknown as string)
            expect(result).toBe(false)
        })
    })
})
