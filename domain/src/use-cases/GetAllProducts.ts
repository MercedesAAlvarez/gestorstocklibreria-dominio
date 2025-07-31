

import { Product } from '../entities/Product';

export interface ProductRepository {
  findAll(): Product[];
}

export class GetAllProducts {
  constructor(private readonly productRepository: ProductRepository) {}

  execute(): Product[] {
    return this.productRepository.findAll();
  }
}
