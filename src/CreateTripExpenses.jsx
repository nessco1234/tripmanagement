import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateTripExpenses.css";
import "bootstrap/dist/css/bootstrap.min.css";

const CreateTripExpenses = () => {
  const [tripId, setTripId] = useState("");
  const [srNo, setSrNo] = useState("");
  const [employees, setEmployees] = useState([{ id: "", name: "" }]);
  const [employeeType, setEmployeeType] = useState("single");
  const [error, setError] = useState(null);
  const [currentDate] = useState(new Date().toISOString().split("T")[0]);
  const [currentDateTime, setCurrentDateTime] = useState(
    new Date().toISOString().slice(0, 16)
  );
  const [dateTimeType, setDateTimeType] = useState("automatic");
  const [manualDateTime, setManualDateTime] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    let interval;
    if (dateTimeType === "automatic") {
      interval = setInterval(() => {
        setCurrentDateTime(new Date().toISOString().slice(0, 16));
      }, 1000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [dateTimeType]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Assuming you want to use the payload in the API request
    const payload = {
      tripId,
      srNo,
      employees: employeeType === "single" ? [employees[0]] : employees,
      dateTime:
        dateTimeType === "automatic" ? new Date() : new Date(manualDateTime),
    };

    try {
      const response = await fetch("http://localhost:8000/api/tripexpenses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (data.success) {
        navigate("/home"); // Here we use navigate to redirect after success
      } else {
        setError(data.message || "An error occurred");
      }
    } catch (error) {
      setError(error.message || "Something went wrong");
    }
  };

  const setEmployeeTypeAndReset = (type) => {
    setEmployeeType(type);
    if (type === "single") {
      setEmployees([employees[0]]);
    }
  };

  const setDateTimeTypeAndReset = (type) => {
    setDateTimeType(type);
    if (type === "automatic") {
      setManualDateTime("");
    }
  };

  const handleEmployeeChange = (index, field, value) => {
    const newEmployees = [...employees];
    newEmployees[index][field] = value;
    setEmployees(newEmployees);
  };

  const addEmployeeField = () => {
    setEmployees([...employees, { id: "", name: "" }]);
  };

  const removeEmployeeField = (index) => {
    const newEmployees = [...employees];
    newEmployees.splice(index, 1);
    setEmployees(newEmployees);
  };

  return (
    <div className="container-full-bg">
      <div className="overlay-form">
        {error && <div className="error">{error}</div>}
        <div className="form-section">
          <h1 className="text-center">Create Start</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="tripId" className="form-label">
                Trip ID
              </label>
              <input
                type="text"
                id="tripId"
                className="form-control"
                required
                value={tripId}
                onChange={(e) => setTripId(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="srNo" className="form-label">
                Sr No.
              </label>
              <input
                type="text"
                id="srNo"
                className="form-control"
                required
                value={srNo}
                onChange={(e) => setSrNo(e.target.value)}
              />
            </div>
            <div className="form-group d-flex align-items-center flex-wrap flex-md-nowrap">
              <div className="form-check flex-grow-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="employeeType"
                  id="single"
                  value="single"
                  checked={employeeType === "single"}
                  onChange={() => setEmployeeTypeAndReset("single")}
                />
                <label className="form-check-label" htmlFor="single">
                  Single Employee
                </label>
              </div>

              <div className="form-check flex-grow-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="employeeType"
                  id="group"
                  value="group"
                  checked={employeeType === "group"}
                  onChange={() => setEmployeeTypeAndReset("group")}
                />
                <label className="form-check-label" htmlFor="group">
                  Group
                </label>
              </div>

              <div className="date-field flex-grow-1">
                <input
                  type="text"
                  className="form-control"
                  value={currentDate}
                  readOnly
                />
              </div>
            </div>
            {employees.map((employee, index) => (
              <div key={index} className="employee-inputs text-center">
                <input
                  type="text"
                  placeholder="Employee ID"
                  value={employee.id}
                  onChange={(e) =>
                    handleEmployeeChange(index, "id", e.target.value)
                  }
                  required
                />
                <input
                  type="text"
                  placeholder="Employee Name"
                  value={employee.name}
                  onChange={(e) =>
                    handleEmployeeChange(index, "name", e.target.value)
                  }
                  required
                />
                {employeeType === "group" && employees.length > 1 && (
                  <button
                    type="button"
                    className="remove-button"
                    onClick={() => removeEmployeeField(index)}
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            {employeeType === "group" && (
              <button
                type="button"
                className="add-button"
                onClick={addEmployeeField}
              >
                Add More
              </button>
            )}
            <div className="form-group">
              <h3 className="text-center">Start Trip</h3>
            </div>
            <div className="form-group d-flex align-items-center justify-content-between">
              <h6>Date and Time</h6>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="dateTimeType"
                  id="automatic"
                  value="automatic"
                  checked={dateTimeType === "automatic"}
                  onChange={() => setDateTimeType("automatic")}
                />
                <label className="form-check-label" htmlFor="automatic">
                  Automatically Fetch
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="dateTimeType"
                  id="manual"
                  value="manual"
                  checked={dateTimeType === "manual"}
                  onChange={() => setDateTimeType("manual")}
                />
                <label className="form-check-label" htmlFor="manual">
                  Manually Set
                </label>
              </div>

              {dateTimeType === "automatic" ? (
                <input
                  type="text"
                  className="form-control form-control-sm"
                  value={currentDateTime.replace("T", " ")}
                  readOnly
                />
              ) : (
                <input
                  type="datetime-local"
                  className="form-control form-control-sm"
                  value={manualDateTime}
                  onChange={(e) => setManualDateTime(e.target.value)}
                />
              )}
            </div>

            <div className="text-center">
              <button type="button" className="btn-primary">
                Start Trip
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTripExpenses;
