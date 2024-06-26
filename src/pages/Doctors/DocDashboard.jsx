import React from 'react';
import Layout from "../../components/Layout";
import "../../css/docdashboard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCalendarCheck, faUserPlus } from '@fortawesome/free-solid-svg-icons';

function DocDashboard() {
  return (
    <Layout>
    <div>
     
      <main>
        

        <div className="welcome">
          <h3>Welcome doctor Joe</h3>
         
       
        
        <div className="overviewcountiner">
          
          <div className="dashbox">
            <div className="icon"style={{ color: '#0077b6', fontSize: '24px' }}>
          <FontAwesomeIcon icon={faUserPlus} />
          </div>
          
            <div className="text">
              <p>New Patients</p>
              <p style={{ color: '#0077b6'}}><strong>5+</strong></p>
              <p>today</p>
            </div>
          </div>



          <div className="dashbox">
          <div className="icon"style={{ color: '#0077b6', fontSize: '24px' }}>
          <FontAwesomeIcon icon={ faCalendarCheck} />
          </div>
          
            <div className="text">
              <p>Appointments</p>
              <p style={{ color: '#0077b6'}}><strong>5+</strong></p>
              <p>today</p>
            </div>
          </div>


          <div className="dashbox">
          <div className="icon"style={{ color: '#0077b6', fontSize: '24px' }}>
          <FontAwesomeIcon icon={faBell} />
          </div>
            <div className="text">
              <p>Notifications</p>
              <p style={{ color: '#0077b6'}}><strong>5+</strong></p>
              <p>today</p>
            </div>
          </div>

        </div>
       </div> 
       <div className="Apptoday">
        <h3>Today's appointments</h3>
        <div className="appscontainer">
        <div className="appsdetails">
          <p><strong>Sanae Ajrir</strong></p>
          <p>24 Jui 2024 (11:00pm)</p>
          
        </div>
        <div className="button-container">
          <button>Statue</button>
        </div>
      </div>

      <div className="appscontainer">
        <div className="appsdetails">
          <p><strong>Sanae Ajrir</strong></p>
          <p>24 Jui 2024 (11:00pm)</p>
          
        </div>
        <div className="button-container">
          <button>Statue</button>
        </div>
      </div>



       </div>
      </main>
    </div>
    </Layout>
  );
}

export default DocDashboard;