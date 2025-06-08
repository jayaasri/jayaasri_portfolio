function About() {
    const technicalSkills = [
  { name: "Java", icon: "devicon-java-plain" },
  { name: "HTML & CSS", icon: "devicon-html5-plain" },
  { name: "Flutter", icon: "devicon-flutter-plain" },
   { name: "Machine Learning", icon: "fas fa-microchip ai" },
  { name: "JavaScript", icon: "devicon-javascript-plain" },
  { name: "MySQL", icon: "devicon-mysql-plain" }
];

    const certificates = [
        "NPTEL course on Problem Solving using C",
        "SQL course by Sololearn", 
        "Applied Data Science with Python by MOOC"
    ];

    try {
        return (
            <section data-name="about" data-file="components/About.js" className="min-h-screen py-20 bg-gray-50 pt-24">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16 class1">About Me</h2>
                    
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="fade-in">
                            <h3 className="text-2xl font-semibold mb-6">Education</h3>
                            <div className="bg-white p-6 rounded-lg card-shadow space-y-6">
                                <div>
                                    <h4 className="text-xl font-semibold text-purple-600 mb-2">
                                        Bachelor of Technology - Information Technology
                                    </h4>
                                    <p className="text-gray-600 mb-1">Thiagarajar College of Engineering , Madurai</p>
                                    <p className="text-lg font-semibold text-green-600">CGPA: 8.27/10</p>
                                    <p className="text-sm text-gray-500">Nov 2021 - May 2025</p>
                                </div>
                                
                                <div className="border-t pt-4">
                                    <h5 className="font-semibold mb-2">Higher Secondary Education</h5>
                                    <p className=" text-gray-600">Srivi Lions Matriculation Higher Secondary School</p>
                                    <p className="text-lg font-semibold text-green-600">HSE (XII): 93.04% </p>
                                     <p className=" text-lg font-semibold text-green-600">HSE (X): 92.6% </p>
                                    
                                    <p className="text-sm text-gray-500">June 2013 - May 2021</p>
                                </div>
                            </div>
                        </div>

                        <div className="fade-in">
                            <h3 className="text-2xl font-semibold mb-6">Skills & Certificates</h3>
                            <div className="bg-white p-6 rounded-lg card-shadow">
<h4 className="font-semibold mb-3">Technical Skills</h4>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
  {technicalSkills.map((skill, index) => (
    <div
      key={index}
      className="flex flex-col items-center justify-center p-4 bg-purple-50 rounded-xl shadow-md hover:shadow-lg transition-shadow"
    >
      <i className={`${skill.icon} text-5xl text-purple-700 mb-3`}></i>
      <span className="text-sm font-medium text-purple-900">{skill.name}</span>
    </div>
  ))}
</div>



                                
                                <h4 className="font-semibold mb-3">Certificates</h4>
                                <ul className="space-y-2">
                                    {certificates.map((cert, index) => (
                                        <li key={index} className="flex items-start">
                                            <i className="fas fa-certificate text-yellow-500 mt-1 mr-2"></i>
                                            <span className="text-gray-700 text-sm">{cert}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 fade-in">
                        <h3 className="text-2xl font-semibold mb-6">Internship Experience</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-lg card-shadow">
                                <h4 className="text-xl font-semibold text-purple-600 mb-2">Flutter Developer</h4>
                                <p className="text-gray-600 mb-2">Tech Mango - Madurai</p>
                                <p className="text-sm text-gray-500 mb-3">Dec 2022 - Jan 2023</p>
                                <p className="text-gray-700">Gained hands-on experience in Mobile application development using Flutter.</p>
                            </div>
                            
                            <div className="bg-white p-6 rounded-lg card-shadow">
                                <h4 className="text-xl font-semibold text-purple-600 mb-2">Inlab Intern</h4>
                                <p className="text-gray-600 mb-2">Thiagarajar College of Engineering, Madurai</p>
                                <p className="text-sm text-gray-500 mb-3">Jan 2022 - Feb 2022</p>
                                <p className="text-gray-700">Built a machine learning model to detect and estimate food calorie content from images.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('About component error:', error);
        reportError(error);
    }
    
}
export default About;
