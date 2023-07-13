import {collection, query, where, getDocs, documentId} from 'firebase/firestore'
import {db} from './firebaseConfig.js'
export const getProducts = async () => {
    const q = query(collection(db, 'products'))
    const querySnapshot = await getDocs(q)
    const docs = [];
    querySnapshot.forEach(doc => {
        docs.push({...doc.data(), id: doc.id})
    });
    return docs
}

export const getFilteredProducts = async (key, value) => {
    const q = query(collection(db, 'products'), where (key, '==', value))
    const querySnapshot = await getDocs(q)
    const docs = [];
    querySnapshot.forEach(doc => {
        docs.push({
            ...doc.data(),
            id: doc.id
        })
    });
    return docs
}

export const getProduct = async (id) => {
   const q = query(collection(db, 'products'), where (documentId(), '==', id))
   const querySnapshot = await getDocs(q)
   const docs = [];
   querySnapshot.forEach(doc => {
       docs.push({
           ...doc.data(),
           id: doc.id
       })
   });
   return docs[0]
}
