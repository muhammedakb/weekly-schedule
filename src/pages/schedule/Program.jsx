import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toastError, toastSucc } from "../../helpers/react-toast";

const Program = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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

  const onDelete = async () => {
    if (window.confirm("Emin misin?")) {
      try {
        await axios.delete(
          `http://localhost:5000/schedules/${params.scheduleid}`
        );
        toastSucc(`${schedule.title} Başarıyla Silindi !`);
        navigate("/weekly-schedule");
      } catch (error) {
        toastError("Silinirken bir hata oluştu !");
      }
    }
  };
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      <h1>Program burada</h1>
      <p>User {params.user}</p>
      <p>ID {params.scheduleid}</p>
      <p>Title {params.scheduletitle}</p>
      <p>------------------------------</p>
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
