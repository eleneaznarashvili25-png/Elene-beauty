import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Card() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    setCart(savedCart);
  }, []);

  const updateCart = (id, change) => {
    const updatedCart = cart
      .map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: Math.max(
              1,
              product.quantity + change
            ),
          };
        }

        return product;
      });

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(
      (product) => product.id !== id
    );

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  const clearCart = () => {
    setCart([]);

    localStorage.removeItem("cart");
  };

  const totalPrice = cart.reduce(
    (total, product) =>
      total + product.price * product.quantity,
    0
  );

  return (
    <main className="container py-5">

      <div className="text-center mb-5">
        <h1 className="fw-bold">
          🛒 კალათა
        </h1>

        <p className="text-secondary">
          შენი არჩეული პროდუქტები
        </p>
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-5">

          <div
            style={{
              fontSize: "70px",
              marginBottom: "20px",
            }}
          >
            🛒
          </div>

          <h3 className="fw-bold">
            კალათა ცარიელია
          </h3>

          <p className="text-secondary">
            ჯერ არ დაგიმატებია პროდუქტი კალათაში.
          </p>

          <Link
            to="/products"
            className="btn mt-3"
            style={{
              background:
                "linear-gradient(135deg, #8b5cf6, #38bdf8)",
              color: "white",
              border: "none",
              borderRadius: "12px",
              padding: "12px 30px",
              fontWeight: "600",
            }}
          >
            პროდუქტების ნახვა
          </Link>

        </div>
      ) : (

        <div className="row g-4">

          <div className="col-lg-8">

            {cart.map((product) => (

              <div
                key={product.id}
                className="card border-0 shadow-sm mb-3"
                style={{
                  borderRadius: "18px",
                  overflow: "hidden",
                }}
              >

                <div className="row g-0 align-items-center">

                  <div className="col-4 col-md-3">

                    <div
                      style={{
                        height: "180px",
                        background: "#f8f5ff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
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

                    </div>

                  </div>

                  <div className="col-8 col-md-9">

                    <div className="card-body">

                      <div className="d-flex justify-content-between align-items-start">

                        <div>

                          <small className="text-secondary">
                            {product.category}
                          </small>

                          <h5 className="fw-bold mt-1">
                            {product.name}
                          </h5>

                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            removeFromCart(product.id)
                          }
                          className="btn btn-sm btn-outline-danger"
                        >
                          🗑️
                        </button>

                      </div>

                      <div className="mt-3">

                        {product.oldPrice && (
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
                        )}

                        <strong
                          style={{
                            color: "#7c3aed",
                            fontSize: "20px",
                          }}
                        >
                          {product.price} ₾
                        </strong>

                      </div>

                      <div className="d-flex align-items-center justify-content-between mt-3">

                        <div
                          className="d-flex align-items-center"
                          style={{
                            gap: "15px",
                          }}
                        >

                          <button
                            type="button"
                            className="btn btn-light border"
                            onClick={() =>
                              updateCart(
                                product.id,
                                -1
                              )
                            }
                          >
                            −
                          </button>

                          <strong>
                            {product.quantity}
                          </strong>

                          <button
                            type="button"
                            className="btn btn-light border"
                            onClick={() =>
                              updateCart(
                                product.id,
                                1
                              )
                            }
                          >
                            +
                          </button>

                        </div>

                        <strong>
                          {(
                            product.price *
                            product.quantity
                          ).toFixed(2)}{" "}
                          ₾
                        </strong>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            ))}

            <button
              type="button"
              onClick={clearCart}
              className="btn btn-outline-danger mt-2"
            >
              კალათის გასუფთავება
            </button>

          </div>

          <div className="col-lg-4">

            <div
              className="card border-0 shadow-sm p-4"
              style={{
                borderRadius: "20px",
                position: "sticky",
                top: "20px",
              }}
            >

              <h4 className="fw-bold mb-4">
                შეკვეთის შეჯამება
              </h4>

              <div className="d-flex justify-content-between mb-3">
                <span>პროდუქტები</span>

                <span>
                  {cart.reduce(
                    (sum, product) =>
                      sum + product.quantity,
                    0
                  )}
                </span>
              </div>

              <hr />

              <div className="d-flex justify-content-between mb-4">

                <strong>
                  ჯამური თანხა
                </strong>

                <strong
                  style={{
                    color: "#7c3aed",
                    fontSize: "22px",
                  }}
                >
                  {totalPrice.toFixed(2)} ₾
                </strong>

              </div>

              <button
                type="button"
                className="btn w-100 py-3"
                style={{
                  background:
                    "linear-gradient(135deg, #8b5cf6, #38bdf8)",
                  color: "white",
                  border: "none",
                  borderRadius: "12px",
                  fontWeight: "600",
                  fontSize: "17px",
                }}
                onClick={() =>
                  alert(
                    "შეკვეთა წარმატებით მომზადდა! 💜"
                  )
                }
              >
                შეკვეთის გაგრძელება
              </button>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}

export default Card;

