import React, { useState } from "react";
import currencies from "../../currencies/currencies";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


function FoodExpenses() {
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


  const handleFormSubmit = (e) => {
    e.preventDefault();
    setExpensesData([...expensesData, formData]);
    setFormData({
      date: "",
      expenses: "",
      currency: "",
      amount: "",
    });
  };


	return (
		<div>
			<button
				data-modal-toggle="authentication-modal"
				className="add-button-purple"
				type="button"
				onClick={openModal}
			>
				Toggle modal
			</button>

			{isModalOpen && (
				<div
        id="authentication-modal"
        className={`fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full ${isModalOpen ? 'modal-reveal' : ''}`}
      >
					<div className="abc1">
						<div className="container-expenses-outer">
							{/* <div className="relative w-full max-w-md max-h-full"> */}
							{/* <div className="relative bg-white rounded-lg shadow dark:bg-gray-700"> */}
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
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
									/>
								</svg>
								<span className="sr-only">Close modal</span>
							</button>

							<div className="container-expenses ">
								<h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
									Add Expense
								</h3>
								<form className="space-y-6" action="#">
									<div className="flex flex-wrap -mx-2 mb-2">
										<div className="w-full sm:w-1/2 px-2 mb-2">
											<div className="flex flex-wrap -mx-2">
												<div className="w-full sm:w-1/2 px-2 mb-2">
													<label
														htmlFor="date"
														className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
													>
														Date:
													</label>
													<br />
													<input
														type="date"
														name="date"
														id="date"
														className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
														required
													/>
												</div>
												<div className="w-full sm:w-1/2 px-2 mb-2">
													<label
														htmlFor="expenses"
														className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
													>
														Expenses:
													</label>
													<br />
													<select
														name="expenses"
														id="expenses"
														className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
													>
														<option value="expense1">BREAKFAST</option>
														<option value="expense2">LUNCH</option>
														<option value="expense3">DINNER</option>
														<option value="expense4">WATER BOTTLE</option>
														<option value="expense5">TEA/COFFEE</option>
													</select>
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
														className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
													>
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
											</div>
										</div>
									</div>
									<div className="w-full sm:w-1/2 px-2 mb-2">
										<button
											type="submit"
											className="add-button-purple"
										>
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
				// </div>
				// </div>
			)}
		</div>
    
	)}

 
<div className="tab-content">
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Expenses</th>
        <th>Currency</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody>
      {expensesData.map((expense, index) => (
        <tr key={index}>
          <td>{expense.date}</td>
          <td>{expense.expenses}</td>
          <td>{expense.currency}</td>
          <td>{expense.amount}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>




export default FoodExpenses;
