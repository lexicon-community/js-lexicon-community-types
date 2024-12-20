/**
 * GENERATED CODE - DO NOT MODIFY
 */
import {
  createServer as createXrpcServer,
  Server as XrpcServer,
  Options as XrpcOptions,
  AuthVerifier,
  StreamAuthVerifier,
} from '@atproto/xrpc-server'
import { schemas } from './lexicons'
import * as CommunityLexiconBookmarksGetActorBookmarks from './types/community/lexicon/bookmarks/getActorBookmarks'
export * as CommunityLexiconBookmarksGetActorBookmarks from './types/community/lexicon/bookmarks/getActorBookmarks'
export * as CommunityLexiconBookmarksBookmark from './types/community/lexicon/bookmarks/bookmark'

export function createServer(options?: XrpcOptions): Server {
  return new Server(options)
}

export class Server {
  xrpc: XrpcServer
  community: CommunityNS

  constructor(options?: XrpcOptions) {
    this.xrpc = createXrpcServer(schemas, options)
    this.community = new CommunityNS(this)
  }
}

export class CommunityNS {
  _server: Server
  lexicon: CommunityLexiconNS

  constructor(server: Server) {
    this._server = server
    this.lexicon = new CommunityLexiconNS(server)
  }
}

export class CommunityLexiconNS {
  _server: Server
  bookmarks: CommunityLexiconBookmarksNS

  constructor(server: Server) {
    this._server = server
    this.bookmarks = new CommunityLexiconBookmarksNS(server)
  }
}

export class CommunityLexiconBookmarksNS {
  _server: Server

  constructor(server: Server) {
    this._server = server
  }

  getActorBookmarks<AV extends AuthVerifier>(
    cfg: ConfigOf<
      AV,
      CommunityLexiconBookmarksGetActorBookmarks.Handler<ExtractAuth<AV>>,
      CommunityLexiconBookmarksGetActorBookmarks.HandlerReqCtx<ExtractAuth<AV>>
    >,
  ) {
    const nsid = 'community.lexicon.bookmarks.getActorBookmarks' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }
}

type SharedRateLimitOpts<T> = {
  name: string
  calcKey?: (ctx: T) => string
  calcPoints?: (ctx: T) => number
}
type RouteRateLimitOpts<T> = {
  durationMs: number
  points: number
  calcKey?: (ctx: T) => string
  calcPoints?: (ctx: T) => number
}
type HandlerOpts = { blobLimit?: number }
type HandlerRateLimitOpts<T> = SharedRateLimitOpts<T> | RouteRateLimitOpts<T>
type ConfigOf<Auth, Handler, ReqCtx> =
  | Handler
  | {
      auth?: Auth
      opts?: HandlerOpts
      rateLimit?: HandlerRateLimitOpts<ReqCtx> | HandlerRateLimitOpts<ReqCtx>[]
      handler: Handler
    }
type ExtractAuth<AV extends AuthVerifier | StreamAuthVerifier> = Extract<
  Awaited<ReturnType<AV>>,
  { credentials: unknown }
>
