import Link from "./components/Link/Link";
import UsersList from "./components/UsersList";
import usersJson from "./data/users.json";
import Button from "./components/Button/Button";
import {AiFillCloseCircle} from 'react-icons/ai'

const title = null;

// title && "No header" =>
// title || 'No header' => 'No header'

// const usersJson = [];

const App = () => {
  console.log("App");

  return (
    <>
      <Button alert>Close <AiFillCloseCircle /></Button>
      <Button primary>Open</Button>
      <Link alt="home" href="/" text="Home" />
      <br />
      <Link alt="about" href="/about" text="About" />
      {!!usersJson.length && <UsersList title={title} users={usersJson} />}
    </>
  );
};

// Header({ title: title})

// function sum(a, b) {
//   return a + getRandomNumber(b)
// }

// function getRandomNumber(num) {
//   return num
// }

// sum(4, 12)

// Link({ alt: "home", href: "/", tetx: "Home" });
export default App;
