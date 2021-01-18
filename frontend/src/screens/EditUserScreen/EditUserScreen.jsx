import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Message from "../../components/Message/Message";
import Loader from "../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../redux/actions/userActions";
import styles from "./EditUserScreen.module.css";

const EditUserScreen = ({ history, match }) => {
  const dispatch = useDispatch()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);


  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, loading, error } = userLogin;

  const userProfile = useSelector(state => state.userProfile)
  const { user, loading:profileLoading, error:profileError } = userProfile


  useEffect(() => {
    if(!user.name || user._id !== match.params.id) {
      dispatch(getUserDetails(match.params.id))
    } else {
      setName(user.name)
      setEmail(user.email)
      setIsAdmin(user.isAdmin)
    }
  }, [dispatch, history, match, user])

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>Edit user</h1>
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
          <div className={styles.checkField}>
            <input
              type="checkbox"
              name="check"
              value={isAdmin}
              onChange={(e) => setIsAdmin(e.target.value)}
            />
            <label>Make Admin</label>
          </div>
          <button onClick={handleSubmit}>Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditUserScreen;
