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
    <div className="abc">      
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