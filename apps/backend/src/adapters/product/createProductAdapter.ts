

import { CreateProduct } from '@domain/use-cases/CreateProduct';
import { Product } from '@domain/entities/Product';

export function createProductAdapter(data: any): Product {
 
  if (!data.name || !data.price || !data.stock) {
    throw new Error('Missing required product fields');
  }

  const product = new Product({
    id: data.id ?? 0,
    name: data.name,
    description:data.description,
    price: data.price,
    stock: data.stock
  });
  return new CreateProduct().execute(product);
}
