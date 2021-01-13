import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Message from "../../components/Message/Message";
import Loader from "../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../redux/actions/userActions";
import styles from "./UpdateProfileScreen.module.css";

const UpdateProfileScreen = ({ history }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userProfile = useSelector((state) => state.userProfile);
  const { user, loading, error } = userProfile;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
console.log(userProfile)


  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if(!user.name) {
        dispatch(getUserDetails('profile'))
      } else {
        setName(user.name)
        setEmail(user.email)
      }
    }
  }, [dispatch, history, userInfo, user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(login(email, password));
  };
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>Update Profile</h1>
        {error ? <Message text={error} /> : null}
        {loading ? <Loader /> : null}
        <form>
        <div className={styles.field}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Enter Name"
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.field}>
            <label>Email Address</label>
            <input
              type="text"
              name="email"
              value={email}
              placeholder="Enter Email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.field}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleSubmit}>Update</button>
          {/* <span>
            Don't have an account? <Link to="/register">Register</Link>
          </span> */}
        </form>
      </div>
    </div>
  );
};

export default UpdateProfileScreen;