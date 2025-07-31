

import { describe, it, expect } from 'vitest';
import { Product } from '../../../domain/src/entities/Product';
import { DeleteProduct, ProductRepository } from '../../../domain/src/use-cases/DeleteProduct';

describe('DeleteProduct Use Case', () => {
  const products: Product[] = [
    new Product({
      id: 1,
      name: 'Lapicera',
      description: 'Lapicera azul BIC',
      price: 250,
      stock: 100,
    }),
    new Product({
      id: 2,
      name: 'Cuaderno',
      description: 'Cuaderno Rivadavia tapa dura',
      price: 1200,
      stock: 50,
    }),
  ];

  const mockRepository: ProductRepository = {
    findById: (id: number) => products.find(p => p.id === id),
    delete: (id: number) => {
      const index = products.findIndex(p => p.id === id);
      if (index !== -1) products.splice(index, 1);
    },
  };

  it('should delete a product by id', () => {
    const deleteProduct = new DeleteProduct(mockRepository);

    deleteProduct.execute(1);

    const deleted = products.find(p => p.id === 1);
    expect(deleted).toBeUndefined(); // producto fue eliminado
  });

  it('should throw an error if product not found', () => {
    const deleteProduct = new DeleteProduct(mockRepository);

    expect(() => deleteProduct.execute(999)).toThrowError('Product with id 999 not found');
  });
});
