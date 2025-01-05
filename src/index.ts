/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { schemas } from './lexicons'
import * as CommunityLexiconBookmarksGetActorBookmarks from './types/community/lexicon/bookmarks/getActorBookmarks'
import { FetchHandler, FetchHandlerOptions, XrpcClient } from '@atproto/xrpc'
export * as CommunityLexiconBookmarksGetActorBookmarks from './types/community/lexicon/bookmarks/getActorBookmarks'
export * as CommunityLexiconBookmarksBookmark from './types/community/lexicon/bookmarks/bookmark'

export class AtpBaseClient extends XrpcClient {
  community: CommunityNS

  constructor(options: FetchHandler | FetchHandlerOptions) {
    super(options, schemas)
    this.community = new CommunityNS(this)
  }

  /** @deprecated use `this` instead */
  get xrpc(): XrpcClient {
    return this
  }
}

export class CommunityNS {
  _client: XrpcClient
  lexicon: CommunityLexiconNS

  constructor(client: XrpcClient) {
    this._client = client
    this.lexicon = new CommunityLexiconNS(client)
  }
}

export class CommunityLexiconNS {
  _client: XrpcClient
  bookmarks: CommunityLexiconBookmarksNS

  constructor(client: XrpcClient) {
    this._client = client
    this.bookmarks = new CommunityLexiconBookmarksNS(client)
  }
}

export class CommunityLexiconBookmarksNS {
  _client: XrpcClient

  constructor(client: XrpcClient) {
    this._client = client
  }

  getActorBookmarks(
    params?: CommunityLexiconBookmarksGetActorBookmarks.QueryParams,
    opts?: CommunityLexiconBookmarksGetActorBookmarks.CallOptions,
  ): Promise<CommunityLexiconBookmarksGetActorBookmarks.Response> {
    return this._client.call(
      'community.lexicon.bookmarks.getActorBookmarks',
      params,
      undefined,
      opts,
    )
  }
}