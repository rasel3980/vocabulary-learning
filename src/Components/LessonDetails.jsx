import React, { useEffect, useState } from "react";
import { NavLink, useLoaderData, useNavigate } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'
const LessonDetails = () => {
  const data = useLoaderData();
  console.log(data);

  useEffect(() => {
    // Initialize AOS after the component is mounted
    Aos.init({
      duration: 1000,  // Set the animation duration (in ms)
      easing: 'ease-in-out', // Set the easing function
      once: true, // Whether the animation should happen only once (when scrolling)
    });
  }, []); 

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedWord, setSelectedWord] = useState(null);

  const openModal = (modalDetails) => {
    setSelectedWord(modalDetails);  
    setModalOpen(true); 
  };

  const closeModal = () => {
    setModalOpen(false);          
    setSelectedWord(null);         
  };
   if(!data){
    return <div>Loading....</div>
   }
  return (
    <div>
        <header>
            <h1 className="text-center text-3xl text-red-600 italic underline font-bold">Lesson NO: {data[0].lesson_no}</h1>
        </header>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((details) => (
        <div
          key={details.id}
          className="card bg-base-100 shadow-xl hover:shadow-2xl"
        >
          <div className="card-body">
            <h2 className="card-title justify-center font-extrabold text-3xl">
              {details.word}
            </h2>
            <p>
              <strong>Meaning:</strong> <span className="italic">{details.meaning}</span> 
            </p>
            <p>
              <strong>Pronunciation:</strong> {details.pronunciation}
            </p>
            <p>
              <strong>Part of Speech:</strong> {details.part_of_speech}
            </p>
            <div className="card-actions justify-start items-center">
              <button
                className="btn font-bold hover:bg-[#1abc9c] bg-[#3498db] text-white"
                onClick={() => openModal(details)}
              >
                When To Say
              </button>
              <NavLink to="/lesson">
              <button className="px-2 py-1 hover:bg-[#3498db] font-bold bg-[#1abc9c] rounded-lg text-gray-50 ml-7">Back to Lesson</button>
              </NavLink>
            </div>
          </div>
        </div>
      ))}
      {modalOpen && selectedWord && (
        <div
          id="my_modal_5"
          className="modal modal-bottom sm:modal-middle modal-open"
        >
          <div className="modal-box">
            <h3 className="font-bold text-4xl text-center">{selectedWord.word}</h3>
            <p className="py-2 text-lg">
              <strong>Meaning:</strong> {selectedWord.meaning}
            </p>
            <p className="py-2 text-lg">
              <strong>When to Say:</strong> {selectedWord.when_to_say}
            </p>
            <p className="py-2 text-lg">
              <strong>Example:</strong> {selectedWord.example}
            </p>
            <div className="modal-action">
              <button className="btn bg-[#3498db]" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default LessonDetails;
