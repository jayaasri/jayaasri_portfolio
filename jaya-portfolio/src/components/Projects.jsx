function Projects() {
    const projects = [
        {
            title: "Assistance Technology for Blind, Deaf and Dumb",
            description: "Developed a machine learning project focused on creating assistive technologies to improve accessibility and communication for individuals who are blind, deaf, and nonverbal.",
            tech: ["HTML", "CSS", "JavaScript", "Python(Flask)"],
            github: "https://github.com/jayaasri/Assistive_Technology.git"
        },
        {
            title: "Food Calorie Detection",
            description: "Developed a system for detecting and analyzing food calorie content, aiding users in making informed dietary choices.",
            tech: ["HTML", "CSS", "JavaScript", "Python(Flask)"],
            github: "https://github.com/jayaasri/Calorie_estimation.git"
        },
        {
            title: "Agriculture Management System",
            description: "Developed an agriculture management system employing HTML5, CSS3, PHP, and MySQL, with a primary aim to eradicate middlemen in agriculture.",
            tech: ["HTML5", "CSS3", "PHP", "MySQL"],
            github: "https://github.com/"
        },
        {
            title: "Toxicity Analyser on Cosmetics",
            description: "Used machine learning techniques to create a toxicity analyzer for cosmetics, enabling the assessment and prediction of potentially harmful ingredients in cosmetic products.",
            tech: ["Machine Learning"],
            github: "https://github.com/jayaasri/Cosmetic_Analysis.git"
        },
        {
            title: "Diagnosis of Eye Diseases Using Deep Learning and XAI",
            description: "Developed a deep learning model for the early detection of common eye diseases (diabetic retinopathy, cataract, and glaucoma). Integrated explainable AI techniques to provide transparent insights.",
            tech: ["Deep Learning", "XAI", "SHAP", "Grad-CAM", "LIME"],
            github: "https://github.com/jayaasri/Eye_Diseases_Detection.git"
        },
        {
        title: "Expense Tracker Mobile Application",
        description: "A Flutter-based tool for managing expenses and income with CRUD functionalities using shared preferences. Users can add, view, edit, and delete expense/income entries conveniently.",
        tech: ["Flutter"],
        github: "https://github.com/jayaasri/expense-tracker.git"
    },


    ];

    try {
        return (
            <section data-name="projects" data-file="components/Projects.js" className="min-h-screen py-20 bg-white pt-24">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16 class1">My Projects</h2>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
  <div key={index} className="bg-gray-50 p-6 rounded-lg card-shadow hover-scale fade-in">
    <h3 className="text-xl font-semibold mb-3 text-purple-600">{project.title}</h3>
    <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
    
    <div className="flex flex-wrap gap-2">
      {project.tech.map((tech, techIndex) => (
        <span key={techIndex} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">
          {tech}
        </span>
      ))}
    </div>
   <div className="mt-4 flex justify-center">
    <a 
      href={project.github} 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-block mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
    >
      <i className="fab fa-github mr-2"></i> GitHub
    </a>
  </div>
  </div>
))}

                    </div>

                    <div className="mt-12 fade-in">
                        <h3 className="text-2xl font-semibold mb-6 text-center">Achievements</h3>
                        <div className="bg-gray-50 p-6 rounded-lg card-shadow">
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <i className="fas fa-trophy text-yellow-500 mt-1 mr-3"></i>
                                    <span>Won first prize in Web design contest</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-certificate text-blue-500 mt-1 mr-3"></i>
                                    <span>Participated in IITM Build Club workshop</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-vr-cardboard text-green-500 mt-1 mr-3"></i>
                                    <span>Participated in intensive workshop on Augmented Reality and Virtual Reality</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-file-alt text-purple-500 mt-1 mr-3"></i>
                                    <span>Presented research paper on 'Decoding Cosmetic Ingredients' at ICRTET 2024, Nanda Engineering College, Erode</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Projects component error:', error);
        reportError(error);
    }
}
export default Projects;