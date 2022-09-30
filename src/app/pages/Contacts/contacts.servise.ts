import { Injectable } from '@angular/core';
import { addDoc, collection, CollectionReference, DocumentData, Firestore, onSnapshot, serverTimestamp, updateDoc } from '@angular/fire/firestore';
import { deleteDoc, doc, getDoc } from '@firebase/firestore';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private contacts: Contact[] = [
    {
      _id: '1',
      firstName: 'Ruslan',
      lastName: 'Feldman',
      email: 'ruslan@gmail.com',
      phone: '050-0000000',
      birthday: new Date('10 04 1984'),
      // age: 38,
      address: {
        country: 'israel',
        city: 'herzliya',
        street: 'rotshild',
        houseNumber: 4,
      },
      createdAt: new Date,
    },
    
  ];
  
  collectionRef: CollectionReference<DocumentData> = collection (
    this.FS,'contacts'
    );
    unsubscribeGetAll: Function = () => {};
    constructor(private FS:Firestore) {}


  getAll(cb: Function) {
    let contacts: any = []
    const unsubscribeGetAll =  onSnapshot(this.collectionRef, (snapShotData) =>{
      snapShotData.docs.forEach((contact) => {
        
        contacts.push({
          ...contact.data(),
          _id : contact.id
        });
      });
    });
    
    return cb(contacts, unsubscribeGetAll);
    
  }


  add(contact: Contact, cb: Function) {
    
    contact.createdAt = new Date();
    // contact.createdAt = serverTimestamp();
    addDoc(this.collectionRef, contact)
    .then(()=> cb())
    .catch((err)=> console.log(err)
    );
  }

  async getContact(id: string, cb: Function){

    try{
      const docRef = doc(this.FS, 'contacts', id);
      const result = await getDoc(docRef)
      const contact = {...result.data(), _id: result.id};
      cb(contact)
    }catch(error){
      console.log(error);
    }
    
  }

  delete(id:string){

    const docRef = doc(this.FS, 'contacts', id)
    deleteDoc(docRef).catch((error) => console.log(error)
    );
  }

  edit(contact: Contact, id: string, cb: Function) {
   
    const docRef = doc(this.FS, 'contacts', id)
    updateDoc(docRef, {...contact}).then(()=> cb()).catch((error)=> console.log(error))
   
  }

  ngOnDestroy(): void {
    this.unsubscribeGetAll();
  }
 

}



