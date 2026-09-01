import { useParams, Link } from "react-router-dom";
import products from "../data/products";

function Category() {
  const { category } = useParams();

  const categoryProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <main className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">{category}</h1>

        <p className="text-secondary">
          აღმოაჩინე {category} კატეგორიის პროდუქტები
        </p>
      </div>

      <div className="row g-4">
        {categoryProducts.map((product) => (
          <div className="col-12 col-sm-6 col-lg-4" key={product.id}>
            <div className="card h-100 border-0 shadow-sm">

              <div
                style={{
                  height: "300px",
                  backgroundColor: "#fff7fb",
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
                  }}
                />
              </div>

              <div className="card-body text-start">

                {product.discount && (
                  <span className="badge bg-danger mb-2">
                    -{product.discount}%
                  </span>
                )}

                <h5 className="fw-bold">
                  {product.name}
                </h5>

                <p className="text-secondary mb-2">
                  {product.category}
                </p>

                <div className="mb-3">
                  {product.oldPrice && (
                    <span
                      className="text-secondary me-2"
                      style={{
                        textDecoration: "line-through",
                      }}
                    >
                      {product.oldPrice} ₾
                    </span>
                  )}

                  <strong className="fs-5">
                    {product.price} ₾
                  </strong>
                </div>

                <Link
                  to={`/product/${product.id}`}
                  className="btn btn-dark w-100"
                >
                  დეტალურად
                </Link>

              </div>
            </div>
          </div>
        ))}

        {categoryProducts.length === 0 && (
          <div className="text-center py-5">
            <h3>ამ კატეგორიაში პროდუქტები ჯერ არ არის.</h3>
          </div>
        )}
      </div>
    </main>
  );
}

export default Category;