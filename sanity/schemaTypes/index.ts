import { blogCategoryType } from './blogCategoryType';
import { type SchemaTypeDefinition } from 'sanity'
import { categoryType } from './categoryType'
import { addressType } from './addressType'

import { blogType } from './blogType';
import { authorType } from './authorType';
import { blockContentType } from './blockContentType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType ,addressType, blogCategoryType, blockContentType,  blogType, authorType],
}
