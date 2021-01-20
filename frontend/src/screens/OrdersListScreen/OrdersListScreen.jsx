import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Message from "../../components/Message/Message";
import Loader from "../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  listProducts,
  deleteProduct,
  clearDeleteMsg,
  createProduct,
} from "../../redux/actions/productActions";
import { CREATE_PRODUCT_RESET } from "../../redux/types/productTypes";
import styles from "./OrdersListScreen.module.css";

const OrdersListScreen = ({ history }) => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const {
    products,
    loading: productLoading,
    error: productError,
  } = productList;

  const deleteProductState = useSelector((state) => state.deleteProduct);
  const {
    message,
    loading: deleteLoading,
    error: deleteError,
  } = deleteProductState;

  const createdProduct = useSelector((state) => state.createProduct);
  const {
    product: newProduct,
    success: createSuccess,
    loading: createLoading,
    error: createError,
  } = createdProduct;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch({ type: CREATE_PRODUCT_RESET });

    if (!userInfo.isAdmin) {
      history.push("/login");
    }

    if (createSuccess) {
      history.push(`/admin/product/${newProduct._id}/edit`);
    } else {
      dispatch(listProducts());
    }
  }, [dispatch, history, userInfo, message, createSuccess, newProduct]);

  const addNewProduct = (e) => {
    e.preventDefault();
    dispatch(createProduct());
  };
  
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

      {/* {!products ? (
        <Loader width="50px" />
      ) : ( */}
        <table>
          <tr className={styles.headingRow}>
            <th>ID</th>
            <th>DATE</th>
            <th>TOTAL</th>
            <th>PAID</th>
            <th>DELIVERED</th>
            <th></th>
          </tr>
          {/* {products.map((product) => ( */}
            <tr className={styles.dataRow}>
              <td>13513587391bb</td>
              <td>2-2-1350</td>
              <td>$1350</td>
              <td><i className="fas fa-check" style={{ color: "green" }}></i></td>
              <td><i className="fas fa-times" style={{ color: "red" }}></i></td>
              <td>
                {/* <Link to={`/admin/product/${product._id}/edit`}> */}
                  <i className="fas fa-edit" style={{ color: "green" }}></i>
                {/* </Link> */}
              </td>
            </tr>
          {/* // ))} */}
        </table>
      {/* )} */}
    </div>
  );
};

export default OrdersListScreen;
