// import './EditTripExpenses.css';
// import React, { useState } from 'react';

// function EditTripExpenses() {
//   const [tripID, setTripID] = useState('');
//   const [srNO, setSrNO] = useState('');
//   const [empID, setEmpID] = useState('');
//   const [empName, setEmpName] = useState('');
//   const [startDateTimeField, setStartDateTimeField] = useState('');
//   const [startDateTimeInput, setStartDateTimeInput] = useState('');
//   const [startManualReason, setStartManualReason] = useState('');
//   const [startOtherReason, setStartOtherReason] = useState('');
//   const [section, setSection] = useState('start-part');
//   const list1 = ['Reason 1', 'Reason 2', 'Reason 3']; // Replace with your actual list
//   const todayDate = new Date().toLocaleDateString();
//   const [autoFetch, setAutoFetch] = useState('initialValue'); // Replace 'initialValue' with your desired initial value


//   const handleButtonClick = (section) => {
//     setSection(section);
//   };

//   const handleStartDateTimeChange = (e) => {
//     setStartDateTimeField(e.target.value);
//   };

//   const handleStartManualReasonChange = (e) => {
//     setStartManualReason(e.target.value);
//   };

//   const handleStartOtherReasonChange = (e) => {
//     setStartOtherReason(e.target.value);
//   };

//   return (
//     <div className="container-edit mx-auto card p-2 shadow-lg">
//       <form id="myForm">
//         <h1 style={{ textAlign: 'center' }} className="card-title-edit highlight">
//           <b>EDIT</b>
//         </h1>
//         <div className="form-row-edit">
//           <div className="form-group-edit col-md-2 form-control-sm">
//             <b>TRIP ID *</b>
//             <input
//               readOnly
//               type="text"
//               className="form-control form-control-sm"
//               id="tripID"
//               onBlur={() => {
//                 // Calculate and update some result
//               }}
//               placeholder="ENTER TRIP ID"
//               value={tripID}
//               onChange={(e) => setTripID(e.target.value)}
//             />
//             Response:<b id="result"></b>
//           </div>
//           <div className="form-group-edit col-md-2 form-control-sm">
//             <b>SR NO.</b>
//             <input
//               type="text"
//               className="form-control form-control-sm"
//               id="srNO"
//               placeholder="SR NO."
//               value={srNO}
//               onChange={(e) => setSrNO(e.target.value)}
//             />
//           </div>
//           <div className="form-group-edit col-md-2 form-control-sm">
//             <b>EMPLOYEE ID *</b>
//             <input
//               type="text"
//               className="form-control form-control-sm empID"
//               placeholder="EMPLOYEE ID"
//               autoComplete="off"
//               value={empID}
//               onChange={(e) => setEmpID(e.target.value)}
//             />
//           </div>
//           <div className="form-group-edit col-md-2 form-control-sm">
//             <b>EMPLOYEE NAME *</b>
//             <input
//               type="text"
//               className="form-control form-control-sm empNAME"
//               placeholder="EMPLOYEE NAME"
//               autoComplete="off"
//               value={empName}
//               onChange={(e) => setEmpName(e.target.value)}
//             />
//           </div>
//           <div className="form-group-edit col-md-2 form-control-sm ">
//             <b style={{ textAlign: 'left' }}>
//               <strong>TODAY'S DATE</strong>
//             </b>
//             <input
//               disabled
//               className="form-control form-control-sm align-right input-text"
//               value={todayDate}
//               id="disabled"
//               type="text"
//               style={{ textAlign: 'center' }}
//             />
//           </div>
//         </div>

//         <div className="row">
//           <div className="col-sm-12">
//             <div className="card-body mx-auto card p-2 shadow-lg">
//               <div id="hide1">
//                 <div className="row">
//                   <div className="col-sm-12">
//                     <div className="btn-group1-edit" role="group">
//                       <button
//                         onClick={() => handleButtonClick('start-part')}
//                         id="start-part"
//                         type="button"
//                         className={`btn btn-outline-dark toggle-btn-edit ${
//                           section === 'start-part' ? 'active' : ''
//                         }`}
//                       >
//                         <strong>START TRIP</strong>
//                       </button>
//                       <button
//                         onClick={() => handleButtonClick('expenses-part')}
//                         id="expenses-part"
//                         type="button"
//                         className={`btn btn-outline-dark toggle-btn-edit ${
//                           section === 'expenses-part' ? 'active' : ''
//                         }`}
//                       >
//                         <strong>EXPENSES</strong>
//                       </button>
//                       <button
//                         onClick={() => handleButtonClick('exchange-part')}
//                         id="exchange-part"
//                         type="button"
//                         className="btn btn-outline-dark toggle-btn-edit me-md-2"
//                       >
//                         <strong>EXCHANGE RATE</strong>
//                       </button>
//                       <button
//                         onClick={() => handleButtonClick('total-part')}
//                         id="total-part"
//                         type="button"
//                         className="btn btn-outline-dark toggle-btn-edit"
//                       >
//                         <strong>TOTAL AMOUNT</strong>
//                       </button>
//                       <button
//   onClick={() => handleButtonClick('remarks-part')}
//   id="remarks-part"
//   type="button"
//   className="btn btn-outline-dark toggle-btn-edit"
// >
//   <strong>TRIP REMARKS</strong>
// </button>

//                       <button
//                         onClick={() => handleButtonClick('end-part')}
//                         id="end-part"
//                         type="button"
//                         className="btn btn-outline-dark toggle-btn-edit"
//                       >
//                         <strong>END TRIP</strong>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="row">
//           <div className="col-sm-12">
//             <div className="card">
//               <div className="card-body p-2 shadow-lg">
//                 <div
//                   id="start-part"
//                   className={`card border section ${
//                     section === 'start-part' ? '' : 'hidden'
//                   }`}
//                 >
//                   <div className="card-body">
//                     <h3 style={{ textAlign: 'center' }} className="card-title highlight">
//                       <b>START TRIP</b>
//                     </h3>
//                     <div className="d-flex justify-content-center mt-3">
//                       <div className="form-group md-4 mb-4 col-sm-4">
//                         <input
//                           type="text"
//                           className="form-control form-control-sm"
//                           id="startdateTimeField"
//                           placeholder="Fetched Date & Time"
//                           autoComplete="off"
//                           value={startDateTimeField}
//                           onChange={handleStartDateTimeChange}
//                         />
//                       </div>
//                     </div>
//                     <div className="d-flex justify-content-center mt-3">
//                       <h1>--OR--</h1>
//                     </div>
//                     <div className="d-flex justify-content-center mt-3">
//                       <div className="row">
//                         <div className="form-group md-4 mb-4 col-sm-4">
//                           <label>Manual Date & Time</label>
//                           <input
//                             type="datetime-local"
//                             className="form-control form-control-sm"
//                             id="startdateTimeInput"
//                             placeholder="Enter Date and Time"
//                             max=""
//                             value={startDateTimeInput}
//                             onChange={handleStartDateTimeChange}
//                           />
//                         </div>
//                         <div className="col-md-4 form-control-sm">
//                           <label>Manual Reason</label>
//                           <div id="remarks-part" className={`card border section ${section === 'remarks-part' ? '' : 'hidden'}`}>
//   <div className="card-body">
//     <h5 className="card-title highlight">
//       <b>TRIP REMARKS</b>
//     </h5>
//     {/* TRIP REMARKS section content */}
//     {section === 'remarks-part' && (
//       <>
//         <div className="form-group form-control-lg">
//           <textarea
//             className="form-control"
//             id="tripRemarks"
//             rows="5"
//             placeholder="Enter trip remarks.."
//           ></textarea>
//         </div>
//       </>
//     )}
//   </div>
// </div>

//                         </div>
//                         <div className="form-group md-4 mb-4 col-sm-4">
//                           <label>Other Reason</label>
//                           <input
//                             type="text"
//                             className="form-control form-control-sm"
//                             id="startotherReason"
//                             placeholder="Reason"
//                             autoComplete="off"
//                             value={startOtherReason}
//                             onChange={handleStartOtherReasonChange}
//                             disabled
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Add similar sections for other parts (expenses, exchange, total, end, remarks) */}
//                 <div id="remarks-part" className={`card border section ${section === 'remarks-part' ? '' : 'hidden'}`}>
//   <div className="card-body">
//     <h5 className="card-title highlight">
//       <b>TRIP REMARKS</b>
//     </h5>
//     {/* TRIP REMARKS section content */}
//     {section === 'remarks-part' && (
//       <>
//         <div className="form-group form-control-lg">
//           <textarea
//             className="form-control"
//             id="tripRemarks"
//             rows="5"
//             placeholder="Enter trip remarks.."
//           ></textarea>
//         </div>
//       </>
//     )}
//   </div>
// </div>

//               </div>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default EditTripExpenses;


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
        alert("pagesix");
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
              pagesix: <EndTrip onButtonClick={nextPage} />,
            }[page]
          }
        </div>
      </div>
    </div>
  </div>
  

  );
}

export default EditTripExpenses;