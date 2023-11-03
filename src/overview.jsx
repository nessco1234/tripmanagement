import './LoginForm.css';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const Overview = () => {

  const [minutesAgo, setMinutesAgo] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMinutesAgo(minutesAgo + 1);
    }, 60000); // 1 minute = 60000 milliseconds

    return () => clearTimeout(timer);
  }, [minutesAgo]);
  const navigate = useNavigate();

  return (
    <div className='abc'>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="https://www.marketing91.com/wp-content/uploads/2015/07/246.jpg" className="card-img-top card-img-custom" alt="..."  />
              <div className="card-body card-body-custom">
                <h3 className="card-title">Service</h3>
                <p className="card-text">
                  <div>
                    <a href=" " className="small-text" onClick={() => navigate('/createtripexpenses')}>Create Trip Expenses</a>
                  </div>
                  <div>
                    <a href="#!" className="small-text" onClick={() => navigate('/edittripexpenses0')}>Edit Trip Expenses</a>
                  </div>
                  <div>
                    <a href="#!" className="small-text" onClick={() => navigate('/overviewtripexpenses0')}>Overview Trip Expenses</a>
                  </div>
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated {minutesAgo} mins ago</small>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://media.istockphoto.com/id/952625346/photo/businessmen-shaking-hands-after-meeting-in-a-cafe.jpg?s=612x612&w=0&k=20&c=dpfUuBGPdTi4b4gbBg9kkpg8KauUSzGLpVByJsa5_KY=" className="card-img-top card-img-custom" alt="..."/>
              <div className="card-body card-body-custom">
                <h3 className="card-title">Sales</h3>
                <p className="card-text">
                <div>
                    <a href=" " className="small-text" onClick={() => navigate('/createtripexpenses1')}>Create Trip Plan</a>
                  </div>
                  <div>
                    <a href="#!" className="small-text" onClick={() => navigate('/edittripexpenses1')}>Edit Trip Plan</a>
                  </div>
                  <div>
                    <a href="#!" className="small-text" onClick={() => navigate('/overviewtripexpenses1')}>Create/Edit Payment Request</a>
                  </div>
                  <div>
                    <a href=" " className="small-text" onClick={() => navigate('/createtripexpenses1')}>Create Trip Expenses</a>
                  </div>
                  <div>
                    <a href="#!" className="small-text" onClick={() => navigate('/edittripexpenses1')}>Edit Trip Expenses</a>
                  </div>
                  <div>
                    <a href="#!" className="small-text" onClick={() => navigate('/overviewtripexpenses1')}>Overview Trip Expenses</a>
                  </div>
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated {minutesAgo} mins ago</small>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://img.freepik.com/premium-photo/hands-businessman-virtual-innovation-business-process-problem-solving-workflow-monitoring-evaluation-as-well-as-quality-control-are-all-part-operations-management_27634-829.jpg" className="card-img-top card-img-custom" alt="..."/>
              <div className="card-body card-body-custom">
                <h3 className="card-title">Operations</h3>
                <p className="card-text">
                <div>
                    <a href=" " className="small-text" onClick={() => navigate('/createtripexpenses2')}>Create Trip Plan</a>
                  </div>
                  <div>
                    <a href="#!" className="small-text" onClick={() => navigate('/edittripexpenses2')}>Edit Trip Plan</a>
                  </div>
                  <div>
                    <a href="#!" className="small-text" onClick={() => navigate('/overviewtripexpenses2')}>Create/Edit Payment Request</a>
                  </div>
                  <div>
                    <a href=" " className="small-text" onClick={() => navigate('/createtripexpenses2')}>Create Trip Expenses</a>
                  </div>
                  <div>
                    <a href="#!" className="small-text" onClick={() => navigate('/edittripexpenses2')}>Edit Trip Expenses</a>
                  </div>
                  <div>
                    <a href="#!" className="small-text" onClick={() => navigate('/overviewtripexpenses2')}>Overview Trip Expenses</a>
                  </div>
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated {minutesAgo} mins ago</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
