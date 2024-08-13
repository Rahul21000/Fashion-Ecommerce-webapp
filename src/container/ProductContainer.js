import productdata from "../api/productData.json";
import ProductList from "../components/ProductList";
import ProductItem from "../components/ProductItem";
import { addToCart } from "../feature/CartSlice";
import { useDispatch } from "react-redux";
const ProductContainer = () => {
  const dispatch = useDispatch();
  return (
    <ProductList title={"shopping app"}>
      {productdata &&
        productdata.map((item) => (
          <ProductItem
            productTitle={item.title}
            productPrice={item.price}
            onAddToCardClicked={() => dispatch(addToCart(item))}
            key={item.id}
          />
        ))}
    </ProductList>
  );
};
export default ProductContainer;
