import { isRecord, Record } from '../src/types/community/lexicon/bookmarks/bookmark'

describe('isRecord', () => {
  it('should return true for valid Record objects', () => {
    const validRecord: Record = {
      subject: 'example',
      createdAt: '2023-10-01T00:00:00Z',
      tags: ['news', 'funny videos'],
      $type: 'community.lexicon.bookmarks.bookmark#main'
    }

    expect(isRecord(validRecord)).toBe(true)
  })

  it('should return false for objects missing required properties', () => {
    const invalidRecord = {
      createdAt: '2023-10-01T00:00:00Z',
      tags: ['news', 'funny videos'],
    }

    expect(isRecord(invalidRecord)).toBe(false)
  })

  it('should return false for non-object values', () => {
    expect(isRecord(null)).toBe(false)
    expect(isRecord(undefined)).toBe(false)
    expect(isRecord('string')).toBe(false)
    expect(isRecord(123)).toBe(false)
    expect(isRecord(true)).toBe(false)
  })
})