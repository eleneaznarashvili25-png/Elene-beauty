import { Link } from "react-router-dom";

function Home() {
  const categories = [
    {
      name: "Foundarion",
      image: "/images/foundation-1.jpg",
    },
    {
      name: "Mascara",
      image: "/images/mascara-1.jpg",
    },
    {
      name: "Lipstick",
      image: "/images/lipstick-1.jpg",
    },
    {
      name: "Eyeliner",
      image: "/images/eyeliner-1.jpg",
    },
    {
      name: "Highlighter",
      image: "/images/highlighter-1.jpg",
    },
    {
      name: "NailLacquer",
      image: "/images/NailLacquer-1.jpg",
    },
    {
      name: "Eyeshadow",
      image: "/images/Eyeshadow-1.jpg",
    },
  ];

  return (
    <main>

      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6">

              <p className="hero-small">
                WELCOME TO ELENE BEAUTY
              </p>

              <h1>
                შენი სილამაზე,
                <br />
                შენი სტილი ✨
              </h1>

              <p>
                აღმოაჩინე შენი საყვარელი კოსმეტიკა ერთ სივრცეში.
              </p>

              <Link
                to="/products"
                className="btn btn-dark btn-lg"
              >
                პროდუქტების ნახვა
              </Link>

            </div>

            <div className="col-lg-6 mt-4 mt-lg-0">
              <img
                src="/images/beauty-1.webp"
                alt="Elene Beauty"
                className="hero-image"
              />
            </div>

          </div>
        </div>
      </section>

      <section className="container py-5">

        <div className="text-center mb-4">
          <h2 className="fw-bold">
            კატეგორიები
          </h2>

          <p className="text-secondary">
            აირჩიე სასურველი პროდუქტის კატეგორია
          </p>
        </div>

        <div className="row g-4">

          {categories.map((category) => (
            <div
              className="col-6 col-md-4 col-lg-3"
              key={category.name}
            >
              <Link
                to={`/products?category=${encodeURIComponent(
                  category.name
                )}`}
                className="category-card"
              >

                <img
                  src={category.image}
                  alt={category.name}
                />

                <div>
                  {category.name}
                </div>

              </Link>
            </div>
          ))}

        </div>

      </section>

    </main>
  );
}

export default Home;