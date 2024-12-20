/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { LexiconDoc, Lexicons } from '@atproto/lexicon'

export const schemaDict = {
  CommunityLexiconBookmarksBookmark: {
    lexicon: 1,
    id: 'community.lexicon.bookmarks.bookmark',
    defs: {
      main: {
        type: 'record',
        description: 'Record bookmarking a link to come back to later.',
        key: 'tid',
        record: {
          type: 'object',
          required: ['subject', 'createdAt'],
          properties: {
            subject: {
              type: 'string',
              format: 'uri',
            },
            createdAt: {
              type: 'string',
              format: 'datetime',
            },
            tags: {
              type: 'array',
              description:
                "Tags for content the bookmark may be related to, for example 'news' or 'funny videos'",
              items: {
                type: 'string',
              },
            },
          },
        },
      },
    },
  },
  CommunityLexiconBookmarksGetActorBookmarks: {
    lexicon: 1,
    id: 'community.lexicon.bookmarks.getActorBookmarks',
    defs: {
      main: {
        type: 'query',
        description:
          'Get a list of bookmarks by actor. Optionally add a list of tags to include, default will be all bookmarks. Requires auth, actor must be the requesting account.',
        parameters: {
          type: 'params',
          properties: {
            tags: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
            limit: {
              type: 'integer',
              minimum: 1,
              maximum: 100,
              default: 50,
            },
            cursor: {
              type: 'string',
            },
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            required: ['bookmarks'],
            properties: {
              cursor: {
                type: 'string',
              },
              bookmarks: {
                type: 'array',
                items: {
                  type: 'ref',
                  ref: 'lex:community.lexicon.bookmarks.bookmark',
                },
              },
            },
          },
        },
      },
    },
  },
} as const satisfies Record<string, LexiconDoc>

export const schemas = Object.values(schemaDict)
export const lexicons: Lexicons = new Lexicons(schemas)
export const ids = {
  CommunityLexiconBookmarksBookmark: 'community.lexicon.bookmarks.bookmark',
  CommunityLexiconBookmarksGetActorBookmarks:
    'community.lexicon.bookmarks.getActorBookmarks',
}
