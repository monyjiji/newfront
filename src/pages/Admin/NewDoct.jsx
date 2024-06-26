import React from 'react';
import '../../css/newdoc.css';
import Layout from "../../components/Layout";


const NewDoct = () => {
    return (
        <Layout>
        <div className="newdoc-list-container">
            <h2>New Doctors</h2>
            <table className="newdoctable">
                <thead>
                    <tr>
                        
                        <th>Name</th>
                        <th>Speciality</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        
                        <td>John Doe</td>
                        <td>Dentist</td>
                        <td>john.doe@example.com</td>
                        
                        <td>
                            <div className="Actbuttons">
                            <button>Accept</button>
                            <button>Reject</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </Layout>
    );
};

export default NewDoct;