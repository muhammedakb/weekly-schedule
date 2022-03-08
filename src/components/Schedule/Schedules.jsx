const Schedules = ({ category, title, description }) => {
  return (
    <div className="schedules" style={{ border: `2px solid ${category}` }}>
      <p className="schedules-title">{title}</p>
      <p className="schedules-description">{description}</p>
    </div>
  );
};

export default Schedules;
