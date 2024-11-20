import { NavLink,} from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
const LessonCard = ({lesson}) => {
  const {title,lesson_no} = lesson;

  useEffect(() => {
    Aos.init({
      duration: 1000,  
      easing: 'ease-in-out', 
      once: true,
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
