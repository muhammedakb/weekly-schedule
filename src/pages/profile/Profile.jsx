import { auth } from "../../firebase-config";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import MessageBox from "../../components/Message-box/MessageBox";
import FormLayout from "../../layout/FormLayout";

const Profile = () => {
  const user = auth.currentUser;

  const defaultImgUrl =
    "https://via.placeholder.com/200x200?text=Image+Not+Available";
  const {
    handleSubmit,
    register,
    setError,
    formState,
    // formState: { errors },
  } = useForm();

  const { updateUserInfos } = useAuth();

  const [data, setData] = useState({
    displayName: user.displayName ?? "",
    photoURL: user.photoURL ?? "",
  });
  const [disable, setDisable] = useState(true);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    setDisable(false);
  };

  const onSubmit = async (data) => {
    try {
      await updateUserInfos(data.displayName, data.photoURL);
    } catch (error) {
      setError("", {
        type: "maual",
        message: error.message,
      });
    }
  };

  return (
    <FormLayout background={false}>
      <main id="profile-page">
        <article>
          <figure>
            <img
              src={user.photoURL ? user.photoURL : defaultImgUrl}
              alt="profileImage"
              onError={(event) => (event.target.src = defaultImgUrl)}
            />
          </figure>
        </article>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">Email</label>
          <input
            type="email"
            id="email"
            value={user.email}
            {...register("email", { required: false })}
            placeholder={user.email ? user.email : "Email adresinizi giriniz"}
            disabled
          />

          <label htmlFor="">Kullanıcı Adı veya Ad Soyad</label>
          <input
            type="text"
            id="displayName"
            value={data.displayName}
            {...register("displayName", {
              required: false,
              minLength: 2,
              onChange: handleChange,
            })}
            placeholder={
              user.displayName ? user.displayName : "Kullanıcı adınızı giriniz"
            }
          />

          <label htmlFor="">Fotoğraf Url</label>
          <input
            type="url"
            id="photoURL"
            value={data.photoURL}
            {...register("photoURL", {
              required: false,
              minLength: 10,
              onChange: handleChange,
            })}
            placeholder={
              user.photoURL ? user.photoURL : "Fotoğraf linkinizi giriniz"
            }
          />

          <button type="submit" disabled={disable ? true : false}>
            Güncelle
          </button>
        </form>

        {formState.isSubmitSuccessful && (
          <MessageBox type={"success"} message={"Güncelleme başarılı!"} />
        )}
      </main>
    </FormLayout>
  );
};

export default Profile;
