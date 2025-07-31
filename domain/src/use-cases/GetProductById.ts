

import { Product } from '../entities/Product';

export interface ProductRepository {
  findById(id: number): Product | undefined;
}

export class GetProductById {
  constructor(private readonly productRepository: ProductRepository) {}

  execute(id: number): Product {
    const product = this.productRepository.findById(id);

    if (!product) {
      throw new Error(`Product with id ${id} not found`);
    }

    return product;
  }
}
