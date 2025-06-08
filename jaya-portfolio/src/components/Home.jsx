import React from 'react';
function Home() {
    const [skillIndex, setSkillIndex] = React.useState(0);
    const skills = [
        "IT Professional",
        "Flutter Developer",
        "Machine Learning Enthusiast", 
        "Full Stack Developer",
        "Tech Explorer"
    ];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setSkillIndex((prev) => (prev + 1) % skills.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    try {
        return (
            <section data-name="home" data-file="components/Home.js" className="min-h-screen gradient-bg flex items-center justify-center text-white pt-16">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="fade-in text-center md:text-left">
                            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                                Hi there, I am <span className="text-yellow-300">Jayaa Sri K</span>
                            </h1>
                            
                            <div className="text-xl md:text-2xl mb-8 h-10 flex items-center justify-center md:justify-start">
                                <span className="typing-animation gradient-text bg-gradient-to-r from-yellow-300 to-pink-300">
                                    {skills[skillIndex]}
                                </span>
                            </div>
                            
                            <p className="text-lg mb-8 leading-relaxed">
                               An aspiring IT professional with a passion for transforming ideas into impactful digital experiences. I'm currently honing my skills across various technologies, constantly exploring, learning, and creating. I enjoy bringing innovation to life through thoughtful design, clean code, and a curious mindset.
                            </p>
                            
                            <div className="flex justify-center md:justify-start flex-wrap gap-6">
  <div className="text-center">
    <i className="fas fa-phone text-yellow-300 mb-2 text-xl"></i>
    <p className="text-sm">9843858348</p>
  </div>
  <div className="text-center">
    <i className="fas fa-envelope text-yellow-300 mb-2 text-xl"></i>
    <p className="text-sm">jayaasri2003@gmail.com</p>
  </div>
  <div className="text-center">
    <a href="https://www.instagram.com/jayaasri__kumaran" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-instagram text-yellow-300 mb-2 text-xl"></i>
    </a>
    <p className="text-sm">Instagram</p>
  </div>
  <div className="text-center">
    <a href="https://www.linkedin.com/in/jayaa-sri-a3999a225/" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin text-yellow-300 mb-2 text-xl"></i>
    </a>
    <p className="text-sm">LinkedIn</p>
  </div>
  <div className="text-center">
    <a href="https://github.com/jayaasri" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-github text-yellow-300 mb-2 text-xl"></i>
    </a>
    <p className="text-sm">GitHub</p>
  </div>
</div>

                        </div>

                        <div className="flex justify-center fade-in">
                            <div className="relative">
                                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-yellow-300 shadow-2xl floating">
                                    <img 
                                        src="/1749210789116.jpeg" 
                                        alt="Jayaa Sri K"
                                        className="transform scale-110"
                                    />
                                </div>
                                <div className="absolute -bottom-2 -right-2 bg-yellow-300 text-purple-800 p-3 rounded-full">
                                    <i className="fas fa-code text-xl"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Home component error:', error);
        reportError(error);
    }
}
export default Home;