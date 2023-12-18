import { describe, expect } from '@jest/globals'
import { isValidCountry, isValidLanguage } from '../src/'

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

describe('isValidLanguage', () => {
    it('should return true for a valid Language', () => {
        const result = isValidLanguage('it')
        expect(result).toBe(true)
    })

    it('should return false for an invalid Language', () => {
        const result = isValidLanguage('Invalid_LANGUAGE')
        expect(result).toBe(false)
    })

    it('should return false for an empty string', () => {
        const result = isValidLanguage('')
        expect(result).toBe(false)
    })

    it('should return false for undefined', () => {
        const result = isValidLanguage(undefined as unknown as string)
        expect(result).toBe(false)
    })
})
