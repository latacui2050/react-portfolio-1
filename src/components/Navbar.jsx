export default function Navbar({currentPage, handlePageChange}) {
    return (
        <nav className="navbar">
            <h1>Wenmo Cui</h1>
            <div className="navbarLinks">
                <a 
                    href="#AboutMe"
                    onClick={() => handlePageChange('AboutMe')}
                    className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
                >
                    about me
                </a>
                <a 
                    href="#Portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                    portfolio
                </a>
                <a 
                    href="#Resume"
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                    resume
                </a>
                <a 
                    href="#Contact"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                    contact
                </a>
            </div>
        </nav>
    )
}

