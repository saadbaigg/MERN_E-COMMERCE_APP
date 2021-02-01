import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../components/Product/Product";
import { listProducts } from "../../redux/actions/productActions";
import styles from './SearchScreen.module.css'

const SearchScreen = ({ match }) => {
  const dispatch = useDispatch();
  const keyword = match.params.keyword;

  const productList = useSelector((state) => state.productList);
  const { products } = productList;
  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);
  return (
    <div>
      <div className={styles.productList}>
        {products.map((item) => (
          <Product
            id={item._id}
            img={item.image}
            name={item.name}
            rating={item.rating}
            numReviews={item.numReviews}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchScreen;
