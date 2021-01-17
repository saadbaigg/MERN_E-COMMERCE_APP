import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Message from "../../components/Message/Message";
import Loader from "../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserDetails,
  updateUserProfile,
} from "../../redux/actions/userActions";
import { getMyOrders } from "../../redux/actions/orderActions";
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

  const updateProfile = useSelector((state) => state.updateProfile);
  const { success, updatedUser } = updateProfile;

  const orders = useSelector((state) => state.myOrders);
  const {
    success: myOrdersSuccess,
    myOrders,
    loading: myOrdersLoading,
  } = orders;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user.name) {
        dispatch(getUserDetails("profile"));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
    dispatch(getMyOrders());
  }, [dispatch, history, userInfo, user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserProfile({ id: user._id, name, email, password }));
  };
  console.log(orders);
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>Update Profile</h1>
        {error ? <Message text={error} variant="error" /> : null}
        {success ? (
          <Message text="Profile Updated Successfully" variant="success" />
        ) : null}
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
        </form>
      </div>
      {/* my orders */}
      <div className={styles.myOrdersContainer}>
        <h1>My orders</h1>
        {myOrdersLoading  ? (
          <Loader />
        ) : (
          orders.myOrders.map((item) => (
            <table>
              <tr className={styles.headingRow}>
                <th>ID</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>DELIVERED</th>
              </tr>
              <tr className={styles.dataRow}>
                <td>{item._id}</td>
                <td>{item.createdAt}</td>
                <td>{item.totalPrice}</td>
                <td>
                  {item.isPaid ? (
                    <i className="fas fa-check" style={{ color: "green" }}></i>
                  ) : (
                    <i className="fas fa-times" style={{ color: "red" }}></i>
                  )}
                </td>
                <td>
                  {item.isDelivered ? (
                    <i className="fas fa-check" style={{ color: "green" }}></i>
                  ) : (
                    <i className="fas fa-times" style={{ color: "red" }}></i>
                  )}
                </td>
              </tr>
            </table>
          ))
        )}
      </div>
    </div>
  );
};

export default UpdateProfileScreen;
