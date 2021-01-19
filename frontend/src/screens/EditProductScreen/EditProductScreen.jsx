import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Message from "../../components/Message/Message";
import Loader from "../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import styles from "./EditProductScreen.module.css";
import { listProductDetails, updateProduct } from "../../redux/actions/productActions";

const EditProductScreen = ({ history, match }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;

  const updatedProductState = useSelector((state) => state.updateProduct);
  const { updatedProduct, success, loading:updateLoading, error:updateError } = updatedProductState;

  useEffect(() => {
    if(!product.name || product._id !== match.params.id) {
      dispatch(listProductDetails(match.params.id))
    } else {
      setName(product.name)
      setPrice(product.price)
      setImage(product.image)
      setBrand(product.brand)
      setCountInStock(product.countInStock)
      setCategory(product.category)
      setDescription(product.description)
    }
  }, [dispatch, history, match.params.id, product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct({
      _id: product._id,
      name,
      price,
      image,
      brand,
      countInStock,
      category,
      description
    }))
  };

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        {/* {loading ? (
          <Loader width="30px" />
        ) : editSuccess ? (
          <Message variant="success" text="User Updated Successfully" />
        ) : editError ? (
          <Message variant="error"text="Something's wrong" />
        ) : null} */}
        { updateLoading ? <Loader /> : null }
        { success ? <Message variant="success" text="Product Updated Successfully" /> : null }
        { updateError ? <Message variant="error" text="Something's wrong" /> : null }
        {loading ? (
          <div>
            <Loader />
          </div> 
         ) : (
        <div className={styles.formContainer}>
          <h1>Edit Product</h1>
          <form>
            <div className={styles.field}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={name}
                autoComplete="off"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.field}>
              <label>Price</label>
              <input
                type="text"
                name="price"
                value={price}
                autoComplete="off"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className={styles.field}>
              <label>Image</label>
              <input
                type="text"
                name="image"
                value={image}
                autoComplete="off"
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div className={styles.field}>
              <label>Brand</label>
              <input
                type="text"
                name="brand"
                value={brand}
                autoComplete="off"
                onChange={(e) => setBrand(e.target.value)}
              />
            </div>
            <div className={styles.field}>
              <label>Count in Stock</label>
              <input
                type="text"
                name="countInStock"
                value={countInStock}
                autoComplete="off"
                onChange={(e) => setCountInStock(e.target.value)}
              />
            </div>
            <div className={styles.field}>
              <label>Category</label>
              <input
                type="text"
                name="category"
                value={category}
                autoComplete="off"
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className={styles.field}>
              <label>Description</label>
              <input
                type="text"
                name="description"
                value={description}
                autoComplete="off"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>Update</button>
          </form>
        </div>
        )}
      </div>
    </div>
  );
};

export default EditProductScreen;
