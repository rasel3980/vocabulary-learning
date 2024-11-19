import React from "react";
import { useLoaderData } from "react-router-dom";

const LessonDetails = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((details) => (
        <div key={details.id} className="card bg-base-100 shadow-xl hover:shadow-2xl">
          <div className="card-body">
            <h2 className="card-title justify-center">{details.word}</h2>
            <p><strong>Meaning:</strong> {details.meaning}</p>
            <p>Pronunciation: {details.pronunciation}</p>
            <p><strong>Part of Speech:</strong> {details.part_of_speech}</p>
            <div className="card-actions justify-start">
              <button className="btn btn-primary">When to say</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LessonDetails;
