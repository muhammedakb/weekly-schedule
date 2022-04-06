const ScheduleItem = ({ hour, todo, note, minute }) => {
  return (
    <>
      <div className="schedule-item-hour">{hour}</div>
      <div className="schedule-item-content">
        <span>{todo}</span>
        {note ? <span>{note}</span> : null}
        <span>{`${minute} minute${minute > 1 ? "s" : ""}`}</span>
      </div>
    </>
  );
};

export default ScheduleItem;
