/**
 * Returns a separator based on the given type.
 *
 * @private
 * @param {('locale' | 'language-code')} type - The type of separator to get.
 * @return {string} - The separator.
 */
export function getSeparator(type?: 'locale' | 'language-code'): string {
    return type === 'language-code' ? '-' : '_'
}
