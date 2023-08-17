import defaultAvatar from "../images/user.png";

const UserItem = ({
  firstName,
  lastName,
  email,
  image = defaultAvatar,
  isOnline,
}) => {
  return (
    <>
      <h3>
        {firstName} {lastName}
      </h3>
      <p>{email}</p>
      <img src={image || defaultAvatar} alt={firstName} />
      <p>{isOnline ? "Online" : "Offline"}</p>
    </>
  );
};

export default UserItem;
