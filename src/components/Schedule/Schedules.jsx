import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { slugify } from "../../utils/user";

const Schedules = ({ id, category, title, description }) => {
  const { user } = useAuth();
  return (
    <Link
      to={`${slugify(user.displayName)}/${id}/${slugify(title)}`}
      className="schedules"
      style={{ border: `2px solid ${category}` }}
    >
      <p className="schedules-title">{title}</p>
      <p className="schedules-description">{description}</p>
    </Link>
  );
};

export default Schedules;
