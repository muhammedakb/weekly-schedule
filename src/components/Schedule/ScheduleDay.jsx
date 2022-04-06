import { memo } from "react";
import ScheduleItem from "./ScheduleItem";

const dummy = [
  {
    hour: "7 AM",
    todo: "Meditate",
    note: null,
    minute: 15,
  },
  {
    hour: "7 AM",
    todo: "Meditate",
    note: null,
    minute: 20,
  },
  {
    hour: "7 AM",
    todo: "Meditate",
    note: null,
    minute: 25,
  },
  {
    hour: "7 AM",
    todo: "Meditate",
    note: null,
    minute: 15,
  },
  {
    hour: "7 AM",
    todo: "Meditate",
    note: null,
    minute: 45,
  },
  {
    hour: "7 AM",
    todo: "Meditate",
    note: null,
    minute: 60,
  },
  {
    hour: "7 AM",
    todo: "Meditate",
    note: null,
    minute: 40,
  },
  {
    hour: "7 AM",
    todo: "Meditate",
    note: null,
    minute: 10,
  },
  {
    hour: "7 AM",
    todo: "Meditate",
    note: null,
    minute: 1,
  },
];

const ScheduleDay = ({ day, isEmpty }) => {
  console.log("rendered hudey");
  return (
    <main>
      <h1>{day}</h1>
      {dummy.map((data, index) => (
        <ScheduleItem
          key={index}
          hour={data.hour}
          todo={data.todo}
          note={data.note}
          minute={data.minute}
        />
      ))}
    </main>
  );
};

export default memo(ScheduleDay);
