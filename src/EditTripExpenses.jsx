
// import './EditTripExpenses.css';
// import React from 'react'
// import { useState } from 'react';

// function EditTripExpenses() {

//   const [tripID, setTripID] = useState('');
//   const [srNO, setSrNO] = useState('');
//   const [empID, setEmpID] = useState('');
//   const [empName, setEmpName] = useState('');
//   const [employeeType, setEmployeeType] = useState('single');
//   const [todayDate] = useState(
//     new Date().getDate() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear()
//   );
//   const [section, setSection] = useState('start-part');

//   const handleButtonClick = (section) => {
//     // Handle button clicks for different sections
//     // You can use the section parameter to determine which section was clicked
//     setSection(section);
//   };

//   return (
    
//       <div className="container-edit mx-auto card p-2 shadow-lg">
//       <form id="myForm">
//         <h1 style={{ textAlign: 'center' }} className="card-title-edit highlight">
//           <b>EDIT</b>
//         </h1>
//         <div className="form-row-edit">
//   <div className="form-group-edit col-md-2 form-control-sm">
//     <b>TRIP ID *</b>
//     <input
//       readOnly
//       type="text"
//       className="form-control form-control-sm"
//       id="tripID"
//       onBlur={() => {
//         // Calculate and update some result
//       }}
//       placeholder="ENTER TRIP ID"
//       value={tripID}
//       onChange={(e) => setTripID(e.target.value)}
//     />
//     Response:<b id="result"></b>
//   </div>
//   <div className="form-group-edit col-md-2 form-control-sm">
//     <b>SR NO.</b>
//     <input
//       type="text"
//       className="form-control form-control-sm"
//       id="srNO"
//       placeholder="SR NO."
//       value={srNO}
//       onChange={(e) => setSrNO(e.target.value)}
//     />
//   </div>
//   <div className="form-group-edit col-md-2 form-control-sm">
//     <b>EMPLOYEE ID *</b>
//     <input
//       type="text"
//       className="form-control form-control-sm empID"
//       placeholder="EMPLOYEE ID"
//       autoComplete="off"
//       value={empID}
//       onChange={(e) => setEmpID(e.target.value)}
//     />
//   </div>
//   <div className="form-group-edit col-md-2 form-control-sm">
//     <b>EMPLOYEE NAME *</b>
//     <input
//       type="text"
//       className="form-control form-control-sm empNAME"
//       placeholder="EMPLOYEE NAME"
//       autoComplete="off"
//       value={empName}
//       onChange={(e) => setEmpName(e.target.value)}
//     />
//   </div>
//   <div className="form-group-edit col-md-2 form-control-sm ">
//     <b style={{ textAlign: 'left' }} >
//       <strong>TODAY'S DATE</strong>
//     </b>
//     <input
//       disabled
//       className="form-control form-control-sm align-right input-text"
//       value={todayDate}
//       id="disabled"
//       type="text"
//       style={{ textAlign: 'center' }}
//     />
//   </div>
// </div>

//         <div className="row">
//           <div className="col-sm-12">
            
//               <div className="card-body mx-auto card p-2 shadow-lg">
//                 <div id="hide1">
//                   <div className="row">
//                     <div className="col-sm-12">
//                       <div className="btn-group1-edit" role="group">
//                         <button
//                           onClick={() => handleButtonClick('start-part')}
//                           id="start-part"
//                           type="button"
//                           className="btn btn-outline-dark toggle-btn-edit active"
//                         >
//                           <strong>START TRIP</strong>
//                         </button>
//                         <button
//                           onClick={() => handleButtonClick('expenses-part')}
//                           id="expenses-part"
//                           type="button"
//                           className="btn btn-outline-dark toggle-btn-edit"
//                         >
//                           <strong>EXPENSES</strong>
//                         </button>
//                         <button
//                           onClick={() => handleButtonClick('exchange-part')}
//                           id="exchange-part"
//                           type="button"
//                           className="btn btn-outline-dark toggle-btn-edit me-md-2"
//                         >
//                           <strong>EXCHANGE RATE</strong>
//                         </button>
//                         <button
//                           onClick={() => handleButtonClick('total-part')}
//                           id="total-part"
//                           type="button"
//                           className="btn btn-outline-dark toggle-btn-edit"
//                         >
//                           <strong>TOTAL AMOUNT</strong>
//                         </button>
//                         <button
//                           onClick={() => handleButtonClick('remarks-part')}
//                           id="remarks-part"
//                           type="button"
//                           className="btn btn-outline-dark toggle-btn-edit"
//                         >
//                           <strong>TRIP REMARKS</strong>
//                         </button>
//                         <button
//                           onClick={() => handleButtonClick('end-part')}
//                           id="end-part"
//                           type="button"
//                           className="btn btn-outline-dark toggle-btn-edit"
//                         >
//                           <strong>END TRIP</strong>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
            
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-sm-12">
//             <div className="card">
//               <div className="card-body p-2 shadow-lg">
//                 <div id="start-part" className={`card border section ${section === 'start-part' ? '' : 'hidden'}`}>
//                   <div className="card-body">
//                     <h3 style={{ textAlign: 'center' }} className="card-title highlight">
//                       <b>START TRIP</b>
//                     </h3>
//                     {/* Add your Start Trip section HTML here */}
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
//                         <div className="d-flex justify-content-center mt-3">
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
//                           <select
//                             className="form-control drop form-control-sm"
//                             id="startmanualReason"
//                             value={startManualReason}
//                             onChange={handleStartManualReasonChange}
//                           >
//                             <option value="" disabled selected hidden>
//                               --Select an option:--
//                             </option>
//                             {/* Map over your list1 array */}
//                             {list1.map((item, index) => (
//   <option key={index} value={item}>
//     {item}
//   </option>
// ))}

//                           </select>
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
//               </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div id="expenses-part" className={`card border section ${section === 'expenses-part' ? '' : 'hidden'}`}>
//                   <div className="card-body">
//                     <h5 className="card-title highlight">
//                       <b>EXPENSES</b>
//                     </h5>
//                     {/* Add your Expenses section HTML here */}
//                     <div id="hide1">
//                 <div class="row">
//                   <div class="col-sm-12">
//                     <div class="btn-group" role="group">
//                       <button type="button" class="btn btn-outline-secondary expense-btn active" data-target="food-part" >FOOD EXPENSES</button>
//                       <button type="button" class="btn btn-outline-secondary expense-btn" data-target="hotel-part">HOTEL EXPENSES</button>
//                       <button type="button" class="btn btn-outline-secondary expense-btn" data-target="other-part" >OTHER EXPENSES</button>
//                       <button type="button" class="btn btn-outline-secondary expense-btn" data-target="travelling-part" >TRAVELLING EXPENSES</button>

//                     </div>
//                   </div>
//                 </div>
//               </div>
//                   </div>
//                 </div>

//                 {/* Add similar sections for other parts (exchange, total, end, remarks) */}
//               </div>
//             </div>
//           </div>
//         </div>
        
//       </form>
//     </div>
//   )
// }

// export default EditTripExpenses
