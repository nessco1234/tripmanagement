import StartTrip from "./components/StartTrip/StartTrip";
import Expenses from "./components/Expenses/Expenses";
import ExchangeRate from "./components/ExchangeRate/ExchangeRate";
import TotalAmount from "./components/TotalAmount/TotalAmount";
import TripRemarks from "./components/TripRemarks/TripRemarks";
import EndTrip from "./components/EndTrip/EndTrip";
import './EditTripExpenses.css';
import React, { useState } from "react";
import tachyons from "tachyons";
import MultiStepProgressBar from "./components/MultiStepProgressBar/MultiStepProgressBar";

function EditTripExpenses() {
  const [page, setPage] = useState("pageone");
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');

  const nextPage = (page) => {
    setPage(page);
  };

  const nextPageNumber = (pageNumber) => {
    switch (pageNumber) {
      case "1":
        setPage("pageone");
        break;
      case "2":
        setPage("pagetwo");
        break;
      case "3":
        setPage("pagethree");
        break;
      case "4":
        setPage("pagefour");
        break;  
      case "5":
        setPage("pagefive");
        break;   
      case "6":
        setPage("pagesix");
        break;
      default:
        setPage("1");
    }
  };

  return (
    
    <div className="EditTripExpenses">     
     {/* New container for additional input fields */}
      
    <div className="abc">
    <div className="container-edit-outer-other">        
        <div className="container-edit-other">
    <div className="top-inputs-container">
    <div className="my-2">
    <label className="block text-sm font-semibold mb-1">Trip Id:</label><br/>
        <input
          type="text"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
          placeholder="Trip Id"
          className="w-full py-1 px-3 border border-gray-300 rounded text-sm"
        />
        </div>
        <div className="my-2">
        <label className="block text-sm font-semibold mb-1">SR No.:</label><br/>
        <input
          type="text"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          placeholder="SR No."
          className="w-full py-1 px-3 border border-gray-300 rounded text-sm"
        />
        </div>
        <div className="my-2">
        <label className="block text-sm font-semibold mb-1">Employee Id:</label><br/>
        <input
          type="text"
          value={input3}
          onChange={(e) => setInput3(e.target.value)}
          placeholder="Employee Id"
          className="w-full py-1 px-3 border border-gray-300 rounded text-sm"
        />
        </div>
        <div className="my-2">
        <label className="block text-sm font-semibold mb-1">Employee Name:</label><br/>
        <input
          type="text"
          value={input4}
          onChange={(e) => setInput4(e.target.value)}
          placeholder="Employee Name"
          className="w-full py-1 px-3 border border-gray-300 rounded text-sm"
        />
        </div>
      </div>    
      </div>
      </div>  
      <div className="container-edit-outer">        
        <div className="container-edit">
        <MultiStepProgressBar page={page} onPageNumberClick={nextPageNumber} />
          {
            {
              pageone: <StartTrip onButtonClick={nextPage} />,
              pagetwo: <Expenses onButtonClick={nextPage} />,
              pagethree: <ExchangeRate onButtonClick={nextPage} />,
              pagefour: <TotalAmount onButtonClick={nextPage} />,
              pagefive: <TripRemarks onButtonClick={nextPage} />,
              pagesix: <EndTrip onButtonClick={nextPage} />
            }[page]
          }
        </div>
      </div>
    </div>
  </div>
  

  );
}

export default EditTripExpenses;