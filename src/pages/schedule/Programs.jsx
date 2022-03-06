import { useEffect, useState } from "react";
import axios from "axios";

const Programs = () => {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getSchedules = async () => {
      setLoading(true);
      setError(false);
      try {
        const { data } = await axios.get("http://localhost:5000/schedules");
        setSchedules(data);
      } catch (error) {
        setError(true);
        console.warn(error);
      }
      setLoading(false);
    };
    getSchedules();
  }, [setSchedules]);

  console.log(schedules);
  if (error) {
    return <div>Operation is failed...</div>;
  }
  return (
    <main>
      {loading ? (
        <div>LOADİNG ...</div>
      ) : (
        schedules.map((schedule, index) => (
          <div
            key={schedule.id ?? index}
            style={{ border: `1px solid ${schedule.category}` }}
          >
            <h6>{schedule.title}</h6>
            <p>{schedule.description}</p>
          </div>
        ))
      )}
    </main>
  );
};

export default Programs;
