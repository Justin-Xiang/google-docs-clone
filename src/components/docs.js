import React, { useEffect, useRef } from "react";
import DocModal from "./DocModal";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
export default function Docs({ database }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [title, setTitle] = React.useState("");
  const isMounted = useRef();
  const [docsData, setDocsData] = React.useState([]);
  const collectionRef = collection(database, "docsData");
  const getData = () => {
    onSnapshot(collectionRef, (data) => {
      setDocsData(
        data.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  };
  useEffect(() => {
    if (isMounted.current) {
      return;
    }
    isMounted.current = true;
    getData();
  }, []);

  const addData = () => {
    addDoc(collectionRef, {
      title: title,
    })
      .then(() => {
        alert("Data added");
        handleClose();
      })
      .catch(() => {
        alert("Cannot add data");
      });
  };
  return (
    <div className="docs-main">
      <h1>Docs Clone</h1>
      <button className="add-docs" onClick={handleOpen}>
        Add a Document
      </button>
      <DocModal
        open={open}
        setOpen={setOpen}
        title={title}
        setTitle={setTitle}
        addData={addData}
      />
      <div className="grid-main">
        {docsData.map((doc) => {
          return (
            <div className="grid-child">
              <p>{doc.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
