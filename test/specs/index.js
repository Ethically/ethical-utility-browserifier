import { browserify, unbrowserify } from '../../src/index.js'

describe('browserifierUtility()', () => {
    it('should browserify the environment', () => {
        browserify()
        expect(global.window).toBeDefined()
        expect(global.document).toBeDefined()
        expect(global.location).toBeDefined()
        expect(global.navigator).toBeDefined()
        expect(global.history).toBeDefined()
        expect(global.localStorage).toBeDefined()
        expect(global.sessionStorage).toBeDefined()
        unbrowserify()
    })
    it('should unbrowserify the environment', () => {
        browserify()
        unbrowserify()
        expect(global.window).toBeUndefined()
        expect(global.document).toBeUndefined()
        expect(global.location).toBeUndefined()
        expect(global.navigator).toBeUndefined()
        expect(global.history).toBeUndefined()
        expect(global.localStorage).toBeUndefined()
        expect(global.sessionStorage).toBeUndefined()
    })
    it('should return the document', () => {
        browserify()
        const document = unbrowserify()
        expect(document).toBeDefined()
    })
})
