import React from 'react';

function Hobbies() {
    const [selectedHobby, setSelectedHobby] = React.useState(null);

    const hobbies = [
        { 
            name: "Drawing", 
            icon: "fa-palette", 
            description: "I love drawing because it lets my imagination live on paper.",
            images: [
                "1000100404.jpg",
                "1000100409.jpg",
                
                "1000100405.jpg",
                "1000100406.jpg",
                "1000100407.jpg",
                "1000100416.jpg",
                "1000100417.jpg",
            ]
        },
        { 
            name: "Art Journaling", 
            icon: "fa-book", 
            description: "A creative way to document my outings — through illustrations, ticket stubs, and reflections, all bound in a journal",
            images: [
                "1000100387.jpg",
                "1000100389.jpg",
                "1000100390.jpg",
                "1000100392.jpg",
                "1000100381.jpg",
                
            ]
        },
        { 
            name: "Creative Digital Editing", 
            icon: "fa-edit", 
            description: "Where snapshots turn into storyboards — I love enhancing memories with bold, creative edits",
            images: [
                "1000100246.jpg",
                "1000100247.jpg",
                "1000100248.jpg",
                "1000100249.jpg",
                "1000100250.jpg",
                "1000100251.jpg",
                "1000100252.jpg"
            ]
        },
        {
            name: "Travel Adventures",
            icon: "fa-plane",
            description: "Explore my Travel Journal, a simple and elegant web application that captures memorable trips.",
            link: "https://jaysri-travel-journal.vercel.app",
            images: [
                
            ]
        }
    ];

    const handleHobbyClick = (hobby) => {
        setSelectedHobby(hobby);
    };

    const handleBackClick = () => {
        setSelectedHobby(null);
    };

    if (selectedHobby) {
        return (
            <section data-name="hobby-detail" className="min-h-screen py-20 bg-gray-50 pt-24">
                <div className="max-w-6xl mx-auto px-6">
                    <button 
                        onClick={handleBackClick}
                        className="mb-6 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors inline-flex items-center"
                    >
                        <i className="fas fa-arrow-left mr-2"></i>
                        Back to Hobbies
                    </button>
                    
                    <h2 className="text-4xl font-bold text-center mb-8 class1">{selectedHobby.name}</h2>
                    <p className="text-center text-gray-600 mb-6 text-lg">{selectedHobby.description}</p>
                    {selectedHobby.name === "Creative Digital Editing" && (
                            <div className="text-center mb-10">
                                <a 
                                    href="https://in.pinterest.com/jayaasri2003/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-purple-600 text-lg font-medium hover:text-purple-800"
                                >
                                    <i className="fab fa-pinterest fa-lg"></i> 
                        Click to view my Pinterest profile
                            
                                </a>
                            </div>
                        )}

                                        {selectedHobby.link && (
                                            <p className="text-center">
                                        <a 
                    href="https://jaysri-travel-journal.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block max-w-md mx-auto rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                    <img 
                        src="travel.png" 
                        alt="Travel Journal Preview" 
                        className="w-full h-48 object-cover"
                    />
                    <div className="bg-white p-4 text-center">
                        <h3 className="text-lg font-semibold text-purple-700">View My Travel Journal</h3>
                        <p className="text-sm text-gray-600">Click Here to explore my project about travel memories.</p>
                    </div>
                    </a>
                    </p>
                    )}
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                        {selectedHobby.images.map((image, index) => (
                            <div key={index} className="bg-white rounded-lg overflow-hidden card-shadow hover-scale">
                            <img 
                                src={image} 
                                alt={`${selectedHobby.name} ${index + 1}`}
                                className="w-full max-h-[550px] object-contain rounded-md"

                            />
                        </div>

                        ))}
                    </div>
                </div>
            </section>
        );
    }

    try {
        return (
            <section data-name="hobbies" data-file="components/Hobbies.js" className="min-h-screen py-20 bg-white pt-24">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16 class1">My Hobbies & Interests</h2>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        {hobbies.map((hobby, index) => (
                            <div 
                                key={index} 
                                onClick={() => handleHobbyClick(hobby)}
                                className="bg-gray-50 p-6 rounded-lg card-shadow hover-scale text-center fade-in cursor-pointer transform transition-all duration-300 hover:bg-purple-50"
                            >
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className={`fas ${hobby.icon} text-2xl text-purple-600`}></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-gray-800">{hobby.name}</h3>
                                <p className="text-gray-600 leading-relaxed mb-4">{hobby.description}</p>
                                <div className="text-purple-600 font-medium">
                                    Check It Out <i className="fas fa-arrow-right ml-1"></i>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center fade-in">
                        <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-8 rounded-lg">
                            <h3 className="text-2xl font-semibold mb-4 class1">Beyond Technology</h3>
                            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                                While I'm passionate about technology and coding, I believe in maintaining a balanced lifestyle. 
                                My hobbies help me stay creative, inspired, and bring fresh perspectives to my technical work.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hobbies component error:', error);
    }
}

export default Hobbies;
