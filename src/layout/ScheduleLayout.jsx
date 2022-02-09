import { Link } from "react-router-dom";
import profileIcon from "../images/account_circle_white_24dp.svg";

const elements = [
  {
    icon: null,
    text: "Programlarım",
    path: "/schedules",
  },
  {
    icon: null,
    text: "Yeni Program",
    path: "/add-new",
  },
  {
    icon: null,
    text: "Program Analizi",
    path: "/analysis",
  },
  {
    icon: null,
    text: "Ayarlar",
    path: "/settings",
  },
  {
    icon: null,
    text: "Sorun/Öneri Bildir",
    path: "/report",
  },
];

const ScheduleLayout = () => {
  return (
    <section className="schedule-layout">
      <header className="schedule-layout-header">
        <span className="schedule-layout-header-logo">
          <b>logo</b>
        </span>
        Weekly Schedule
      </header>
      <ul className="schedule-layout-links">
        {elements.map(({ icon, text, path }, index) => (
          <Link to={path} key={index}>
            <li className="schedule-layout-links-item">
              <img
                src={icon ?? profileIcon}
                alt=""
                className="schedule-layout-links-icon"
              />
              <p className="schedule-layout-links-link">{text}</p>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default ScheduleLayout;
