import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { updateDoc, collection, doc, documentId } from "firebase/firestore";
export default function EditDoc(database) {
  let params = useParams();
  const [docsDesc, setDocsDesc] = useState("");
  const getQuilData = (value) => {
    setDocsDesc(value);
  };
  const collectionRef = collection(database, "docsData");
  useEffect(() => {
    const updateDocsData = setTimeout(() => {
      const document = doc(collectionRef, params.id);
      updateDoc(document, {
        docsDesc: docsDesc,
      })
        .then(() => {
          alert("Saved");
        })
        .catch(() => {
          alert("Cannot Save");
        });
    }, 1000);
    return () => clearTimeout(updateDocsData);
  }, [docsDesc]);
  return (
    <div>
      <h1>EditDoc</h1>
      <ReactQuill value={docsDesc} onChange={getQuilData} />
    </div>
  );
}
