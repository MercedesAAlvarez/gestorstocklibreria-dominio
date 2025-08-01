

import { GetAllProducts } from '@domain/use-cases/GetAllProducts';
import { MockProductRepository } from '@domain/repositories/mocks/MockProductRepository';

export function getAllProductsAdapter() {
  const repository = new MockProductRepository();
  return new GetAllProducts(repository).execute();
}
