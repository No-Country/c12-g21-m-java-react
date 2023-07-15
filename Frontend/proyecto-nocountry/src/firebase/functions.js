import {
    collection,
    query,
    where,
    getDocs,
    documentId,
    addDoc
} from 'firebase/firestore'
import {
    db
} from './firebaseConfig.js'
export const getProducts = async () => {
    const q = query(collection(db, 'products'))
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

export const getFilteredProducts = async (key, value) => {
    const q = query(collection(db, 'products'), where(key, '==', value))
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

export const getProductById = async (id) => {
    const q = query(collection(db, 'products'), where(documentId(), '==', id))
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

export const getUserById = async (id) => {
    const q = query(collection(db, 'users'), where(documentId(), '==', id))
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

export const getUserByEmail = async (email) => {
    const q = query(collection(db, 'users'), where("email", '==', email))
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

export const postUser = async (values) => {
    try {
        let existeEmail = await getUserByEmail(values.email)
        if (existeEmail?.id) {
            return false
        } else {
            await addDoc(collection(db, 'users'), {
                values
            });
            return true
        }
    } catch (err) {
        console.log(err)
    }

}