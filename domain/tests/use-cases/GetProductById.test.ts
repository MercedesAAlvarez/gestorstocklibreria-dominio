// domain/tests/use-cases/GetProductById.test.ts

import { describe, it, expect } from 'vitest';
import { Product } from '../../../domain/src/entities/Product';
import { GetProductById, ProductRepository } from '../../../domain/src/use-cases/GetProductById';

describe('GetProductById Use Case', () => {
  const products: Product[] = [
    new Product({
      id: 1,
      name: 'Lapicera azul',
      description: 'Lapicera de tinta azul',
      price: 300,
      stock: 20,
    }),
    new Product({
      id: 2,
      name: 'Cuaderno rayado',
      description: '96 hojas, tapa dura',
      price: 1200,
      stock: 50,
    }),
  ];

  const mockRepository: ProductRepository = {
    findById: (id: number) => products.find(p => p.id === id),
  };

  it('should return the product with the given id', () => {
    const getProductById = new GetProductById(mockRepository);

    const result = getProductById.execute(2);

    expect(result).toBeDefined();
    expect(result.name).toBe('Cuaderno rayado');
    expect(result.stock).toBe(50);
  });

  it('should throw an error if the product is not found', () => {
    const getProductById = new GetProductById(mockRepository);

    expect(() => getProductById.execute(99)).toThrowError('Product with id 99 not found');
  });
});
