
import '../../css/PatHome.css';
import { Link } from 'react-router-dom';
import Image1 from '../../images/dentiste.png';
import Layout from "../../components/Layout";;

function PatHome() {
    return(
      <Layout>
        <div className="Home">
            <div className="thecountainer">
           
        <div className="topcontainer">
          <div class="titlewithlink">
          <h4>Today's appointments</h4>
          <div className="seeall">
        <p><Link to="/patient/docprofile" className="see">See All </Link></p>
        </div>
        </div>
          
          <div className="appcountainer">
        <div className="appoidetails">
          <p className="par"><strong>Sanae Ajrir</strong></p>
          <p>24 Jui 2024 (11:00pm)</p>
          
        </div>
        <div className="btn-container">
          <button>Statue</button>
        </div>
      </div>
      

      <div className="appcountainer">
        <div className="appoidetails">
          <p className="par"><strong>Sanae Ajrir</strong></p>
          <p>24 Jui 2024 (11:00pm)</p>
          
        </div>
        <div className="btn-container">
          <button>Statue</button>
        </div>
        </div>


</div>
        
        </div>
     
      

       
        <div className="bottomcontainer">
        <h4 className="explore">Explore</h4>
        <p>find experienced doctors across all specialties</p>
        <div className="specialties-container">
        <div className="arrow">
        <span>&#60;</span>
        </div>
            <div className="imgwithtit">
            <img src={Image1} alt=" smth"/>
            <h4>Dentist</h4>
            </div>
            <div className="imgwithtit">
            <img src={Image1} alt=" smth"/>
            <h4>Dentist</h4>
            </div>
            <div className="imgwithtit">
            <img src={Image1} alt=" smth"/>
            <h4>Dentist</h4>
            </div>

            <div className="arrow">
      
      <span>&#62;</span> 
    </div>

           
            
        </div>
       
        </div>
       


























































        <div className="floatingcontainer ">
          
          <p>You have a doctor in your mind?</p>
          <p>You can go find him here.</p>
          <button className="addapp">Book Now</button>
        </div>
      </div>

      </Layout>

);
}

export default PatHome;