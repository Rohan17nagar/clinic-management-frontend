import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className='home-container'>
      {/* Navigation Bar */}
      <nav className='navbar'>
        <div className='nav-content'>
          <div className='logo'>
            <span className='logo-icon'>🏥</span>
            <span className='logo-text'>ClinicCare</span>
          </div>
          <ul className='nav-links'>
            <li>
              <a href='#' className='nav-link active'>
                Home
              </a>
            </li>
            <li>
              <a href='#about' className='nav-link'>
                About
              </a>
            </li>
            <li>
              <a href='#services' className='nav-link'>
                Services
              </a>
            </li>
          </ul>
          <button className='login-btn' onClick={() => navigate("/login")}>
            Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className='hero-section'>
        <div className='hero-content'>
          <h1 className='hero-title'>
            Welcome to ClinicCare Management System
          </h1>
          <p className='hero-subtitle'>
            Streamline your clinic operations with our comprehensive patient
            management solution
          </p>
          <button className='cta-button' onClick={() => navigate("/patients")}>
            View Patients
          </button>
        </div>
        <div className='hero-illustration'>
          <div className='illustration-box'>📊</div>
        </div>
      </section>

      {/* About Section */}
      <section className='about-section' id='about'>
        <h2>About Our System</h2>
        <div className='about-grid'>
          <div className='about-card'>
            <div className='card-icon'>👥</div>
            <h3>Patient Management</h3>
            <p>
              Efficiently manage patient records, appointments, and medical
              history all in one place
            </p>
          </div>
          <div className='about-card'>
            <div className='card-icon'>📋</div>
            <h3>Easy Records</h3>
            <p>
              Access comprehensive patient information with an intuitive and
              user-friendly interface
            </p>
          </div>
          <div className='about-card'>
            <div className='card-icon'>🔒</div>
            <h3>Secure & Reliable</h3>
            <p>
              Your data is protected with enterprise-grade security and regular
              backups
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className='services-section' id='services'>
        <h2>Our Services</h2>
        <div className='services-grid'>
          <div className='service-item'>
            <h4>Patient Dashboard</h4>
            <p>
              View and manage all your patients in a beautiful dashboard with
              real-time data
            </p>
            <a onClick={() => navigate("/patients")} className='service-link'>
              Explore →
            </a>
          </div>
          <div className='service-item'>
            <h4>Quick Access</h4>
            <p>
              One-click access to patient records, medical history, and contact
              information
            </p>
          </div>
          <div className='service-item'>
            <h4>Analytics</h4>
            <p>
              Track patient statistics and generate insights for better clinic
              management
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='footer'>
        <p>&copy; 2026 ClinicCare. All rights reserved.</p>
      </footer>
    </div>
  );
}
