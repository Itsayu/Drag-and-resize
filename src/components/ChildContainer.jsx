
import React, { useState } from "react";
import axios from "axios";

const ChildContainer = ({ name, number }) => {
  const [data, setData] = useState({ name: "", age: "" });

  const handleAddData = async () => {
    try {
      await axios.post("/api/add", data);
      // Clear input fields after successful addition
      setData({ name: "", age: "" });
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  const handleUpdateData = async (id) => {
    try {
      await axios.put(`/api/update/${id}`, data);
      // Clear input fields after successful update
      setData({ name: "", age: "" });
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div className={`child ${name}`}>
      <h1>Box {number}</h1>
      
      <button onClick={handleAddData}>Add Data</button>
      <button onClick={() => handleUpdateData(id)}>Update Data</button>
      <div onClick="this.contentEditable='true';">
        Hello DataNeuron
      </div>
    </div>
  );
};

export default ChildContainer;



