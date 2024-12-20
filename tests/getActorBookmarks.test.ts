import { createServer, Server } from '../src'
import * as CommunityLexiconBookmarksGetActorBookmarks from '../src/types/community/lexicon/bookmarks/getActorBookmarks'
import { beforeEach, describe, expect, it, jest } from '@jest/globals'

describe('getActorBookmarks', () => {
  let server: Server

  beforeEach(() => {
    server = createServer()
  })

  it('should call getActorBookmarks method with correct configuration', () => {
    const mockHandler = jest.fn() as unknown as CommunityLexiconBookmarksGetActorBookmarks.Handler<any>
    const mockConfig = {
      handler: mockHandler,
    }

    const methodSpy = jest.spyOn(server.xrpc, 'method').mockImplementation(() => {
      return Promise.resolve()
    })

    server.community.lexicon.bookmarks.getActorBookmarks(mockConfig)

    expect(methodSpy).toHaveBeenCalledWith(
      'community.lexicon.bookmarks.getActorBookmarks',
      mockConfig
    )

    methodSpy.mockRestore()
  })

  it('should handle the response correctly', async () => {
    const mockHandler = jest.fn() as unknown as CommunityLexiconBookmarksGetActorBookmarks.Handler<any>
    const mockConfig = {
      handler: mockHandler,
    }

    const mockResponse = { data: 'mockData' }
    jest.spyOn(server.xrpc, 'method').mockImplementation(() => {
      return Promise.resolve(mockResponse)
    })

    const response = await server.community.lexicon.bookmarks.getActorBookmarks(mockConfig)

    expect(response).toEqual(mockResponse)
  })
})