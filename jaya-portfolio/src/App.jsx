import React from 'react';
import ReactDOM from 'react-dom/client'; 
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Resume from './components/Resume.jsx';
import Home from './components/Home.jsx';
import Hobbies from './components/Hobbies.jsx';
import Footer from './components/Footer.jsx';

function App() {
    const [activeSection, setActiveSection] = React.useState('home');

    const renderSection = () => {
        switch(activeSection) {
            case 'home':
                return <Home />;
            case 'about':
                return <About />;
            case 'projects':
                return <Projects />;
            case 'hobbies':
                return <Hobbies />;
            case 'resume':
                return <Resume />;
            
            default:
                return <Home />;
            
        }
    };

    return (
        <div data-name="app" data-file="app.js">
            <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
            {renderSection()}
            <Footer />
        </div>

    );
}
export default App;  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


