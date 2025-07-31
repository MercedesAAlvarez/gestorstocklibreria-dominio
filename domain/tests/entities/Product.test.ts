// domain/tests/entities/Product.test.ts

import { describe, it, expect } from 'vitest';
import { Product } from '../../src/entities/Product';

describe('Product Entity', () => {
  it('should create a valid product', () => {
    const product = new Product({
      id: 1,
      name: 'Lapicera azul',
      description: 'Lapicera escolar de tinta azul',
      price: 920,
      stock: 50,
    });

    expect(product.name).toBe('Lapicera azul');
    expect(product.price).toBe(920);
    expect(product.stock).toBe(50);
  });

  it('should throw error if name is empty', () => {
    expect(() => {
      new Product({
        id: 2,
        name: '',
        price: 300,
        stock: 20,
      });
    }).toThrowError('Product name is required');
  });

  it('should throw error if price is zero or negative', () => {
    expect(() => {
      new Product({
        id: 3,
        name: 'Regla',
        price: 0,
        stock: 10,
      });
    }).toThrowError('Product price must be greater than 0');
  });

  it('should throw error if stock is negative', () => {
    expect(() => {
      new Product({
        id: 4,
        name: 'Cuaderno',
        price: 7000,
        stock: -5,
      });
    }).toThrowError('Product stock cannot be negative');
  });
});
