import { NavLink,} from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
const LessonCard = ({lesson}) => {
  const {title,lesson_no} = lesson;

  useEffect(() => {
    // Initialize AOS after the component is mounted
    Aos.init({
      duration: 1000,  // Set the animation duration (in ms)
      easing: 'ease-in-out', // Set the easing function
      once: true, // Whether the animation should happen only once (when scrolling)
    });
  }, []);  
  return (
    <NavLink to={`/lesson/${lesson_no}`}>
        <div data-aos="fade-up" className="card bg-[#1abc9c] text-primary-content ">
      <div className="card-body">
        <h2 className="card-title justify-center text-3xl font-bold">{title}</h2>
      </div>
    </div>
    </NavLink>
  );
};

export default LessonCard;
