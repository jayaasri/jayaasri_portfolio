import React from "react";

function Footer() {
    return (
        <footer data-name="footer" className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-8">
                    <div data-name="footer-about">
                        <h4 className="text-xl font-bold mb-4">Jayaa Sri's Portfolio</h4>
                        
                    </div>
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
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 Jayaa Sri. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;