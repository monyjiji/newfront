import React from 'react';
import Layout from "../../components/Layout";
import "../../css/admdashboard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUserMd , faUserPlus } from '@fortawesome/free-solid-svg-icons';

function AdmDashboard() {
  return (
    <Layout>
    
     
      <main>
        

        <div className="welcomeadmin">
          <h3>Welcome admin</h3>
          <p>Here you can find the latest updates of this week</p>
         
       
        
        <div className="overviewdash">
          
          <div className="admdashbox">
            <div className="icon"style={{ color: '#0077b6', fontSize: '24px' }}>
          <FontAwesomeIcon icon={faUserMd } />
          </div>
          
            <div className="text">
              <p>New Doctors</p>
              <p style={{ color: '#0077b6'}}><strong>5+</strong></p>
              <p>today</p>
            </div>
          </div>



          <div className="admdashbox">
          <div className="icon"style={{ color: '#0077b6', fontSize: '24px' }}>
          <FontAwesomeIcon icon={ faUserPlus } />
          </div>
          
            <div className="text">
              <p>New Users</p>
              <p style={{ color: '#0077b6'}}><strong>5+</strong></p>
              <p>today</p>
            </div>
          </div>



          <div className="admdashbox">
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
       </main>
      
       </Layout>
  );
}

export default AdmDashboard;