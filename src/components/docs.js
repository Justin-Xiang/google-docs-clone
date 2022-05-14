import React from "react";
import DocModal from "./DocModal";
import { addDoc, collection } from "firebase/firestore";
export default function Docs({ database }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const [title, setTitle] = React.useState("");
  const collectionRef = collection(database, "docsData");
  const addData = () => {
    addDoc(collectionRef, {
      title: title,
    })
      .then(() => {
        alert("Data added");
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
    </div>
  );
}
