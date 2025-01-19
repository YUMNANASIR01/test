import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import user from './user'
import cart from './cart'
import payment from './payment'
import shipment from './shipment'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,
           user,
           cart,
           payment,
           shipment
          ],
}
