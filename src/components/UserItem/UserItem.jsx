import defaultAvatar from "../../images/user.png";
import styles from "./UserItem.module.css";
import clsx from "clsx";
import { Wrapper, Status, Link, Link2 } from "./UsersItem.styles";
import { BsFill0CircleFill } from "react-icons/bs";

console.log(styles);

const UserItem = ({
  firstName,
  lastName,
  email,
  image = defaultAvatar,
  isOnline,
  phone
}) => {
  const classNames = `${styles.base} ${
    isOnline ? styles.online : styles.offline
  }`;
  console.log(classNames);
  return (
    <Wrapper>
      <h3>
        {firstName} {lastName}
      </h3>
      <Link href="/" alt={email} className={styles.link}>
        {email}
      </Link>
      <br />
      <Link2 href="/" alt={phone}>
        {phone}
      </Link2>
      <img src={image || defaultAvatar} alt={firstName} />
      {/* <p className={classNames}>{isOnline ? "Online" : "Offline"}</p> */}
      <Status status={isOnline ? 'online' : 'offline'}>{isOnline ? "Online" : "Offline"}</Status>
      {/* <p className={clsx(styles.base, {
        [styles.online]: isOnline,
        [styles.offline]: !isOnline
      })}>{isOnline ? "Online" : "Offline"}</p> */}
      
      
    </Wrapper>
  );
};

export default UserItem;
