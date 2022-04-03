import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toastError, toastSucc } from "../../helpers/react-toast";
import { capitalize } from "../../utils/stringUtils";

const Program = () => {
  const params = useParams();

  const navigate = useNavigate();

  const [schedule, setSchedule] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const endpoints = [
    `http://localhost:5000/schedules/${params.scheduleid}`,
    `http://localhost:8080/schedule/${params.scheduleid}`,
  ];

  useEffect(() => {
    const fetchDetail = async () => {
      setLoading(true);
      setError(false);

      axios
        .all(endpoints.map((endpoint) => axios.get(endpoint)))
        .then(
          axios.spread(({ data: schedule }, { data: programs }) => {
            setSchedule(schedule);
            setPrograms(programs);
            setLoading(false);
          })
        )
        .catch((error) => {
          console.warn("ERROR", error);
          setLoading(false);
          setError(true);
        });
    };
    fetchDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onDelete = async () => {
    if (window.confirm("Emin misin?")) {
      try {
        await axios.delete(
          `http://localhost:5000/schedules/${params.scheduleid}`
        );
        toastSucc(`${capitalize(schedule.title)} Başarıyla Silindi !`);
        navigate("/weekly-schedule");
      } catch (error) {
        toastError("Silinirken bir hata oluştu !");
      }
    }
  };
  if (error) {
    return <div>Something went wrong...</div>;
  }
  console.log(schedule);
  return (
    <div>
      <h1>Program burada</h1>
      <button onClick={onDelete}>PROGRAMI SİL</button>
      {loading ? (
        <div>...</div>
      ) : (
        <>
          <p>{schedule.category}</p>
          <p>{schedule.description}</p>
          <p>{schedule.endDate}</p>
          <p>{schedule.id}</p>
          <p>{schedule.startingDate}</p>
          <p>{schedule.title}</p>
        </>
      )}
    </div>
  );
};

export default Program;
