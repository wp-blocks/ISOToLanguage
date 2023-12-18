import { describe, expect } from '@jest/globals';
import { getLanguagesByISO } from '../src/';

describe('getLanguagesByISO', () => {
    it('should return languages for valid ISO codes in the list', () => {
        const isoCodes = ['en', 'fr'];
        const expectedResult = {
            en: { name: 'English', original: 'English' },
            fr: { name: 'French', original: 'français' },
        };

        const result = getLanguagesByISO(isoCodes);
        expect(result).toEqual(expectedResult);
    });

    it('should exclude invalid ISO codes from the result', () => {
        const isoCodes = ['en', 'invalidCode', 'es'];
        const expectedResult = {
            en: { name: 'English', original: 'English' },
            es: { name: 'Spanish; Castilian', original: 'español, castellano' },
        };

        const result = getLanguagesByISO(isoCodes);
        expect(result).toEqual(expectedResult);
    });

    it('should return an empty object for an empty ISO codes array', () => {
        const isoCodes: string[] = [];
        const result = getLanguagesByISO(isoCodes);
        expect(result).toEqual({});
    });

    it('should return an empty object for an array with only invalid ISO codes', () => {
        const isoCodes = ['invalidCode1', 'invalidCode2'];
        const result = getLanguagesByISO(isoCodes);
        expect(result).toEqual({});
    });
});
