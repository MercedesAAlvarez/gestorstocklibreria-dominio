

import { Product } from '../entities/Product';

interface CreateProductInput {
  id: number;
  name: string;
  description?: string;
  price: number;
  stock: number;
}

export class CreateProduct {
  execute(input: CreateProductInput): Product {
    const product = new Product({
      id: input.id,
      name: input.name,
      description: input.description,
      price: input.price,
      stock: input.stock,
    });

    return product;
  }
}
