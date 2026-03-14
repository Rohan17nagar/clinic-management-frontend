import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Patients.css";

export default function Patients() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      setLoading(true);
      setError(null);
      // Replace with your actual API endpoint
      const response = await axios.get(
        "https://clinic-management-api-0htp.onrender.com/api/v1/patients",
      );
      console.log("Patients data:", response.data);

      // Handle both array and object responses
      const patientsData = Array.isArray(response.data)
        ? response.data
        : response.data.data || [];
      setPatients(patientsData);
    } catch (err) {
      console.error("Error fetching patients:", err);
      setError(
        "Failed to fetch patients. Please check your API configuration.",
      );
      // For demo purposes, show sample data if API fails
      setPatients([
        {
          id: 1,
          name: "John Doe",
          dob: "1990-05-15",
          age: 33,
          gender: "Male",
          phone: "+1-234-567-8900",
          address: "123 Main St, New York, NY 10001",
          createdAt: "2025-01-10",
        },
        {
          id: 2,
          name: "Jane Smith",
          dob: "1995-08-22",
          age: 30,
          gender: "Female",
          phone: "+1-234-567-8901",
          address: "456 Oak Ave, Boston, MA 02101",
          createdAt: "2025-01-12",
        },
        {
          id: 3,
          name: "Mike Johnson",
          dob: "1988-03-10",
          age: 37,
          gender: "Male",
          phone: "+1-234-567-8902",
          address: "789 Pine Rd, Chicago, IL 60601",
          createdAt: "2025-01-15",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const calculateAge = (dob) => {
    if (!dob) return "N/A";
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className='patients-container'>
      {/* Navigation Bar */}
      <nav className='navbar'>
        <div className='nav-content'>
          <div className='logo'>
            <span className='logo-icon'>🏥</span>
            <span className='logo-text'>ClinicCare</span>
          </div>
          <ul className='nav-links'>
            <li>
              <a href='/' className='nav-link'>
                Home
              </a>
            </li>
            <li>
              <a href='#' className='nav-link active'>
                Patients
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className='content-wrapper'>
        <div className='patients-header'>
          <h1>Patients Dashboard</h1>
          <p className='subtitle'>Manage and view all patient records</p>
        </div>

        {error && (
          <div className='info-message demo-message'>
            ℹ️ {error} Showing sample data for demonstration.
          </div>
        )}

        {loading ? (
          <div className='loading'>
            <div className='spinner'></div>
            <p>Loading patients...</p>
          </div>
        ) : (
          <div className='table-wrapper'>
            {patients.length === 0 ? (
              <div className='no-data'>
                <p>No patients found</p>
              </div>
            ) : (
              <table className='patients-table'>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Date of Birth</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Created At</th>
                  </tr>
                </thead>
                <tbody>
                  {patients.map((patient, index) => (
                    <tr key={patient.id || index}>
                      <td>{index + 1}</td>
                      <td className='name-cell'>{patient.name}</td>
                      <td>{formatDate(patient.dob)}</td>
                      <td>{patient.age || calculateAge(patient.dob)}</td>
                      <td>
                        <span
                          className={`gender-badge gender-${patient.gender?.toLowerCase()}`}
                        >
                          {patient.gender}
                        </span>
                      </td>
                      <td className='phone-cell'>{patient.phone}</td>
                      <td className='address-cell'>{patient.address}</td>
                      <td>{formatDate(patient.createdAt)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        <div className='table-footer'>
          <p>
            Total Patients: <strong>{patients.length}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
