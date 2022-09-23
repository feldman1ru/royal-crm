import { Address } from "src/app/interfaces/address";

export interface Contact {
        _id?: string;
        firstName: string;
        lastName: string;
        email: string;
        birthday?: any;
        phone: string;
        age?: number;
        address: Address;
        createdAt?: any;
        
}
