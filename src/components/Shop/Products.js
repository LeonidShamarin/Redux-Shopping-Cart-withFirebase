import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 10,
    title: "Adventures in Wonderland",
    description: "Join Alice in her adventures through Wonderland.",
  },
  {
    id: "p2",
    price: 12,
    title: "The Great Gatsby",
    description: "A tale of love, wealth, and the American Dream.",
  },
  {
    id: "p3",
    price: 8,
    title: "To Kill a Mockingbird",
    description: "A powerful story of racial injustice and moral growth.",
  },
  {
    id: "p4",
    price: 15,
    title: "The Hitchhiker's Guide to the Galaxy",
    description:
      "Embark on a hilarious journey through space with Arthur Dent.",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
