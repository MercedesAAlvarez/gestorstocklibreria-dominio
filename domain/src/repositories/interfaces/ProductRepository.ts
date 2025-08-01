import { Product } from '../../entities/Product';

export interface ProductRepository {
  findAll(): Product[];
}
