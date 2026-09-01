import { Link, useSearchParams } from "react-router-dom";

function Products() {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");

  const products = [
    
    {
      id: 1,
      name: "Golden Rose Total Cover 2in1 Foundation",
      category: "Foundarion",
      price: 35,
      oldPrice: 50,
      discount: 30,
      image: "/images/foundation-1.jpg",
    },
    {
      id: 2,
      name: "Golden Rose Skin Sensation Foundation",
      category: "Foundarion",
      price: 30,
      oldPrice: 40,
      discount: 25,
      image: "/images/foundation-2.jpg",
    },
    {
      id: 3,
      name: "Golden Rose Longstay Matte Foundation",
      category: "Foundarion",
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
      category:"Eyeliner",
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
      category:"NailLacquer",
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

  const filteredProducts = selectedCategory
    ? products.filter(
        (product) => product.category === selectedCategory
      )
    : products;

  return (
    <main className="container py-5">

      <div className="text-center mb-5">
        <h1 className="fw-bold">
          {selectedCategory || "პროდუქტები"}
        </h1>

        <p className="text-secondary">
          Elene Beauty — კოსმეტიკის კოლექცია
        </p>
      </div>

      <div className="row g-4">

        {filteredProducts.map((product) => (

          <div
            className="col-12 col-sm-6 col-lg-4"
            key={product.id}
          >

            <div className="card h-100 border-0 shadow-sm product-card">

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
                  }}
                />

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

              <div className="card-body d-flex flex-column">

                <small className="text-secondary">
                  {product.category}
                </small>

                <h5 className="fw-bold mt-2">
                  {product.name}
                </h5>

                <div className="mt-auto">

                  <span
                    style={{
                      textDecoration: "line-through",
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

                  <Link
                    to={`/product/${product.id}`}
                    className="btn w-100 mt-3"
                    style={{
                      background:
                        "linear-gradient(135deg, #8b5cf6, #38bdf8)",
                      color: "white",
                      border: "none",
                      borderRadius: "10px",
                      fontWeight: "600",
                    }}
                  >
                    დეტალურად
                  </Link>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-5">
          <h3>პროდუქტი ვერ მოიძებნა</h3>
        </div>
      )}

    </main>
  );
}

export default Products;

