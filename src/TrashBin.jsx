import React, { useState } from "react";
import { useBoard } from "./BoardContext";

export default function TrashBin() {
  const { dispatch } = useBoard();
  const [confirmData, setConfirmData] = useState(null); // store task + sourceCol

  const handleDrop = (e) => {
    e.preventDefault();
    const task = e.dataTransfer.getData("task");
    const sourceCol = e.dataTransfer.getData("sourceCol");

    if (task && sourceCol) {
      // instead of deleting → open confirmation popup
      setConfirmData({ task, sourceCol });
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const confirmDelete = () => {
    if (confirmData) {
      dispatch({ type: "DELETE_TASK", payload: confirmData });
      setConfirmData(null); // close popup
    }
  };

  const cancelDelete = () => {
    setConfirmData(null); // just close popup
  };

  return (
    <>
      <div
        className="trash-bin"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <h4
          style={{
            textAlign: "center",
            fontSize: "1.5rem",
            color: " #dcff9171 ",
          }}
        >
          🗑️ <br />
          <br />
          D <br />I <br />S <br />C <br />A <br />R <br />D <br />
          <br />B <br />I <br />N
        </h4>
      </div>

      {/* Unique Popup */}
      {confirmData && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "#1e1e1e",
              padding: "2rem",
              borderRadius: "20px",
              textAlign: "center",
              color: "#fff",
              width: "300px",
              boxShadow: "0 0 20px rgba(255,255,255,0.2)",
            }}
          >
            <h3 style={{ marginBottom: "1rem", color: "#ff6b6b" }}>
              ⚠️ Confirm Delete
            </h3>
            <p>
              Are you sure you want to delete <br />
              <strong style={{ color: "#dcff91" }}>
                {confirmData.task}
              </strong>
              ?
            </p>
            <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem", justifyContent: "center" }}>
              <button
                onClick={confirmDelete}
                style={{
                  padding: "0.5rem 1rem",
                  background: "#ff4d4d",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Yes, Delete
              </button>
              <button
                onClick={cancelDelete}
                style={{
                  padding: "0.5rem 1rem",
                  background: "#4caf50",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
