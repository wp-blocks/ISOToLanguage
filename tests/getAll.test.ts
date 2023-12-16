import { describe, expect } from '@jest/globals'
import {getAll} from '../src/ISOToLanguage'
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
    })
})
