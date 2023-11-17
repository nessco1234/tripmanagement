import React, { useState } from 'react';
import './EndTrip.css';

function EndTrip() {
  const [startDateTime, setStartDateTime] = useState('');
  const [locationPermission, setLocationPermission] = useState(false);
  const [manualReason, setManualReason] = useState('');
  const [otherReason, setOtherReason] = useState('');

  const fetchDateTime = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const currentDateTime = new Date(position.timestamp);
        setStartDateTime(currentDateTime.toLocaleString());
        setLocationPermission(true);
      }, (error) => {
        console.error(error.message);
        setLocationPermission(false);
      });
    } else {
      console.error('Geolocation is not supported in this browser.');
      setLocationPermission(false);
    }
  };

  return (
    <div className="p-4 rounded-md shadow-md">
      <h1 className="text-2xl font-semibold mb-4 heading-edit">End Trip</h1>

      <div className="layout-container">
        <div className="containerleft">
          <div className="w-full p-4">
          <div className="my-2">
          <label className="block text-sm font-semibold mb-1">Automatically fetch Date & Time:</label><br/>
            <input
              className="w-full py-1 px-3 my-2 border border-gray-300 rounded text-sm"
              type="text"
              placeholder="Fetched Date & Time"
              value={startDateTime}
              readOnly
            /><br/>
            <button
              className="bg-blue-500 text-black rounded px-3 py-2"
              onClick={fetchDateTime}
            >
              Fetch Date & Time
            </button>
            {locationPermission ? (
              <p className="text-green-600">Location permission granted.</p>
            ) : (
              <p className="text-red-600">
                Location permission not granted. 
              </p>
            )}
          </div>
        </div>
        </div>

        <div className="containermiddle">
          <div className="w-1/12 text-center relative">
            <div className="h-full border-l border-gray-300 absolute left-1/2 top-0"></div>
            <div className="relative" style={{ zIndex: 1, width: '40px', margin: '0 auto' }}>
              <h1>OR</h1>
            </div>
          </div>
        </div>

        <div className="containerright">
          <div className="w-full p-4">
            <div className="my-2">
              <label className="block text-sm font-semibold mb-1">Manual Date & Time:</label><br/>
              <input
                className="w-full py-1 px-3 border border-gray-300 rounded text-sm"
                type="datetime-local"
                value={startDateTime}
                onChange={(e) => setStartDateTime(e.target.value)}
              />
            </div>

            <div className="my-2">
              <label className="block text-sm font-semibold mb-1">Manual Reason:</label><br/>
              <select
                className="w-full py-1 px-3 border border-gray-300 rounded text-sm"
                value={manualReason}
                onChange={(e) => setManualReason(e.target.value)}
              >
                <option value="" disabled hidden>
                  --Select a reason:--
                </option>
                <option value="reason1">Mobile Network Issue</option>
                <option value="reason2">Phone Switched Off</option>
                <option value="other">Other</option>
              </select>
            </div>

            {manualReason === 'other' && (
              <div className="my-2">
                <label className="block text-sm font-semibold mb-1">Other Reason:</label><br/>
                <input
                  className="w-full py-1 px-3 border border-gray-300 rounded text-sm"
                  type="text"
                  value={otherReason}
                  onChange={(e) => setOtherReason(e.target.value)}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EndTrip;
