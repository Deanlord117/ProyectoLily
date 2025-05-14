[**grubby-gamma v5.2.0**](../../../README.md)

***

# Function: default()

> **default**(`posts`, `groupFunction`): `Record`\<`GroupKey`, `object`[]\>

Defined in: src/utils/getPostsByGroupCondition.ts:9

## Parameters

### posts

`object`[]

### groupFunction

`GroupFunction`\<\{ `body?`: `string`; `collection`: `"blog"`; `data`: \{ `author`: `string`; `canonicalURL?`: `string`; `description`: `string`; `draft?`: `boolean`; `featured?`: `boolean`; `hideEditPost?`: `boolean`; `modDatetime?`: `null` \| `Date`; `ogImage?`: `string` \| \{ `format`: `"png"` \| `"jpg"` \| `"jpeg"` \| `"tiff"` \| `"webp"` \| `"gif"` \| `"svg"` \| `"avif"`; `height`: `number`; `src`: `string`; `width`: `number`; \}; `pubDatetime`: `Date`; `tags`: `string`[]; `timezone?`: `string`; `title`: `string`; \}; `filePath?`: `string`; `id`: `string`; `rendered?`: `RenderedContent`; \}\>

## Returns

`Record`\<`GroupKey`, `object`[]\>
