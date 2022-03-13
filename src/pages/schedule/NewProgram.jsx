import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { getDate, dateCorrection } from "../../utils/dateUtils";
import { makeid } from "../../utils/userUtils";
const NewProgram = () => {
  const [isChecked, setIsChecked] = useState();
  const { register, handleSubmit, formState, reset } = useForm();

  const onSubmit = async (data) => {
    const id = makeid(20);
    const date = getDate();
    try {
      await axios.post("http://localhost:5000/schedules", {
        id: id,
        title: data.title,
        description: data.description,
        startingDate: date,
        endDate: data.endtime ? dateCorrection(data.endtime) : "",
        category: data.category,
      });
    } catch (error) {
      console.log("HATA", error);
    } finally {
      reset({
        title: "",
        description: "",
        isendtime: "",
        endtime: "",
        category: "#000000",
      });
    }
  };
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#000",
        color: "#fff",
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor="title">
        Başlık:
        <input
          type="text"
          id="title"
          {...register("title", { required: true, maxLength: 30 })}
        />
      </label>
      <label htmlFor="description">
        Açıklama:
        <input
          type="text"
          id="description"
          {...register("description", { required: true })}
        />
      </label>
      <label htmlFor="isendtime">
        Süreli mi: Evet
        <input
          type="radio"
          id="isendtime"
          {...register("isendtime", { required: true })}
          value={true}
          onChange={() => setIsChecked(true)}
        />
        Hayır
        <input
          type="radio"
          id="isendtime"
          {...register("isendtime", { required: true })}
          value={false}
          onChange={() => setIsChecked(false)}
        />
      </label>
      {isChecked ? (
        <label htmlFor="endtime">
          Bitiş tarihi:
          <input
            type="date"
            id="endtime"
            {...register("endtime", {
              required: true,
            })}
          />
        </label>
      ) : null}
      <label htmlFor="category">
        Kategori Rengi:
        <input
          type="color"
          id="category"
          {...register("category", { required: true })}
        />
      </label>
      <input type="submit" value="submit" disabled={!formState.isDirty} />
    </form>
  );
};

export default NewProgram;
