import { Link } from "react-router-dom";
import profileIcon from "../../images/account_circle_white_24dp.svg";

const LayoutItems = ({ path, icon, text }) => {
  return (
    <Link to={path ?? ""}>
      <li className="schedule-layout-links-item">
        <img
          src={icon ?? profileIcon}
          alt=""
          className="schedule-layout-links-icon"
        />
        <p className="schedule-layout-links-link">{text}</p>
      </li>
    </Link>
  );
};

export default LayoutItems;
