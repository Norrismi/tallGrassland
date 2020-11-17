import {useState, useEffect} from 'react'
import {projectFirestore} from '../../config/firebase'


const useFirestore = (collection) => {
    const [docs, setDocs] = useState([])

    useEffect(() => {
        const unSub = projectFirestore.collection(collection)
             .orderBy('url')
            .onSnapshot((snap) => {
                let documents = []
                snap.forEach(doc => {
                    documents.push({...doc.data(), property: collection})
                });
                setDocs(documents)
            })
        return () => unSub();
    }, [collection]);

    return {docs}
}

export default useFirestore;
