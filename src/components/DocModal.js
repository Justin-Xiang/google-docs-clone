import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function DocModal({ open, setOpen, title, setTitle, addData }) {
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <input
            placeholder="Add the Title"
            className="add-input"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <div className="button-container">
            <button className="add-docs" onClick={addData}>
              Add
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
