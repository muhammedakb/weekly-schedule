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
    <form className="add-new-form" onSubmit={handleSubmit(onSubmit)}>
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
        Süreli mi:
        <div className="add-new-form-radio">
          Evet
          <input
            type="radio"
            id="isendtime"
            {...register("isendtime", { required: true })}
            value={true}
            onChange={() => setIsChecked(true)}
          />
        </div>
        <div className="add-new-form-radio">
          Hayır
          <input
            type="radio"
            id="isendtime"
            {...register("isendtime", { required: true })}
            value={false}
            onChange={() => setIsChecked(false)}
          />
        </div>
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
      <input
        type="submit"
        value="yeni program oluştur"
        disabled={!formState.isDirty}
      />
    </form>
  );
};

export default NewProgram;
