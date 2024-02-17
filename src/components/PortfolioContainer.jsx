import { useState } from 'react';
import '../css/app.css';
import Navbar from './Navbar';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Resume from './Resume'
import Contact from './Contact';
import Footer from './Footer';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
        }

        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }

        if (currentPage === 'Resume') {
            return <Resume />;
        }
        
        if (currentPage === 'Contact') {
            return <Contact />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
          <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
          <main>{renderPage()}</main>
          <Footer/>
        </div>
      );
}