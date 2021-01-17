import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Message from "../../components/Message/Message";
import Loader from "../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
// import { getUserDetails } from "../../redux/actions/userActions";
import styles from "./UserListScreen.module.css";

const UserListScreen = () => {
  //   const dispatch = useDispatch();

  //   const userLogin = useSelector((state) => state.userLogin);
  //   const { userInfo, loading, error } = userLogin;

  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  //   useEffect(() => {
  //     if (userInfo) {
  //       history.push("/");
  //     }
  //   }, [history, userInfo]);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     dispatch(login(email, password));
  //   };

  return (
    <div className={styles.container}>
      <h1>Users</h1>
      <table>
        <tr className={styles.headingRow}>
          <th>ID</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>ADMIN</th>
          <th></th>
          <th></th>
        </tr>
        <tr className={styles.dataRow}>
          <td>1389p5y13861871639</td>
          <td>Admin User</td>
          <td>admin@gmail.com</td>
          <td>
            {/* {item.isPaid ? ( */}
            <i className="fas fa-check" style={{ color: "green" }}></i>
            {/* ) : ( */}
            {/* <i className="fas fa-times" style={{ color: "red" }}></i> */}
            {/* )} */}
          </td>
          <td><i className="fas fa-edit" style={{ color: "green" }}></i></td>
          <td><i className="fas fa-trash" style={{ color: "red" }}></i></td>
        </tr>
      </table>
    </div>
  );
};

export default UserListScreen;
