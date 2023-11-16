import React, { useState } from 'react';
import './Expenses.css'; // Import your CSS file
import FoodExpenses from './FoodExpenses/FoodExpenses';
import HotelExpenses from './HotelExpenses/HotelExpenses';
import OtherExpenses from './OtherExpenses/OtherExpenses';
import TravelExpenses from './TravelExpenses/TravelExpenses';

function Expenses() {
  const [activeTab, setActiveTab] = useState('Food Expenses');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4 heading-edit">Expenses</h1>

      <div className="flex-tab flex-col sm:flex-row space-y-2 sm:space-y-0">
        <button
          className={`tab-button ${activeTab === 'Food Expenses' ? 'active' : ''}`}
          onClick={() => handleTabClick('Food Expenses')}
        >
          Food Expenses
        </button>

        <button
          className={`tab-button ${activeTab === 'Hotel Expenses' ? 'active' : ''}`}
          onClick={() => handleTabClick('Hotel Expenses')}
        >
          Hotel Expenses
        </button>

        <button
          className={`tab-button ${activeTab === 'Other Expenses' ? 'active' : ''}`}
          onClick={() => handleTabClick('Other Expenses')}
        >
          Other Expenses
        </button>

        <button
          className={`tab-button ${activeTab === 'Travel Expenses' ? 'active' : ''}`}
          onClick={() => handleTabClick('Travel Expenses')}
        >
          Travel Expenses
        </button>
      </div>

      <div className={`tab-content ${activeTab === 'Food Expenses' ? 'active' : ''}`}>
  <div className="p-4">
    {/* <h2 className="text-lg font-semibold mb-2">Food Expenses</h2> */}
    <FoodExpenses />
  </div>
</div>
<div className={`tab-content ${activeTab === 'Hotel Expenses' ? 'active' : ''}`}>
  <div className="p-4">
    {/* <h2 className="text-lg font-semibold mb-2">Hotel Expenses</h2> */}
    <HotelExpenses />
  </div>
</div>
<div className={`tab-content ${activeTab === 'Other Expenses' ? 'active' : ''}`}>
  <div className="p-4">
    {/* <h2 className="text-lg font-semibold mb-2">Other Expenses</h2> */}
    <OtherExpenses />
  </div>
</div>
<div className={`tab-content ${activeTab === 'Travel Expenses' ? 'active' : ''}`}>
  <div className="p-4">
    {/* <h2 className="text-lg font-semibold mb-2">Travel Expenses</h2> */}
    <TravelExpenses />
  </div>
</div>

    </div>
  );
}

export default Expenses;
