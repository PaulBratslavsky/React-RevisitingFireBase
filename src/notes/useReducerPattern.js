import { useEffect, useReducer } from 'react'
import { db } from '../api/firebase'

export const useGetCollection = (collection) => {
  
  // initial state
  const initialState = {
    status: "idle",
    error: null,
    data: null,
  };

  // reducer function
  function reducer(state, action){
    switch (action.type) {
      case "FETCHING":
        return { ...initialState, status: "fetching" };
      case "FETCHED":
        return { ...initialState, status: "completed", data: action.payload };
      case "FETCH_ERROR":
        return { ...initialState, status: "error", error: action.payload };
      default:
        return state;
    }
  }
  
  // reducer hook
  const [state, dispatch] = useReducer(reducer, initialState)

  // util function
  function addID(snapshot) {
    const tempData = []
    snapshot.forEach((doc) => tempData.push({id: doc.id, ...doc.data() }))
    return tempData
  }

  useEffect(() => {
    if (!collection) return     
    dispatch({ type: "FETCHING" });
    db.collection(collection).get()
      .then( snapshot => dispatch({ type: "FETCHED", payload: addID(snapshot) }))
      .catch( error => dispatch({ type: "FETCH_ERROR", payload: error }))
  }, [collection])
  
  return { ...state }
}
