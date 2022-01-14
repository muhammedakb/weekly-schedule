const MessageBox = ({ type, message }) => {
  return (
    <main id="message-box">
      {type === "error" ? (
        <p className="error">
          {message ?? "Hangi mail adresi ile giriş yapmak istiyorsunuz 🤔"}
        </p>
      ) : (
        <p className="success">{message}</p>
      )}
    </main>
  );
};

export default MessageBox;
