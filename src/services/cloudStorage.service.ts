import { initializeApp } from 'firebase/app';
import { doc,setDoc,getDoc, Firestore, getFirestore, updateDoc, deleteDoc, collection, getDocs } from 'firebase/firestore';
import 'firebase/firestore';
import env from "../../.env.json";

export class CloudStorage {
  private readonly db: Firestore;
  private dbName = null;
  constructor(dbName) {
// Initialize Firebase
   initializeApp(env);
   this.db = getFirestore();
   this.dbName = dbName;
}

    async createKey(){
        return doc(collection(this.db, this.dbName)).id;
    }

    createDoc = async (name: string, data:any) => {
        return setDoc(doc(this.db, this.dbName, name), data);
    } 

    updateDoc = async (name:string, data:any) => {
        const docRef = doc(this.db, this.dbName, name);
        return updateDoc(docRef,data);
    }

    deleteDoc = async (name:string) => {
        const docRef = doc(this.db, this.dbName, name);
        return deleteDoc(docRef);
    }

    getDocs = async () => {
        let result = []
        const querySnapshot = await getDocs(collection(this.db, this.dbName))
        querySnapshot.forEach((doc) => {
            result.push({id:doc.id,data: doc.data()})
        });
        return result;
    }

    getDoc = async (name: string) => {
        const docRef = doc(this.db, this.dbName, name);
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
            return docSnap.data();
          } else {
            return null;
          }

    }

}