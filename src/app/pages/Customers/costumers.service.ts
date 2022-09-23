import { Injectable } from '@angular/core';
import { addDoc, collection, CollectionReference, DocumentData, Firestore, onSnapshot, serverTimestamp, updateDoc } from '@angular/fire/firestore';
import { deleteDoc, doc, getDoc } from '@firebase/firestore';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private customers: Customer[] = [
    {
      _id: 'myIdIs1',
      firstName: 'Regular',
      lastName: 'User',
      email: 'user@gmail.com',
      phone: '050-0000000',
      address: {
        country: 'israel',
        city: 'tel-aviv',
        street: 'rotshild',
        houseNumber: 0,
        zip: 1234,
      },
      createdAt: new Date(),
      notes: 'a very good customer!',
    },
    {
      _id: '2',
      firstName: 'admin',
      lastName: 'User',
      email: 'admin@gmail.com',
      phone: '050-0000000',
      address: {
        country: 'israel',
        city: 'tel-aviv',
        street: 'rotshild',
        houseNumber: 0,
        zip: 1234,
      },
      createdAt: new Date(),
      notes: 'a very bad customer!',
    },
  ];

  collectionRef: CollectionReference<DocumentData> = collection(
    this.FS,
    'customers'
    );
    constructor(private FS:Firestore) {}

  getAll(cb: Function) {
    let customers: any = [];
    const unsubscribeGetAll = onSnapshot(this.collectionRef, (snapShotData) => {
      snapShotData.docs.forEach((customer) => {
        customers.push({
          ...customer.data(),
          _id : customer.id
        });
      });
    });
    return cb(customers, unsubscribeGetAll);
  }

  add(customer: Customer, cb: Function) {
    customer.createdAt = new Date();
     addDoc(this.collectionRef,customer)
    .then(()=> cb())
    .catch((err)=> console.log(err));
    return cb() 
  }

  async getCustomer(id: string, cb: Function) {
    try{
      const docRef = doc(this.FS, 'customers', id);
      const result = await getDoc(docRef)
      const customer = {...result.data(), _id: result.id};
      cb(customer)
    }catch(error){
      console.log(error);
    }
  }

  delete(id: string) {
    const docRef = doc(this.FS, 'customers', id)
    deleteDoc(docRef).catch((error) => console.log(error)
    );
  }

  edit(customer: Customer, id: string, cb: Function ) {
    const docRef = doc(this.FS, 'customers', id)
    updateDoc(docRef, {...customer}).then(()=> cb()).catch((error)=> console.log(error))
    
  }
}