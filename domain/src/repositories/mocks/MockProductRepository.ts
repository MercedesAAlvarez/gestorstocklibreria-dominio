import { Product } from '../../entities/Product';
import { ProductRepository } from '../interfaces/ProductRepository';

export class MockProductRepository implements ProductRepository {
  private products: Product[] = [];

  constructor() {
   
    this.products.push(
      new Product({
        id: 1,
        name: 'Notebook',
        description: 'Cuaderno rayado A4',
        price: 500,
        stock: 20,
      }),
      new Product({
        id: 2,
        name: 'Lápiz',
        description: 'Lápiz negro HB',
        price: 50,
        stock: 100,
      })
    );
  }

  findAll(): Product[] {
    return this.products;
  }
}
