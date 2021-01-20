import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Message from "../../components/Message/Message";
import Loader from "../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../redux/actions/orderActions";
import styles from "./OrdersListScreen.module.css";

const OrdersListScreen = ({ history }) => {
  const dispatch = useDispatch();

  const orders = useSelector((state) => state.allOrders);
  const { allOrders, loading: ordersLoading, error: ordersError } = orders;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      if (!userInfo && !userInfo.isAdmin) {
        history.push("/login");
      } else {
        dispatch(getAllOrders());
      }
    }
  }, [dispatch, history, userInfo]);

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <h1>Orders</h1>
      </div>
      {ordersError && <Message variant="error" text="Something's Wrong" />}
      {ordersLoading ? (
        <Loader width="50px" />
      ) : !allOrders ? null : (
        <table>
          <tr className={styles.headingRow}>
            <th>ID</th>
            <th>DATE</th>
            <th>ORDERED BY</th>
            <th>TOTAL</th>
            <th>PAID</th>
            <th>DELIVERED</th>
            <th></th>
          </tr>
          {allOrders.map((order) => (
            <tr className={styles.dataRow}>
              <td>{order._id}</td>
              <td>{order.createdAt.substring(0, 10)}</td>
              <td>{order.user && order.user.name}</td>
              <td>${order.totalPrice}</td>
              <td>
                {order.isPaid ? (
                  <i className="fas fa-check" style={{ color: "green" }}></i>
                ) : (
                  <i className="fas fa-times" style={{ color: "red" }}></i>
                )}
              </td>
              <td>
                {order.isDelivered ? (
                  <i className="fas fa-check" style={{ color: "green" }}></i>
                ) : (
                  <i className="fas fa-times" style={{ color: "red" }}></i>
                )}
              </td>
              <td>
                <Link to={`/orders/${order._id}`}>
                <button className={styles.detailsBtn}>details</button>
                </Link>
              </td>
            </tr>
          ))}
        </table>
      )}
    </div>
  );
};

export default OrdersListScreen;
