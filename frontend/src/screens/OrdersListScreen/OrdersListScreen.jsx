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

    if (!userInfo.isAdmin) {
      history.push("/login");
    } else {
      dispatch(getAllOrders());
    }
  }, [dispatch, history, userInfo]);

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <h1>Orders</h1>
      </div>

      {/* {createLoading ? <Loader width="15px" /> : null}
      {deleteLoading ? (
        <Loader width="30px" />
      ) : message ? (
        <Message
          variant="success"
          text={message.message}
          onClick={() => dispatch(clearDeleteMsg())}
        />
      ) : null}
      {deleteError ? (
        <Message
          variant="success"
          text="Something's wrong"
          onClick={() => dispatch(clearDeleteMsg())}
        />
      ) : null} */}

      {ordersLoading ? (
        <Loader width="50px" />
      ) : (
        <table>
          <tr className={styles.headingRow}>
            <th>ID</th>
            <th>DATE</th>
            <th>TOTAL</th>
            <th>PAID</th>
            <th>DELIVERED</th>
            <th></th>
          </tr>
          {allOrders.map((order) => (
            <tr className={styles.dataRow}>
              <td>{order._id}</td>
              <td>{order.createdAt}</td>
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
                {/* <Link to={`/admin/product/${product._id}/edit`}> */}
                <i className="fas fa-edit" style={{ color: "green" }}></i>
                {/* </Link> */}
              </td>
            </tr>
          ))}
        </table>
      )}
    </div>
  );
};

export default OrdersListScreen;
