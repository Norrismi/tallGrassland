import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore } from '../../config/firebase'

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)



    useEffect(() => {
        const storageRef = projectStorage.ref(file.name)
        const collectionRef = projectFirestore.collection('i7yOgSf7bsLkUP5Lk6sx')


        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);


        }, async () => {
            const url = await storageRef.getDownloadURL()


          
             collectionRef.add({url, property: 'Grinstead'})

            setUrl(url)
        })
    }, [file])

    return { progress, url, error }
}

export default useStorage;
