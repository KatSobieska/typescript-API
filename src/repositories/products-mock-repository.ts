import { Product } from '../interfaces/product.interface';
import { ProductsRepository } from './products-repository.interface';
import shortid from 'shortid';


export class ProductsMockRepository implements ProductsRepository {
    private products: Array<Product> = [];

    addItem(item: Product): Product {
        item.id = shortid.generate();
        item.creationDate = new Date();
        item.modifyDate = new Date();
        this.products.push(item);
        return item;
    }

    updateItem(id: string, item: Product): Product {
        this.products = this.products.map(i => {
            if (i.id === id) {
                return {
                    ...item,
                    id: i.id,
                    createdAt: i.creationDate,
                    modifyDate: new Date()
                };
            }

            return i;
        });

        return this.getItemById(id);
    }

    deleteItem(id: string): boolean {
        this.products = this.products.filter(i => i.id === id);
        return true;
    }

    getItemById(id: string): Product {
        return this.products.find(i => i.id === id);
    }

    getAllItems(): Product[] {
        return this.products;
    }

    findProductByName(name: string): Product {
        return this.products.find(i => i.name === name);
    }
}
