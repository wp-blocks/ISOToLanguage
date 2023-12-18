import { describe, expect } from '@jest/globals'
import { getLanguageData } from '../src/'

describe('getLanguageData', () => {
    it('should return language data for valid ISO code', () => {
        const languageCode = 'en';
        const expectedResult = { name: 'English', original: 'English' };

        const result = getLanguageData(languageCode);
        expect(result).toEqual(expectedResult);
    });

    it('should return language data for valid locale code', () => {
        const languageCode = 'en-US';
        const expectedResult = { name: 'English', original: 'English' };

        const result = getLanguageData(languageCode);
        expect(result).toEqual(expectedResult);
    });

    it('should return false for invalid language code', () => {
        const languageCode = 'invalidCode';
        const result = getLanguageData(languageCode);
        expect(result).toBe(false);
    });

    it('should return false for empty string', () => {
        const languageCode = '';
        const result = getLanguageData(languageCode);
        expect(result).toBe(false);
    });
});
