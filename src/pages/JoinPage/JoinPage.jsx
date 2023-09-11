import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerThunk } from "../../redux/users/usersThunk";
import { toast } from "react-toastify";
import { token } from "../../services/usersServices";

const year = new Date().getFullYear();
const initialState = {
  email: "",
  name: "",
  password: "",
};

export const JoinPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState(initialState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { value, name } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
    dispatch(registerThunk(values))
      .unwrap()
      .then((data) => {
        console.log(data);
        token.set(data.token)
        navigate("/", { replace: true });
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <>
      <form
        action="#"
        className="mt-5 mx-auto p-0"
        style={{ width: "450px" }}
        onSubmit={handleSubmit}
      >
        <h1 className="h3 mb-3 fw-normal">Please Sign In</h1>

        <div className="form-floating my-4">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="username"
            value={values.email}
            onChange={handleChange}
            className="form-control"
          />
          <label htmlFor="email">Email address</label>
        </div>

        <div className="form-floating my-4">
          <input
            id="first_name"
            name="name"
            type="first_name"
            autoComplete="off"
            value={values.name}
            onChange={handleChange}
            className="form-control"
          />
          <label htmlFor="first_name">Name</label>
        </div>

        <div className="form-floating my-4">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={values.password}
            onChange={handleChange}
            className="form-control"
          />
          <label htmlFor="password">Password</label>
        </div>

        <Link to="/login" className="d-block my-4">
          Already has account?
        </Link>

        <button
          className="w-100 mt-2 btn btn-lg btn-primary"
          disabled={isLoading}
          type="submit"
        >
          {isLoading ? "Loading ...." : "Sign In"}
        </button>
        <p className="mt-5 mb-3 text-muted">© {year}</p>
      </form>
    </>
  );
};
