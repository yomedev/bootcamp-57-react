import PropTypes from "prop-types";

import Header from "./Header";
import UserItem from "./UserItem/UserItem";

const UsersList = ({ users, title }) => {
  console.log(users);
  const renderArray = [];
  users.forEach((element) => {
    const jsxElement = <p key={element.id}>{element.name}</p>;
    renderArray.push(jsxElement);
  });
  const copyUsers = [...users];
  copyUsers.sort();
  return (
    <>
      {title && <Header title={title} />}
      <ul>
        {/* {[ <p>Lorem</p>, <p>ipsum</p>]} */}
        {renderArray}
        {users.map((user) => (
          <li key={user.id}>
            <UserItem {...user} />
          </li>
        ))}
      </ul>
    </>
  );
};

UsersList.propTypes = {
  title: PropTypes.string,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstName: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default UsersList;

// [1, 2, 3] => ["1", "2", "3"]
