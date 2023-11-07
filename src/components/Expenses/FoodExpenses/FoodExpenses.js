import React, { useState } from 'react';
import Modal from 'react-modal';

function FoodExpenses() {
  const [rows, setRows] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState('');
  const [expenses, setExpenses] = useState('');
  const [currency, setCurrency] = useState('');
  const [amount, setAmount] = useState('');
  const [bill, setBill] = useState('');

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSaveRow = () => {
    const newRow = { date, expenses, currency, amount, bill };
    setRows([...rows, newRow]);
    setDate('');
    setExpenses('');
    setCurrency('');
    setAmount('');
    setBill('');
  };

  return (
    <div>
      {/* <h1 className="text-2xl font-semibold mb-4 text-center">Food Expenses</h1> */}

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mb-4 mx-auto block add-button"
        onClick={openModal}
      >
        Add Row
      </button>

      <div className="w-full overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-blue-100 text-left text-xs font-medium text-gray-800 uppercase">
                Date
              </th>
              <th className="px-6 py-3 bg-blue-100 text-left text-xs font-medium text-gray-800 uppercase">
                Expenses
              </th>
              <th className="px-6 py-3 bg-blue-100 text-left text-xs font-medium text-gray-800 uppercase">
                Currency
              </th>
              <th className="px-6 py-3 bg-blue-100 text-left text-xs font-medium text-gray-800 uppercase">
                Amount
              </th>
              <th className="px-6 py-3 bg-blue-100 text-left text-xs font-medium text-gray-800 uppercase">
                Bill
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td className="px-6 py-4 border-b border-gray-200">{row.date}</td>
                <td className="px-6 py-4 border-b border-gray-200">{row.expenses}</td>
                <td className="px-6 py-4 border-b border-gray-200">{row.currency}</td>
                <td className="px-6 py-4 border-b border-gray-200">{row.amount}</td>
                <td className="px-6 py-4 border-b border-gray-200">{row.bill}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Add Row"
      >
        <div className="abc">      
      <div className="container-edit-outer">        
        <div className="container-edit">
        <h2 className="text-xl font-semibold mb-4">Add Row</h2>
        <input
          type="text"
          placeholder="Date"
          className="w-full border rounded p-2 mb-2"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Expenses"
          className="w-full border rounded p-2 mb-2"
          value={expenses}
          onChange={(e) => setExpenses(e.target.value)}
        />
        <input
          type="text"
          placeholder="Currency"
          className="w-full border rounded p-2 mb-2"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        />
        <input
          type="text"
          placeholder="Amount"
          className="w-full border rounded p-2 mb-2"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="Bill"
          className="w-full border rounded p-2 mb-4"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSaveRow}
        >
          Save
        </button>
        <button
          className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded ml-4"
          onClick={closeModal}
        >
          Cancel
        </button>
        </div>
        </div>
        </div>
      </Modal>
    </div>
  );
}

export default FoodExpenses;
