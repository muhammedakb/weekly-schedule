import { memo } from "react";
import ScheduleItem from "./ScheduleItem";

const dummy = [
  {
    hour: "7 AM",
    todo: "Meditate",
    note: null,
    minute: 15,
    category: "lime",
  },
  {
    hour: "7 AM",
    todo: "Meditate",
    note: null,
    minute: 20,
    category: "red",
  },
  {
    hour: "7 AM",
    todo: "Meditate",
    note: null,
    minute: 25,
    category: "yellow",
  },
  {
    hour: "7 AM",
    todo: "Meditate",
    note: null,
    minute: 15,
    category: "blue",
  },
  {
    hour: "7 AM",
    todo: "Meditate",
    note: null,
    minute: 45,
    category: "pink",
  },
  {
    hour: "7 AM",
    todo: "Meditate",
    note: null,
    minute: 60,
    category: "orange",
  },
  {
    hour: "7 AM",
    todo: "Meditate",
    note: null,
    minute: 40,
    category: "limegreen",
  },
  {
    hour: "7 AM",
    todo: "Meditate",
    note: null,
    minute: 10,
    category: "aqua",
  },
  {
    hour: "7 AM",
    todo: "Meditate",
    note: null,
    minute: 1,
    category: "grey",
  },
];

const ScheduleDay = ({ day, isEmpty }) => {
  return (
    <main>
      <h1>{day}</h1>
      {/* TODO: create all ui template for all days */}
      {dummy.map((data, index) => (
        <ScheduleItem
          key={index}
          hour={data.hour}
          todo={data.todo}
          note={data.note}
          minute={data.minute}
          category={data.category}
        />
      ))}
    </main>
  );
};

export default memo(ScheduleDay);
