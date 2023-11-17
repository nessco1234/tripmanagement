import React, { useState } from "react";
import currencies from "../../currencies/currencies";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function TravelExpenses() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expensesData, setExpensesData] = useState([]);
  const [formData, setFormData] = useState({
    date: "",
    expenses: "",
    currency: "",
    amount: "",
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newExpense = { ...formData };
    setExpensesData((prevData) => [...prevData, newExpense]);
    setFormData({
      date: "",
      expenses: "",
      currency: "",
      amount: "",
    });
    console.log("Expense added:", newExpense);
    closeModal();
  };
  return (
    <div>
      <div className="header-container">
  <h2 className="text-lg font-semibold mb-2">Travel Expenses</h2>
  <button
    data-modal-toggle="authentication-modal"
    className="add-button-purple small-button"
    type="button"
    onClick={openModal}
  >
    Add row
  </button>
</div>


      {isModalOpen && (
		
        <div
          id="authentication-modal"
          className={`fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full ${
            isModalOpen ? 'modal-reveal' : ''
          }`}
        >
          <div className="abc1">
            <div className="container-expenses-outer">
              <button
                type="button"
                data-modal-hide="authentication-modal"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>

              <div className="container-expenses ">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                  Add Expense
                </h3>
                <form
                  className="space-y-6"
                  action="#"
                  onSubmit={handleFormSubmit}
                >
                  <div className="flex flex-wrap -mx-2 mb-2">
                    <div className="w-full sm:w-1/2 px-2 mb-2">
                      <div className="flex flex-wrap -mx-2">
                        <div className="w-full sm:w-1/2 px-2 mb-2">
                          <label
                            htmlFor="date"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Travel Date:
                          </label>
                          <br />
                          <input
                            type="date"
                            name="date"
                            id="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            required
                          />
                        </div>
                        <div className="w-full sm:w-1/2 px-2 mb-2">
                          <label
                            htmlFor="travelType"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Travelling Type:
                          </label>
                          <br />
                          <select
                            name="travelType"
                            id="travelType"
                            value={formData.travelType}
                            onChange={handleInputChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          >
                            <option value=""  disabled selected>--Select--</option>
                            <option value="COUNTRY TO COUNTRY">COUNTRY TO COUNTRY</option>
                            <option value="CITY TO CITY">CITY TO CITY</option>
                            <option value="INSIDE CITY">INSIDE CITY</option>
                            
                          </select>
                        </div>
                        <div className="w-full sm:w-1/2 px-2 mb-2">
                          <label
                            htmlFor="travelMode"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Travelling Mode:
                          </label>
                          <br />
                          <select
                            name="travelMode"
                            id="travelMode"
                            value={formData.travelMode}
                            onChange={handleInputChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          >
                            <option value="" disabled selected>--Select--</option>
                            <option value="TRAIN">TRAIN</option>
                            <option value="FLIGHT">FLIGHT</option>
                            <option value="BUS">BUS</option>
                            <option value="TAXI">TAXI</option>
                            <option value="OLA/UBER/OTHER LIKE OLA UBER">OLA/UBER/OTHER LIKE OLA UBER</option>
                            <option value="BLA BLA CAR">BLA BLA CAR</option>
                            <option value="AUTO">AUTO</option>
                            <option value="METRO">METRO</option>
                            <option value="CITY BUS">CITY BUS</option>
                            <option value="OTHER">OTHER</option>
                          </select>
                        </div>
                        <div className="w-full sm:w-1/2 px-2 mb-2">
													<label
														htmlFor="departure"
														className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
													>
														Departure From:
													</label>
													<br />
													<input
														type="text"
														name="departure"
														id="departure"
														value={formData.departure}
														onChange={handleInputChange}
														className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
														placeholder="Departure"
														required
													/>
												</div>

                        <div className="w-full sm:w-1/2 px-2 mb-2">
													<label
														htmlFor="arrival"
														className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
													>
														Arrival To:
													</label>
													<br />
													<input
														type="text"
														name="arrival"
														id="arrival"
														value={formData.arrival}
														onChange={handleInputChange}
														className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
														placeholder="Arrival"
														required
													/>
												</div>
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2 px-2 mb-2">
                      <div className="flex flex-wrap -mx-2">
                        <div className="w-full sm:w-1/2 px-2 mb-2">
                          <label
                            htmlFor="currency"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Currency:
                          </label>
                          <br />
                          <select
                            name="currency"
                            id="currency"
                            value={formData.currency}
                            onChange={handleInputChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          >
                            <option value="" disabled selected>--Select--</option>
                            {currencies.map((currency) => (
                              <option key={currency.code} value={currency.code}>
                                {currency.name} ({currency.code})
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="w-full sm:w-1/2 px-2 mb-2">
                          <label
                            htmlFor="amount"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Amount:
                          </label>
                          <br />
                          <input
                            type="number"
                            name="amount"
                            id="amount"
                            value={formData.amount}
                            onChange={handleInputChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Amount"
                            required
                          />
                        </div>
                        <div className="w-full sm:w-1/2 px-2 mb-2">
                          <div>
                            <label
                              htmlFor="file"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Upload File:
                            </label>
                            <br />
                            <input
                              type="file"
                              name="file"
                              id="file"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                              accept=".pdf, .jpg, .png, .jpeg"
                            />
                          </div>
                        </div>
                        <div className="w-full sm:w-1/2 px-2 mb-2">
													<label
														htmlFor="description"
														className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
													>
														Description:
													</label>
													<br />
													<input
														type="text"
														name="description"
														id="description"
														value={formData.description}
														onChange={handleInputChange}
														className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
														placeholder="Descriptiion"
														required
													/>
												</div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 px-2 mb-2">
                    <button type="submit" className="add-button-purple">
                      Add Expense
                    </button>
                    <button
                      data-modal-toggle="authentication-modal"
                      className="close-button"
                      type="button"
                      onClick={closeModal}
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
       {expensesData.length > 0 && (
  <div className="recent-expense">
    {/* <h4>Recently Added Expenses:</h4> */}
    <div className="table-container">
      <table className="styled-table">
        <thead>
          <tr>
            <th>Travel Date</th>
            <th>Travelling Type</th>
            <th>Travelling Mode</th>
            <th>Departure From</th>
            <th>Arrival To</th>
            <th>Currency</th>
            <th>Amount</th>
            <th>Bill Attachment</th>
            <th>Description</th>

          </tr>
        </thead>
        <tbody>
          {expensesData.map((expense, index) => (
            <tr key={index}>
              <td>{expense.date}</td>
              <td>{expense.travelType}</td>
              <td>{expense.travelMode}</td>
              <td>{expense.departure}</td>
              <td>{expense.arrival}</td>
              <td>{expense.currency}</td>
              <td>{expense.amount}</td>
              <td>{expense.file}</td>
              <td>{expense.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)}





      {/* Display the table within your tab-content */}
      <div className="tab-content">
        <table>
          <thead>
            <tr>
            <th>Travel Date</th>
            <th>Travelling Type</th>
            <th>Travelling Mode</th>
            <th>Departure From</th>
            <th>Arrival To</th>
            <th>Currency</th>
            <th>Amount</th>
            <th>Bill Attachment</th>
            <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {expensesData.map((expense, index) => (
              <tr key={index}>
                <td>{expense.date}</td>
              <td>{expense.travelType}</td>
              <td>{expense.travelMode}</td>
              <td>{expense.departure}</td>
              <td>{expense.arrival}</td>
              <td>{expense.currency}</td>
              <td>{expense.amount}</td>
              <td>{expense.file}</td>
              <td>{expense.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TravelExpenses;

