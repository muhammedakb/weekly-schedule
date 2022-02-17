import LayoutItems from "../components/Schedule/LayoutItems";

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
          <LayoutItems path={path} icon={icon} text={text} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default ScheduleLayout;
