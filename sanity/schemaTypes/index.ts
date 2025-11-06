import { type SchemaTypeDefinition } from 'sanity'
import { addressType } from './addressType'
import { authorType } from './authorType';
import { blogCategoryType } from './blogCategoryType';
import { blogType } from './blogType';
import { brandType } from './brandType';
import { categoryType } from './categoryType'
import { blockContentType } from './blockContentType';
import { orderType } from './orderType';
import { productType } from './productType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType ,addressType, blogCategoryType, blockContentType,  blogType, authorType , brandType , productType , orderType],
}