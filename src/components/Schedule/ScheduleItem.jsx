const ScheduleItem = ({ hour, todo, note, minute, category }) => {
  return (
    <div className="schedule-item" style={{ backgroundColor: category }}>
      <div className="schedule-item-hour">{hour}</div>
      <div className="schedule-item-content">
        <span className="schedule-item-content-todo">{todo}</span>
        {note ? (
          <span className="schedule-item-content-note">{note}</span>
        ) : null}
        <span className="schedule-item-content-time">{`${minute} minute${
          minute > 1 ? "s" : ""
        }`}</span>
      </div>
    </div>
  );
};

export default ScheduleItem;
