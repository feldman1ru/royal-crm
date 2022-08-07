import { Address } from "src/app/interfaces/address";

export interface Contact {
        _id?: string;
        firstName: string;
        lastName: string;
        email: string;
        birthday: Date;
        phone: string;
        age: number;
        address: Address;
        createdAt?: Date;
        
}
