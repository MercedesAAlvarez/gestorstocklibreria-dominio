

import { describe, it, expect } from 'vitest';
import { CreateProduct } from '../../../domain/src/use-cases/CreateProduct';

describe('CreateProduct Use Case', () => {
  it('should create a product successfully', () => {
    const createProduct = new CreateProduct();

    const input = {
      id: 1,
      name: 'Cartuchera',
      description: 'Cartuchera con cierre doble',
      price: 850,
      stock: 30,
    };

    const product = createProduct.execute(input);

    expect(product).toBeDefined();
    expect(product.name).toBe('Cartuchera');
    expect(product.price).toBe(850);
    expect(product.stock).toBe(30);
  });

  it('should throw error if price is invalid', () => {
    const createProduct = new CreateProduct();

    const input = {
      id: 2,
      name: 'Sacapuntas',
      price: 0,
      stock: 10,
    };

    expect(() => createProduct.execute(input)).toThrowError('Product price must be greater than 0');
  });
});
