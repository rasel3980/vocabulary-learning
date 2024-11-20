import { useNavigate } from 'react-router-dom';
import LessonCard from '../Components/LessonCard';

const StartLearning = () => {
    const navigate = useNavigate();
  const lessons = [
    { id: "1", lesson_no: 1, title: "Lesson 1" },
    { id: "2", lesson_no: 2, title: "Lesson 2" },
    { id: "3", lesson_no: 3, title: "Lesson 3" },
    { id: "4", lesson_no: 4, title: "Lesson 4" },
    { id: "5", lesson_no: 5, title: "Lesson 5" },
    { id: "6", lesson_no: 6, title: "Lesson 6" },
    { id: "7", lesson_no: 7, title: "Lesson 7" },
    { id: "8", lesson_no: 8, title: "Lesson 8" },
    { id: "9", lesson_no: 9, title: "Lesson 9" },
    { id: "10", lesson_no: 10, title: "Lesson 10" }
  ];
    return (
        <div>
       <header className="bg-blue-500 text-white w-full py-6 text-center">
        <h1 className="text-3xl font-bold">Let's Learn Spanish</h1>
      </header>
      <div className="card grid md:grid-cols-4 w-11/12 mx-auto gap-4 bg-white shadow-lg rounded-lg p-4">
      {
        lessons.map(lesson=> <LessonCard key={lesson.id} lesson={lesson}></LessonCard>)
      }
      </div>
      <div className="flex justify-between w-11/12 mx-auto my-10">
        <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/kJQjXAVEWt0?si=uiItGwaKVljdo1DA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/CFmfVQx6kP4?si=UO3M0NRUauBlyrwR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      <div className="text-center pb-20">
        <button onClick={()=>navigate('/tutorials')} className="btn bg-[#3498db] hover:bg-[#1abc9c] text-white font-bold text-xl">View More</button>
      </div>
    </div>
    );
};

export default StartLearning;