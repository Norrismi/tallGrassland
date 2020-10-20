import {useState, useEffect} from 'react';
import {projectStorage, projectFirestore} from '../../config/firebase'

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)



    useEffect(() => {
        //refs
        const storageRef = projectStorage.ref(file.name)
        const collectionRef = projectFirestore.collection('images')


        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred/ snap.totalBytes) *100;
            setProgress(percentage);
        }, (err) => {
            setError(err);

        
        }, async() => {
                const url = await storageRef.getDownloadURL()
           

                //saving to firestore
                collectionRef.add({url})

                //using Fire Storage
                setUrl(url)
        })
    }, [file])

    return { progress, url, error}
}

export default useStorage;
  