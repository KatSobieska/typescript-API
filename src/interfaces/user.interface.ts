import { Roles } from '../enums/roles.enum';

export interface User {
    id?: string,
    firstName: string,
    lastName: string,
    email: string,
    birthDate: Date,
    address: UserAddress,
    role: Roles,
}

export interface UserAddress {
    country: string,
    city: string,
    street: string,
    homeNo: number,
    flatNo?: number,

}