import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Message from "../../components/Message/Message";
import Loader from "../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  listProducts,
  deleteProduct,
  clearDeleteMsg
} from "../../redux/actions/productActions";
import styles from "./ProductsListScreen.module.css";

const ProductsListScreen = ({ history }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, error } = userLogin;

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

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listProducts());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, message]);

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <h1>Products</h1>
        <button>Add new product</button>
      </div>
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
      ) : null}
      {!products ? (
        <Loader width="50px" />
      ) : (
        <table>
          <tr className={styles.headingRow}>
            <th>ID</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>CATEGORY</th>
            <th>BRAND</th>
            <th></th>
            <th></th>
          </tr>
          {products.map((product) => (
            <tr className={styles.dataRow}>
              <td>{product._id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>{product.brand}</td>
              <td>
                <Link to={`/admin/product/${product._id}/edit`}>
                  <i className="fas fa-edit" style={{ color: "green" }}></i>
                </Link>
              </td>
              <td>
                <i
                  className="fas fa-trash"
                  onClick={() => dispatch(deleteProduct(product._id))}
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

export default ProductsListScreen;
