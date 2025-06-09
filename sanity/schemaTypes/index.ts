import { type SchemaTypeDefinition } from 'sanity'
import siteSettings from './schemaSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings],
}
