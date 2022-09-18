import { Product } from '../interfaces/product.interface';
import { BaseRepository } from './base-repository.interface';

export interface ProductsRepository extends BaseRepository<Product> {
    findProductByName(name: string): Product;
}
