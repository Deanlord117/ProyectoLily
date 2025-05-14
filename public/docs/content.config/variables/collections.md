[**grubby-gamma v5.2.0**](../../README.md)

***

# Variable: collections

> `const` **collections**: `object`

Defined in: src/content.config.ts:30

## Type declaration

### blog

> **blog**: `CollectionConfig`\<`ZodObject`\<\{ `author`: `ZodDefault`\<`ZodString`\>; `canonicalURL`: `ZodOptional`\<`ZodString`\>; `description`: `ZodString`; `draft`: `ZodOptional`\<`ZodBoolean`\>; `featured`: `ZodOptional`\<`ZodBoolean`\>; `hideEditPost`: `ZodOptional`\<`ZodBoolean`\>; `modDatetime`: `ZodNullable`\<`ZodOptional`\<`ZodDate`\>\>; `ogImage`: `ZodOptional`\<`ZodUnion`\<\[`ZodObject`\<\{ `format`: `ZodUnion`\<\[..., ..., ..., ..., ..., ..., ..., ...\]\>; `height`: `ZodNumber`; `src`: `ZodString`; `width`: `ZodNumber`; \}, `UnknownKeysParam`, `ZodTypeAny`, \{ `format`: `"png"` \| `"jpg"` \| `"jpeg"` \| `"tiff"` \| `"webp"` \| `"gif"` \| `"svg"` \| `"avif"`; `height`: `number`; `src`: `string`; `width`: `number`; \}, \{ `format`: `"png"` \| `"jpg"` \| `"jpeg"` \| `"tiff"` \| `"webp"` \| `"gif"` \| `"svg"` \| `"avif"`; `height`: `number`; `src`: `string`; `width`: `number`; \}\>, `ZodString`\]\>\>; `pubDatetime`: `ZodDate`; `tags`: `ZodDefault`\<`ZodArray`\<`ZodString`, `"many"`\>\>; `timezone`: `ZodOptional`\<`ZodString`\>; `title`: `ZodString`; \}, `"strip"`, `ZodTypeAny`, \{ `author`: `string`; `canonicalURL?`: `string`; `description`: `string`; `draft?`: `boolean`; `featured?`: `boolean`; `hideEditPost?`: `boolean`; `modDatetime?`: `null` \| `Date`; `ogImage?`: `string` \| \{ `format`: `"png"` \| `"jpg"` \| `"jpeg"` \| `"tiff"` \| `"webp"` \| `"gif"` \| `"svg"` \| `"avif"`; `height`: `number`; `src`: `string`; `width`: `number`; \}; `pubDatetime`: `Date`; `tags`: `string`[]; `timezone?`: `string`; `title`: `string`; \}, \{ `author?`: `string`; `canonicalURL?`: `string`; `description`: `string`; `draft?`: `boolean`; `featured?`: `boolean`; `hideEditPost?`: `boolean`; `modDatetime?`: `null` \| `Date`; `ogImage?`: `string` \| \{ `format`: `"png"` \| `"jpg"` \| `"jpeg"` \| `"tiff"` \| `"webp"` \| `"gif"` \| `"svg"` \| `"avif"`; `height`: `number`; `src`: `string`; `width`: `number`; \}; `pubDatetime`: `Date`; `tags?`: `string`[]; `timezone?`: `string`; `title`: `string`; \}\>\>
