

import { describe, it, expect } from 'vitest';
import { Product } from '../../../domain/src/entities/Product';
import { GetAllProducts, ProductRepository } from '../../../domain/src/use-cases/GetAllProducts';

describe('GetAllProducts Use Case', () => {
  it('should return all products from the repository', () => {
   
    const products: Product[] = [
      new Product({
        id: 1,
        name: 'Goma de borrar',
        description: 'Goma blanca escolar',
        price: 200,
        stock: 40,
      }),
      new Product({
        id: 2,
        name: 'Tijera escolar',
        description: 'Tijera punta roma',
        price: 600,
        stock: 15,
      }),
    ];

    
    const mockRepository: ProductRepository = {
      findAll: () => products,
    };

   
    const getAllProducts = new GetAllProducts(mockRepository);

    const result = getAllProducts.execute();

    expect(result).toHaveLength(2);
    expect(result[0].name).toBe('Goma de borrar');
    expect(result[1].stock).toBe(15);
  });
});
