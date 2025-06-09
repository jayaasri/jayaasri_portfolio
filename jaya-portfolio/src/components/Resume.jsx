
import React, { useState, useEffect } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const pdfUrl = "/JayaaSri_Resume.pdf"; 

function Resume() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", "JayaaSri_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <section className="min-h-screen py-20 bg-gray-50 pt-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8 class1">Resume</h2>

          <div className="text-center mb-8">
            <button
              onClick={handleDownload}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors inline-flex items-center gap-2"
            >
              <AiOutlineDownload size={20} />
              Download Resume
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
