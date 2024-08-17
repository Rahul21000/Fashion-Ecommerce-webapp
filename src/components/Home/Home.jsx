import Hero from "./Hero";
import ItemList from "./ProductList";
import Footer from "./Footer";
const category = [
  { id: 1, title: "Customers also purchased" },
  { id: 2, title: "Most selling product" },
  { id: 3, title: "Buy people by choice" },
  { id: 4, title: "Customers also purchased" },
];

const Home = () => {
  return (
    <div>
      <Hero/>
      <ul>
        {category.map((list) => (
          <li key={list.id}>
            <ItemList title={list.title}  />
          </li>
        ))}
      </ul>
      <Footer/>
    </div>
  );
};

export default Home;
