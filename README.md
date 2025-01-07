# js-lexicon-community-types
Complete typescript types and validation functions generated for the [lexicon-community lexicon schemas](https://github.com/lexicon-community/lexicon) using the [atproto lex-cli package](https://github.com/bluesky-social/atproto/tree/main/packages/lex-cli)

## Getting started
1. `npm install @lexicon-community/types`

## Usage
### Listing bookmarks
```ts
import {CommunityLexiconBookmarksBookmark} from '@lexicon-community/types'
...
let bookmarks: CommunityLexiconBookmarksBookmark.Record[] = []
      const promises = [
        accumulate(cursor =>
          agent.com.atproto.repo
            .listRecords({
              repo: agent!.did ?? '',
              collection: 'community.lexicon.bookmarks.bookmark',
              cursor,
            })
            .then(res => ({
              cursor: res.data.cursor,
              items: res.data.records,
            })),
        ),
      ]

      const resultset = await Promise.all(promises)
      for (const res of resultset) {
        for (let bookmark of res) {
          const isValid =
            CommunityLexiconBookmarksBookmark.isRecord(bookmark.value) &&
            CommunityLexiconBookmarksBookmark.validateRecord(bookmark.value)
              .success
          if (isValid) {
            const recordVal =
              bookmark.value as CommunityLexiconBookmarksBookmark.Record
            bookmarks.push(recordVal)
          }
        }
      }
      return bookmarks
```

## Generating types from the [Lexicons repo](https://github.com/lexicon-community/lexicon)

1. Setup the [ATProto repo](https://github.com/bluesky-social/atproto) locally
2. `cd path_to_atproto_repo\atproto\packages\lex-cli`
3. `npx lex gen-api path_to_this_repo\tpyes\community\lexicon\your_lexicon path_to_lexicon_repo\community\lexicon\your_lexicon\your_schema.json`
