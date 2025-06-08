import React from 'react';
function Navbar({ activeSection, setActiveSection }) {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleNavClick = (section) => {
        setActiveSection(section);
        setIsOpen(false);
    };

    try {
        return (
            <nav data-name="navbar" data-file="components/Navbar.js" className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-sm shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                    <img 
                    src="/favicon.png" 
                    alt="Jsri Logo" 
                    className="h-14 w-14 rounded-full object-cover"
                    />
                        <div data-name="logo" className="text-2xl font-bold class1">
                            Jayaa Sri's Personal Portfolio
                        </div>
      

                        <div className="hidden md:flex space-x-8">
                            <button 
                                onClick={() => handleNavClick('home')} 
                                className={`transition-colors ${activeSection === 'home' ? 'text-purple-600 font-semibold' : 'text-gray-700 hover:text-purple-600'}`}
                            >
                                Home
                            </button>
                            <button 
                                onClick={() => handleNavClick('about')} 
                                className={`transition-colors ${activeSection === 'about' ? 'text-purple-600 font-semibold' : 'text-gray-700 hover:text-purple-600'}`}
                            >
                                About
                            </button>
                            <button 
                                onClick={() => handleNavClick('projects')} 
                                className={`transition-colors ${activeSection === 'projects' ? 'text-purple-600 font-semibold' : 'text-gray-700 hover:text-purple-600'}`}
                            >
                                Projects
                            </button>
                            <button 
                                onClick={() => handleNavClick('hobbies')} 
                                className={`transition-colors ${activeSection === 'hobbies' ? 'text-purple-600 font-semibold' : 'text-gray-700 hover:text-purple-600'}`}
                            >
                                Hobbies
                            </button>
                            <button 
                                onClick={() => handleNavClick('resume')} 
                                className={`transition-colors ${activeSection === 'resume' ? 'text-purple-600 font-semibold' : 'text-gray-700 hover:text-purple-600'}`}
                            >
                                Resume
                            </button>
                        </div>

                        <button 
                            className="md:hidden"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                        </button>
                    </div>

                    {isOpen && (
                        <div className="md:hidden pb-4">
                            <button onClick={() => handleNavClick('home')} className="block w-full text-left py-2 text-gray-700">
                                Home
                            </button>
                            <button onClick={() => handleNavClick('about')} className="block w-full text-left py-2 text-gray-700">
                                About
                            </button>
                            <button onClick={() => handleNavClick('projects')} className="block w-full text-left py-2 text-gray-700">
                                Projects
                            </button>
                            <button onClick={() => handleNavClick('hobbies')} className="block w-full text-left py-2 text-gray-700">
                                Hobbies
                            </button>
                            <button onClick={() => handleNavClick('resume')} className="block w-full text-left py-2 text-gray-700">
                                Resume
                            </button>
                        </div>
                    )}
                </div>
            </nav>
        );
    } catch (error) {
        console.error('Navbar component error:', error);
        reportError(error);
    }
}
export default Navbar;