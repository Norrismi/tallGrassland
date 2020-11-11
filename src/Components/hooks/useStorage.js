import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore } from '../../config/firebase'

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)



    useEffect(() => {
        //refs
        const storageRef = projectStorage.ref(file.name)
        const collectionRef = projectFirestore.collection('properties')


        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);


        }, async () => {
            const url = await storageRef.getDownloadURL()

            //saving to firestore ....add in firebase docID
            collectionRef.doc('euYnO7W4An9htBnEvFHJ').set({pic: url}, {merge: true})

            //collectionRef.doc('2MNgJ7bJk1b0rg0oy8BJ').set({ gallery: { pic3: url } }, { merge: true })


            //using Fire Storage
            setUrl(url)
        })
    }, [file])

    return { progress, url, error }
}

export default useStorage;
