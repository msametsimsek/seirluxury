import { message } from "antd";
import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(12);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const productsPerPage = 12;

  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/categories`);

        if (response.ok) {
          const data = await response.json();
          setCategories(data);
        } else {
          message.error("Failed to fetch categories.");
        }
      } catch (error) {
        console.log("Error fetching categories:", error);
      }
    };

    const fetchProducts = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/products`);

        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          message.error("Failed to fetch products.");
        }
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    fetchCategories();
    fetchProducts();
  }, [apiUrl]);

  // Load more products
  const loadMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + productsPerPage);
  };

  // Filter products by category
  let filteredProducts = products;
  if (selectedCategory) {
    filteredProducts = products.filter(
      (product) => product.category === selectedCategory
    );
  }

  // Get the current products to display
  const currentProducts = filteredProducts.slice(0, visibleProducts);

  // Handle category selection
  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    setVisibleProducts(productsPerPage); // Reset visible products
  };

  return (
    <section className="products">
      <div className="container">
        {/* Category selection buttons */}
        <ul className="category-buttons">
          <li
            className={`category-button ${selectedCategory === null ? "active" : ""}`}
          >
            <button onClick={() => handleCategorySelect(null)}>Tümü</button>
          </li>
          {categories.map((category) => (
            <li
              key={category._id}
              className={`category-button ${selectedCategory === category._id ? "active" : ""}`}
            >
              <button onClick={() => handleCategorySelect(category._id)}>
                {category.name}
              </button>
            </li>
          ))}
        </ul>

        <div className="product-list">
          {currentProducts.map((product, index) => (
            <div
              key={product._id}
              className={`product-item ${index % 4 === 3 ? "last-in-row" : ""}`}
            >
              <ProductItem productItem={product} />
            </div>
          ))}
        </div>

        {/* Show More button */}
        {visibleProducts < filteredProducts.length && (
          <button onClick={loadMore} className="show-more-button">
            Daha Fazla Göster
          </button>
        )}
      </div>
    </section>
  );
};

export default Products;
