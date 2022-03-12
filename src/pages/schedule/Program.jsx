import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Program = () => {
  const params = useParams();
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  console.log(params);
  // TODO: XHR => params.scheduleid => scheduleDetail.map()
  useEffect(() => {
    const fetchDetail = async () => {
      setLoading(true);
      setError(false);
      try {
        const { data } = await axios.get(
          `http://localhost:5000/schedules/${params.scheduleid}`
        );
        setSchedule(data);
      } catch (error) {
        setError(error);
        console.warn(error);
      }
      setLoading(false);
    };
    fetchDetail();
  }, [params.scheduleid]);
  console.log(schedule);
  console.log(loading, error);
  return (
    <div>
      <h1>Program burada</h1>
      <p>User {params.user}</p>
      <p>ID {params.scheduleid}</p>
      <p>Title {params.scheduletitle}</p>
    </div>
  );
};

export default Program;
