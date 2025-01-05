import { toKnownErr, Response, CallOptions, QueryParams } from '../src/types/community/lexicon/bookmarks/getActorBookmarks'

describe('getActorBookmarks', () => {
  describe('toKnownErr', () => {
    it('should return the error passed to it', () => {
      const error = new Error('Test error')
      const result = toKnownErr(error)
      expect(result).toBe(error)
    })
  })

  describe('QueryParams interface', () => {
    it('should have the correct structure', () => {
      const queryParams: QueryParams = {
        tags: ['exampleTag'],
        limit: 10,
        cursor: 'exampleCursor'
      }
  
      expect(queryParams.tags).toStrictEqual(['exampleTag'])
      expect(queryParams.limit).toBe(10)
      expect(queryParams.cursor).toBe('exampleCursor')
    })
  
    it('should allow optional properties to be omitted', () => {
      const queryParams: QueryParams = {
      }
  
      expect(queryParams.tags).toBeUndefined()
      expect(queryParams.limit).toBeUndefined()
      expect(queryParams.cursor).toBeUndefined()
    })
  })

  describe('Response interface', () => {
    it('should have the correct structure', () => {
      const response: Response = {
        success: true,
        headers: { 'content-type': 'application/json' },
        data: { bookmarks: [] }
      }

      expect(response.success).toBe(true)
      expect(response.headers['content-type']).toBe('application/json')
      expect(response.data).toBeDefined()
    })
  })

  describe('CallOptions interface', () => {
    it('should have the correct structure', () => {
      const abortController = new AbortController()
      const callOptions: CallOptions = {
        signal: abortController.signal,
        headers: { 'authorization': 'Bearer token' }
      }

      expect(callOptions.signal).toBeInstanceOf(AbortSignal)
      expect(callOptions.headers!['authorization']).toBe('Bearer token')
    })
  })
})