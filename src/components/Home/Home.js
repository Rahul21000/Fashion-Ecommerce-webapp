import Hero from "./Hero";
import ItemList from "./ProductList";
const category = [
  { id: 1, title: "Customers also purchased" },
  { id: 2, title: "Most selling product" },
  { id: 3, title: "Buy people by choice" },
  { id: 4, title: "Customers also purchased" },
];

const Home = () => {
  return (
    <div className="">
      <Hero/>
      <ul>
        {category.map((cat) => (
          <li key={cat.id}>
            <ItemList title={cat.title}  />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
