import { useEffect, useState } from "react";
import axios from "axios";
import Schedules from "../../components/Schedule/Schedules";
import Loading from "../../components/Loading";

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

  if (error) {
    return <div>Operation is failed...</div>;
  }
  return (
    <main className="programs">
      {loading ? (
        <Loading />
      ) : (
        schedules.map((schedule, index) => (
          <Schedules
            key={schedule.id ?? index}
            id={schedule.id}
            category={schedule.category}
            title={schedule.title}
            description={schedule.description}
          />
        ))
      )}
    </main>
  );
};

export default Programs;
