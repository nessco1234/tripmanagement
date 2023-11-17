import React, { useState } from "react";

function TripRemarks() {
  const [formData, setFormData] = useState({
    tripRemarks: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <div className="tab-content active">
        <div className="p-4">
          <div className="header-container">
            <h2 className="text-lg font-semibold mb-2">Trip Remarks</h2>
          </div>
          <textarea
  name="tripRemarks"
  id="tripRemarks"
  value={formData.tripRemarks}
  onChange={handleInputChange}
  style={{
    borderRadius: '8px', // You can adjust the border-radius as needed
    width: '100%', // Use '100%' for full width
    padding: '10px', // Adjust padding as needed
    border: '1px solid #ccc', // Adjust border styles as needed
    // Add other styles if necessary
  }}
  placeholder="Enter trip remarks"
  rows="4" // Adjust the number of rows as needed
/>



        </div>
      </div>
    </div>
  );
}

export default TripRemarks;
