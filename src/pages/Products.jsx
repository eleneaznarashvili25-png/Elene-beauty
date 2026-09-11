import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProducts } from "../api/productsApi";

function Products() {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState("");

  // API
  const [apiProducts, setApiProducts] = useState([]);
  const [apiLoading, setApiLoading] = useState(true);
  const [apiError, setApiError] = useState("");

  // API პროდუქტების ჩატვირთვა
  useEffect(() => {
    async function loadApiProducts() {
      try {
        const data = await getProducts();
        setApiProducts(data);
      } catch (error) {
        setApiError("API პროდუქტების ჩატვირთვა ვერ მოხერხდა.");
      } finally {
        setApiLoading(false);
      }
    }

    loadApiProducts();
  }, []);

  // Golden Rose პროდუქტები
  const products = [
    {
      id: 1,
      name: "Golden Rose Total Cover 2in1 Foundation",
      category: "Foundation",
      price: 35,
      oldPrice: 50,
      discount: 30,
      image: "/images/foundation-1.jpg",
    },
    {
      id: 2,
      name: "Golden Rose Skin Sensation Foundation",
      category: "Foundation",
      price: 30,
      oldPrice: 40,
      discount: 25,
      image: "/images/foundation-2.jpg",
    },
    {
      id: 3,
      name: "Golden Rose Longstay Matte Foundation",
      category: "Foundation",
      price: 25,
      oldPrice: 50,
      discount: 50,
      image: "/images/foundation-3.jpg",
    },

    {
      id: 4,
      name: "Golden Rose Mascara",
      category: "Mascara",
      price: 25,
      oldPrice: 40,
      discount: 35,
      image: "/images/mascara-1.jpg",
    },
    {
      id: 5,
      name: "Golden Rose Lash Love Mascara",
      category: "Mascara",
      price: 20,
      oldPrice: 30,
      discount: 30,
      image: "/images/mascara-2.jpg",
    },
    {
      id: 6,
      name: "Golden Rose Volume Mascara",
      category: "Mascara",
      price: 25,
      oldPrice: 50,
      discount: 50,
      image: "/images/mascara-3.jpg",
    },

    {
      id: 7,
      name: "Golden Rose Glow Highlighter",
      category: "Highlighter",
      price: 30,
      oldPrice: 45,
      discount: 30,
      image: "/images/highlighter-1.jpg",
    },
    {
      id: 8,
      name: "Golden Rose Liquid Highlighter",
      category: "Highlighter",
      price: 28,
      oldPrice: 40,
      discount: 30,
      image: "/images/highlighter-2.jpg",
    },
    {
      id: 9,
      name: "Golden Rose Glow Stick",
      category: "Highlighter",
      price: 25,
      oldPrice: 50,
      discount: 50,
      image: "/images/highlighter-3.jpg",
    },

    {
      id: 10,
      name: "Golden Rose Precision Eyeliner",
      category: "Eyeliner",
      price: 15,
      oldPrice: 25,
      discount: 40,
      image: "/images/eyeliner-1.jpg",
    },
    {
      id: 11,
      name: "Golden Rose Waterproof Eyeliner",
      category: "Eyeliner",
      price: 18,
      oldPrice: 30,
      discount: 40,
      image: "/images/eyeliner-2.jpg",
    },
    {
      id: 12,
      name: "Golden Rose Black Eyeliner",
      category: "Eyeliner",
      price: 20,
      oldPrice: 40,
      discount: 50,
      image: "/images/eyeliner-3.jpg",
    },

    {
      id: 13,
      name: "Golden Rose Nail Lacquer Red",
      category: "NailLacquer",
      price: 12,
      oldPrice: 20,
      discount: 40,
      image: "/images/NailLacquer-1.jpg",
    },
    {
      id: 14,
      name: "Golden Rose Nail Lacquer Pink",
      category: "NailLacquer",
      price: 12,
      oldPrice: 18,
      discount: 30,
      image: "/images/NailLacquer-2.jpg",
    },
    {
      id: 15,
      name: "Golden Rose Nail Lacquer Nude",
      category: "NailLacquer",
      price: 12,
      oldPrice: 24,
      discount: 50,
      image: "/images/NailLacquer-3.jpg",
    },

    {
      id: 16,
      name: "Golden Rose Nude Eyeshadow",
      category: "Eyeshadow",
      price: 35,
      oldPrice: 50,
      discount: 30,
      image: "/images/Eyeshadow-1.jpg",
    },
    {
      id: 17,
      name: "Golden Rose Pink Eyeshadow",
      category: "Eyeshadow",
      price: 30,
      oldPrice: 40,
      discount: 25,
      image: "/images/Eyeshadow-2.jpg",
    },
    {
      id: 18,
      name: "Golden Rose Color Eyeshadow",
      category: "Eyeshadow",
      price: 25,
      oldPrice: 50,
      discount: 50,
      image: "/images/Eyeshadow-3.jpg",
    },

    {
      id: 19,
      name: "Golden Rose Velvet Matte Lipstick",
      category: "Lipstick",
      price: 20,
      oldPrice: 30,
      discount: 33,
      image: "/images/lipstick-1.jpg",
    },
    {
      id: 20,
      name: "Golden Rose Longstay Lipstick",
      category: "Lipstick",
      price: 22,
      oldPrice: 35,
      discount: 37,
      image: "/images/lipstick-2.jpg",
    },
    {
      id: 21,
      name: "Golden Rose Nude Lipstick",
      category: "Lipstick",
      price: 18,
      oldPrice: 30,
      discount: 40,
      image: "/images/lipstick-3.jpg",
    },
  ];

  // Golden Rose - ძებნა და კატეგორია
  let filteredProducts = products.filter((product) => {
    const matchesCategory =
      !selectedCategory ||
      product.category === selectedCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // API - ძებნა და კატეგორია
  let apiFilteredProducts = apiProducts.filter((product) => {
    const matchesSearch =
      product.title
        ?.toLowerCase()
        .includes(search.toLowerCase());

    return matchesSearch;
  });

  // თუ კონკრეტული Golden Rose კატეგორიაა არჩეული,
  // API პროდუქტებს არ ვაჩვენებთ.
  if (selectedCategory) {
    apiFilteredProducts = [];
  }

  // Golden Rose პროდუქტების დალაგება
  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (sort === "discount") {
    filteredProducts.sort((a, b) => b.discount - a.discount);
  }

  // API პროდუქტების დალაგება
  if (sort === "low") {
    apiFilteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    apiFilteredProducts.sort((a, b) => b.price - a.price);
  }

  // Wishlist
  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((item) => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  // კალათაში დამატება
  const addToCart = (product) => {
    setCart([...cart, product]);

    const productName =
      product.name || product.title;

    setMessage(`${productName} დაემატა კალათაში 🛒`);

    setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  // ყველა ნაჩვენები პროდუქტის რაოდენობა
  const totalProducts =
    filteredProducts.length +
    apiFilteredProducts.length;

  return (
    <main className="container py-5">

      {/* შეტყობინება */}
      {message && (
        <div
          className="alert alert-success text-center position-fixed"
          style={{
            top: "90px",
            right: "20px",
            zIndex: 9999,
            minWidth: "280px",
          }}
        >
          {message}
        </div>
      )}

      {/* სათაური */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">
          {selectedCategory || "პროდუქტები"}
        </h1>

        <p className="text-secondary">
          Elene Beauty — კოსმეტიკის კოლექცია
        </p>
      </div>

      {/* ძებნა და დალაგება */}
      <div className="row mb-4 g-3">

        <div className="col-md-7">
          <input
            type="text"
            className="form-control"
            placeholder="🔍 მოძებნე პროდუქტი..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-5">
          <select
            className="form-select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="default">
              დალაგება
            </option>

            <option value="low">
              ფასი: დაბლიდან მაღლისკენ
            </option>

            <option value="high">
              ფასი: მაღლიდან დაბლისკენ
            </option>

            <option value="discount">
              ყველაზე დიდი ფასდაკლება
            </option>
          </select>
        </div>

      </div>

      {/* API Loading */}
      {apiLoading && (
        <div className="text-center mb-4">
          <div
            className="spinner-border"
            role="status"
          >
            <span className="visually-hidden">
              იტვირთება...
            </span>
          </div>

          <p className="text-secondary mt-2">
            API პროდუქტები იტვირთება...
          </p>
        </div>
      )}

      {/* API Error */}
      {apiError && (
        <div className="alert alert-warning text-center">
          {apiError}
        </div>
      )}

      {/* შედეგების რაოდენობა */}
      <div className="mb-4 text-secondary">
        ნაპოვნია:{" "}
        <strong>{totalProducts}</strong>{" "}
        პროდუქტი
      </div>

      {/* პროდუქტები */}
      <div className="row g-4">

        {/* Golden Rose პროდუქტები */}
        {filteredProducts.map((product) => (

          <div
            className="col-12 col-sm-6 col-lg-4"
            key={`golden-${product.id}`}
          >

            <div
              className="card h-100 border-0 shadow-sm product-card"
              style={{
                transition: "0.3s ease",
                position: "relative",
              }}
            >

              {/* Wishlist */}
              <button
                onClick={() =>
                  toggleWishlist(product.id)
                }
                style={{
                  position: "absolute",
                  top: "15px",
                  left: "15px",
                  zIndex: 2,
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "none",
                  background: "white",
                  boxShadow:
                    "0 2px 8px rgba(0,0,0,0.15)",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
                title="Wishlist"
              >
                {wishlist.includes(product.id)
                  ? "❤️"
                  : "♡"}
              </button>

              {/* ფოტო */}
              <div
                style={{
                  height: "300px",
                  position: "relative",
                  background: "#f8f5ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >

                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    padding: "15px",
                    transition: "0.4s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "scale(1.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      "scale(1)";
                  }}
                />

                {/* ფასდაკლება */}
                <span
                  style={{
                    position: "absolute",
                    top: "15px",
                    right: "15px",
                    background:
                      "linear-gradient(135deg, #8b5cf6, #38bdf8)",
                    color: "white",
                    padding: "7px 12px",
                    borderRadius: "20px",
                    fontWeight: "bold",
                  }}
                >
                  -{product.discount}%
                </span>

              </div>

              {/* ინფორმაცია */}
              <div className="card-body d-flex flex-column">

                <small className="text-secondary">
                  {product.category}
                </small>

                <h5 className="fw-bold mt-2">
                  {product.name}
                </h5>

                <div className="mt-auto">

                  {/* ფასები */}
                  <div className="mb-3">

                    <span
                      style={{
                        textDecoration:
                          "line-through",
                        color: "#999",
                        marginRight: "10px",
                      }}
                    >
                      {product.oldPrice} ₾
                    </span>

                    <strong
                      style={{
                        color: "#7c3aed",
                        fontSize: "20px",
                      }}
                    >
                      {product.price} ₾
                    </strong>

                  </div>

                  {/* კალათაში დამატება */}
                  <button
                    onClick={() =>
                      addToCart(product)
                    }
                    className="btn w-100 mb-2"
                    style={{
                      background:
                        "linear-gradient(135deg, #8b5cf6, #38bdf8)",
                      color: "white",
                      border: "none",
                      borderRadius: "10px",
                      fontWeight: "600",
                    }}
                  >
                    🛒 კალათაში დამატება
                  </button>

                  {/* დეტალები */}
                  <Link
                    to={`/product/${product.id}`}
                    className="btn btn-outline-dark w-100"
                    style={{
                      borderRadius: "10px",
                    }}
                  >
                    დეტალურად
                  </Link>

                </div>

              </div>

            </div>

          </div>

        ))}

        {/* API პროდუქტები */}
        {apiFilteredProducts.map((product) => (

          <div
            className="col-12 col-sm-6 col-lg-4"
            key={`api-${product.id}`}
          >

            <div
              className="card h-100 border-0 shadow-sm product-card"
              style={{
                transition: "0.3s ease",
                position: "relative",
              }}
            >

              {/* API badge */}
              <span
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "15px",
                  zIndex: 2,
                  background:
                    "linear-gradient(135deg, #8b5cf6, #38bdf8)",
                  color: "white",
                  padding: "6px 10px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                API
              </span>

              {/* ფოტო */}
              <div
                style={{
                  height: "300px",
                  background: "#f8f5ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >

                <img
                  src={product.thumbnail}
                  alt={product.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    padding: "15px",
                    transition: "0.4s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "scale(1.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      "scale(1)";
                  }}
                />

              </div>

              {/* ინფორმაცია */}
              <div className="card-body d-flex flex-column">

                <small className="text-secondary">
                  {product.category}
                </small>

                <h5 className="fw-bold mt-2">
                  {product.title}
                </h5>

                <p
                  className="text-secondary"
                  style={{
                    fontSize: "14px",
                  }}
                >
                  {product.description}
                </p>

                <div className="mt-auto">

                  <strong
                    style={{
                      color: "#7c3aed",
                      fontSize: "20px",
                    }}
                  >
                    {product.price} ₾
                  </strong>

                  {/* კალათაში დამატება */}
                  <button
                    onClick={() =>
                      addToCart(product)
                    }
                    className="btn w-100 mt-3 mb-2"
                    style={{
                      background:
                        "linear-gradient(135deg, #8b5cf6, #38bdf8)",
                      color: "white",
                      border: "none",
                      borderRadius: "10px",
                      fontWeight: "600",
                    }}
                  >
                    🛒 კალათაში დამატება
                  </button>

                  <button
                    className="btn btn-outline-dark w-100"
                    style={{
                      borderRadius: "10px",
                    }}
                    onClick={() => {
                      setMessage(
                        "API პროდუქტის დეტალები მოგვიანებით დაემატება."
                      );

                      setTimeout(() => {
                        setMessage("");
                      }, 2500);
                    }}
                  >
                    დეტალურად
                  </button>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* ვერ მოიძებნა */}
      {!apiLoading &&
        totalProducts === 0 && (
          <div className="text-center py-5">

            <h3>
              პროდუქტი ვერ მოიძებნა 😔
            </h3>

            <p className="text-secondary">
              სცადე სხვა საძიებო სიტყვა.
            </p>

          </div>
        )}

     
      {cart.length > 0 && (
        <div className="text-center mt-5">

          <p>
            🛒 კალათაში დამატებულია{" "}
            <strong>{cart.length}</strong>{" "}
            პროდუქტი
          </p>

          <Link
            to="/card"
            className="btn btn-dark"
          >
            კალათის ნახვა
          </Link>

        </div>
      )}

    </main>
  );
}

export default Products;