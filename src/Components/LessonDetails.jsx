import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const LessonDetails = () => {
  const data = useLoaderData();
  console.log(data);

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

  return (
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
              <strong>Meaning:</strong> {details.meaning}
            </p>
            <p>
              <strong>Pronunciation:</strong> {details.pronunciation}
            </p>
            <p>
              <strong>Part of Speech:</strong> {details.part_of_speech}
            </p>
            <div className="card-actions justify-start">
              <button
                className="btn btn-primary"
                onClick={() => openModal(details)}
              >
                When to say
              </button>
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
              <button className="btn" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LessonDetails;
