import { createServer, Server } from '../src'
import * as CommunityLexiconBookmarksGetActorBookmarks from '../src/types/community/lexicon/bookmarks/getActorBookmarks'
import { beforeEach, describe, expect, it, jest } from '@jest/globals'

describe('Server', () => {
  let server: Server

  beforeEach(() => {
    server = createServer()
  })

  it('should create a server instance', () => {
    expect(server).toBeInstanceOf(Server)
    expect(server.community).toBeDefined()
    expect(server.community.lexicon).toBeDefined()
    expect(server.community.lexicon.bookmarks).toBeDefined()
  })

  it('should call getActorBookmarks method', () => {
    const mockHandler = jest.fn() as unknown as CommunityLexiconBookmarksGetActorBookmarks.Handler<any>
    const mockConfig = {
      handler: mockHandler,
    }

    const methodSpy = jest.spyOn(server.xrpc, 'method').mockImplementation(() => {
      return Promise.resolve()})
    server.community.lexicon.bookmarks.getActorBookmarks(mockConfig)

    expect(methodSpy).toHaveBeenCalledWith(
      'community.lexicon.bookmarks.getActorBookmarks',
      mockConfig
    )
    methodSpy.mockRestore()
  })
})