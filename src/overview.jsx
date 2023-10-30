import React from 'react';
import './LoginForm.css';

const Overview = () => {
  return (
    <div className='abc'>
      <div className="container">
        <div className="row"> {/* <-- Use Bootstrap 'row' class */}
          <div className="col-md-4"> {/* <-- Wrap the card with column class */}
            <div className="card">
            <img src="https://www.marketing91.com/wp-content/uploads/2015/07/246.jpg" className="card-img-top card-img-custom" alt="..."  />
              <div className="card-body">
                <h5 className="card-title">Service</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This card has supporting text below as a natural lead-in to additional content.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div className="col-md-4"> {/* <-- Wrap the card with column class */}
            <div className="card">
            <img src="https://media.istockphoto.com/id/952625346/photo/businessmen-shaking-hands-after-meeting-in-a-cafe.jpg?s=612x612&w=0&k=20&c=dpfUuBGPdTi4b4gbBg9kkpg8KauUSzGLpVByJsa5_KY=" class="card-img-top card-img-custom" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Sales</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div className="col-md-4"> {/* <-- Wrap the card with column class */}
            <div className="card">
            <img src="https://img.freepik.com/premium-photo/hands-businessman-virtual-innovation-business-process-problem-solving-workflow-monitoring-evaluation-as-well-as-quality-control-are-all-part-operations-management_27634-829.jpg" class="card-img-top card-img-custom" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Operations</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
        </div> {/* <-- Close the 'row' div */}
      </div>
    </div>
  );
};

export default Overview;
