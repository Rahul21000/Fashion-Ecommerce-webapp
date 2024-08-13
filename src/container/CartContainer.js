import Cart from "../components/Cart";
import ProductList from "../components/ProductList";
const CardContainer = () => {
  return (
    <div>
      <ProductList title={"your cart"}>
        <Cart />
      </ProductList>
    </div>
  );
};
export default CardContainer;
