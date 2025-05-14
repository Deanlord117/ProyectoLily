[**grubby-gamma v5.2.0**](../../../README.md)

***

# Function: generateOgImageForPost()

> **generateOgImageForPost**(`post`): `Promise`\<`Buffer`\<`ArrayBufferLike`\>\>

Defined in: src/utils/generateOgImages.ts:12

## Parameters

### post

#### body?

`string`

#### collection

`"blog"`

#### data

\{ `author`: `string`; `canonicalURL?`: `string`; `description`: `string`; `draft?`: `boolean`; `featured?`: `boolean`; `hideEditPost?`: `boolean`; `modDatetime?`: `null` \| `Date`; `ogImage?`: `string` \| \{ `format`: `"png"` \| `"jpg"` \| `"jpeg"` \| `"tiff"` \| `"webp"` \| `"gif"` \| `"svg"` \| `"avif"`; `height`: `number`; `src`: `string`; `width`: `number`; \}; `pubDatetime`: `Date`; `tags`: `string`[]; `timezone?`: `string`; `title`: `string`; \}

#### data.author

`string` = `...`

#### data.canonicalURL?

`string` = `...`

#### data.description

`string` = `...`

#### data.draft?

`boolean` = `...`

#### data.featured?

`boolean` = `...`

#### data.hideEditPost?

`boolean` = `...`

#### data.modDatetime?

`null` \| `Date` = `...`

#### data.ogImage?

`string` \| \{ `format`: `"png"` \| `"jpg"` \| `"jpeg"` \| `"tiff"` \| `"webp"` \| `"gif"` \| `"svg"` \| `"avif"`; `height`: `number`; `src`: `string`; `width`: `number`; \} = `...`

#### data.pubDatetime

`Date` = `...`

#### data.tags

`string`[] = `...`

#### data.timezone?

`string` = `...`

#### data.title

`string` = `...`

#### filePath?

`string`

#### id

`string`

#### rendered?

`RenderedContent`

## Returns

`Promise`\<`Buffer`\<`ArrayBufferLike`\>\>
