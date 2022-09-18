import { Tags } from '../enums/tags.enum';

export interface Product {
    id?: string,
    name: string,
    price: string,
    tags: Array<Tags>,
    creationDate?: Date,
    modifyDate?: Date,
}