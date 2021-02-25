import { useState } from "react";
import { db, firebaseTimestamp } from "../api/firebase";

export const useAddDocToCollection = (collection) => {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  function submitData(doc) {
    if (!doc) return;

    setStatus("Submitting");
    db.collection(collection)
      .add({...doc, createdAt: firebaseTimestamp()})
      .then((data) => setData(data))
      .catch((error) => setError(error));

    alert("send data");
    console.log(doc, collection);
    setStatus("Done");
  }

  return {
    status,
    submitError: error,
    submitData,
    data,
  };
};
