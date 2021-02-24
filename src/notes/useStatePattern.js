import { useEffect, useState } from 'react'
import { db } from '../api/firebase'

export const useGetCollection = (collection) => {
  const [error, setError] = useState(null)
  const [data, setData] = useState([])
  const [status, setStatus] = useState('idle')

  function addID(snapshot) {
    const tempData = []
    snapshot.forEach((doc) => tempData.push({id: doc.id, ...doc.data() }))
    return tempData
  }

  useEffect(() => {
    if (!collection) return  
    setStatus('fetching')   
    db.collection(collection).get()
      .then( snapshot => setData(addID(snapshot)))
      .catch( error => setError(error))
      setStatus('completed')
  }, [collection])
  
  return { status, data, error }
}