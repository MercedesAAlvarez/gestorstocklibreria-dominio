

import { Product } from '../entities/Product';

export interface ProductRepository {
  findById(id: number): Product | undefined;
  delete(id: number): void;
}

export class DeleteProduct {
  constructor(private readonly productRepository: ProductRepository) {}

  execute(id: number): void {
    const existingProduct = this.productRepository.findById(id);

    if (!existingProduct) {
      throw new Error(`Product with id ${id} not found`);
    }

    this.productRepository.delete(id);
  }
}
