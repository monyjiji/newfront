import '../../css/profilpat.css';
import Image from'../../images/téléchargement.png';




function Profile() {
  return (
   
      
      <main>
       
        <div className="containersections">
          <div className="sectionpat">
            <div className="profile">
              <img src={Image} alt="Doctor" />
              <h3>John</h3>
              {/* <div className="rating">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9734;</span>
              </div> */}
              
            </div>

            <div className="access-info">
              <h3>Contact Information</h3>
              <p>Phone: +1234567890</p>
              <p>Email: doctor@example.com</p>
            </div>
            <div className="editbutton">
           <button>Edit profile</button> 

          </div>



          </div>
          <div className="sectionp2">
            <div className="description">
              <h3>Patient Informations</h3>
            </div>

            <div className="details">
              <div className="question">
                <p>First name</p>
                <p>Last name</p>
                <p>Age</p>
                <p>Gender</p>
                <p>Cin</p>
                <p>Blood type</p>
                <p>Allergies</p>
              </div>
              <div className="answer">
                <p>John</p>
                <p>Smith</p>
                <p>38</p>
                <p>Male</p>
                <p>L235798</p>
                <p>O+</p>
                <p>Dust,Avocado</p>
              </div>
              <div className="space"></div>
            </div>
          </div>
        </div>
        
      </main>
    
  );
}

export default Profile;