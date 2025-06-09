function Resume() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/Jayaa Sri Resume.pdf';
        link.download = 'https://jayaasri-portfolio.vercel.app/JayaaSri_K_Resume.pdf';
        link.click();
    };

    try {
        return (
            <section data-name="resume" data-file="components/Resume.js" className="min-h-screen py-20 bg-gray-50 pt-24">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-8 class1">Resume</h2>
                    
                    <div className="text-center mb-8">
                        <button 
                            onClick={handleDownload}
                            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors inline-flex items-center hover-scale"
                        >
                            <i className="fas fa-download mr-2"></i>
                            Download Resume
                        </button>
                    </div>

                    <div className="bg-white p-8 rounded-lg card-shadow">
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-bold mb-2">JAYAA SRI K</h1>
    
                            <p className="text-gray-600">Email: jayaasri2003@gmail.com | Phone: 9843858348</p>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-purple-600">SUMMARY</h3>
                                <div className="border-l-4 border-purple-200 pl-4">
                                    <p className="text-gray-700">Motivated and passionate IT professional seeking an opportunity to apply my skills, embrace new challenges, and contribute effectively through continuous learning and innovation.</p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-purple-600">EDUCATION</h3>
                                <div className="border-l-4 border-purple-200 pl-4 space-y-3">
                                    <div>
                                        <h4 className="font-semibold">Bachelor of Technology - Information Technology</h4>
                                        <p className="text-gray-600">Thiagarajar College of Engineering, Madurai | CGPA: 8.27/10 | Nov 2021 - May 2025</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Higher Secondary Education</h4>
                                        <p className="text-gray-600">Srivi Lions Matriculation Higher Secondary School</p>
                                        <p className="text-gray-600">HSE (XII): 93.04% | SSLC (X): 92.6% | June 2013 - May 2021</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-purple-600">SKILLS</h3>
                                <div className="border-l-4 border-purple-200 pl-4">
                                    <p><strong>Programming:</strong> Java, HTML & CSS, SQL, Flutter, Machine Learning, MySQL</p>

                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-purple-600">PERSONAL DETAILS</h3>
                                <div className="border-l-4 border-purple-200 pl-4">
                                    <p><strong>Father's Name:</strong> Kumaran K</p>
                                    <p><strong>Date of Birth:</strong> 22/08/2003</p>
                                    <p><strong>Gender:</strong> Female | <strong>Status:</strong> Unmarried</p>
                                    <p><strong>Nationality:</strong> Indian</p>
                                    <p><strong>Languages Known:</strong> English, Tamil, Hindi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Resume component error:', error);
        reportError(error);
    }
}
export default Resume;
