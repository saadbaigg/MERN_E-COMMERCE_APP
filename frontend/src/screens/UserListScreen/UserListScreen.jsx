import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Message from "../../components/Message/Message";
import Loader from "../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAllUsers } from "../../redux/actions/userActions";
import styles from "./UserListScreen.module.css";

const UserListScreen = ({ history }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, loading, error } = userLogin;

  const allUsers = useSelector((state) => state.allUsers);
  const { users, loading: usersLoading, error: usersError } = allUsers;

  const deleteUserUpdate = useSelector((state) => state.deleteUser);
  const { message, loading: deleteLoading, error: deleteError } = deleteUserUpdate;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(getAllUsers());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, message]);

  return (
    <div className={styles.container}>
      <h1>Users</h1>
      {deleteLoading ? (
        <Loader width="30px" />
      ) : message ? (
        <Message variant="success" text={message.message} />
      ) : null}
      {!users ? (
        <Loader width="50px" />
      ) : (
        <table>
          <tr className={styles.headingRow}>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ADMIN</th>
            <th></th>
            <th></th>
          </tr>
          {users.map((user) => (
            <tr className={styles.dataRow}>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {user.isAdmin ? (
                  <i className="fas fa-check" style={{ color: "green" }}></i>
                ) : (
                  <i className="fas fa-times" style={{ color: "red" }}></i>
                )}
              </td>
              <td>
                <i className="fas fa-edit" style={{ color: "green" }}></i>
              </td>
              <td>
                <i
                  className="fas fa-trash"
                  onClick={() => dispatch(deleteUser(user._id))}
                  style={{ color: "red" }}
                ></i>
              </td>
            </tr>
          ))}
        </table>
      )}
    </div>
  );
};

export default UserListScreen;
