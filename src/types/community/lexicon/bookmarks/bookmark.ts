/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { ValidationResult, BlobRef } from '@atproto/lexicon'
import { lexicons } from '../../../../lexicons'
import { isObj, hasProp } from '../../../../util'
import { CID } from 'multiformats/cid'

export interface Record {
  subject: string
  createdAt: string
  /** Tags for content the bookmark may be related to, for example 'news' or 'funny videos' */
  tags?: string[]
  [k: string]: unknown
}

export function isRecord(v: unknown): v is Record {
  return (
    isObj(v) &&
    hasProp(v, '$type') &&
    (v.$type === 'community.lexicon.bookmarks.bookmark#main' ||
      v.$type === 'community.lexicon.bookmarks.bookmark')
  )
}

export function validateRecord(v: unknown): ValidationResult {
  return lexicons.validate('community.lexicon.bookmarks.bookmark#main', v)
}
