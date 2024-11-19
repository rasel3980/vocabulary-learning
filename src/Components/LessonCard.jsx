import { NavLink,} from "react-router-dom";

const LessonCard = ({lesson}) => {
  const {title,lesson_no} = lesson;
  return (
    <NavLink to={`/lesson/${lesson_no}`}>
        <div className="card bg-primary text-primary-content ">
      <div className="card-body">
        <h2 className="card-title justify-center text-3xl font-bold">{title}</h2>
      </div>
    </div>
    </NavLink>
  );
};

export default LessonCard;
