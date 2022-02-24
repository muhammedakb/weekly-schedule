import { useLocation } from "react-router-dom";
import LayoutItems from "../components/Schedule/LayoutItems";
import programsIcon from "../images/calendar_view_week_white_24dp.svg";
import newProgramIcon from "../images/add_circle_outline_white_24dp.svg";
import analysisIcon from "../images/analytics_white_24dp.svg";
import settingsIcon from "../images/settings_white_24dp.svg";
import reportIcon from "../images/report_problem_white_24dp.svg";

const ScheduleLayout = () => {
  // active nav element
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const elements = [
    {
      icon: programsIcon,
      className: splitLocation[2] === undefined ? "active" : "",
      text: "Programlarım",
      path: null,
    },
    {
      icon: newProgramIcon,
      className: splitLocation[2] === "add-new" ? "active" : "",
      text: "Yeni Program",
      path: "add-new",
    },
    {
      icon: analysisIcon,
      className: splitLocation[2] === "analysis" ? "active" : "",
      text: "Program Analizi",
      path: "analysis",
    },
    {
      icon: settingsIcon,
      className: splitLocation[2] === "settings" ? "active" : "",
      text: "Ayarlar",
      path: "settings",
    },
    {
      icon: reportIcon,
      className: splitLocation[2] === "report" ? "active" : "",
      text: "Sorun/Öneri Bildir",
      path: "report",
    },
  ];
  return (
    <section className="schedule-layout">
      <header className="schedule-layout-header">
        <span className="schedule-layout-header-logo">
          <b>logo</b>
        </span>
        Weekly Schedule
      </header>
      <ul className="schedule-layout-links">
        {elements.map(({ icon, className, text, path }, index) => (
          <LayoutItems
            path={path}
            className={className}
            icon={icon}
            text={text}
            key={index}
          />
        ))}
      </ul>
    </section>
  );
};

export default ScheduleLayout;
