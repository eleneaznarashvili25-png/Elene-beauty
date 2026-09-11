import { useParams, Link } from "react-router-dom";
import { useState } from "react";

function ProductsDetails() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const products = [
    {
      id: 1,
      name: "Golden Rose Total Cover 2in1 Foundation",
      category: "ტონალური",
      price: 35,
      oldPrice: 50,
      discount: 30,
      image: "/images/foundation-1.jpg",
      description:
        "ტონალური კრემი უზრუნველყოფს ბუნებრივ, თანაბარ და კომფორტულ დაფარვას. იდეალურია ყოველდღიური მაკიაჟისთვის.",
    },
    {
      id: 2,
      name: "Golden Rose Skin Sensation Foundation",
      category: "ტონალური",
      price: 30,
      oldPrice: 40,
      discount: 25,
      image: "/images/foundation-2.jpg",
      description:
        "მსუბუქი ტექსტურის ტონალური კრემი, რომელიც კანს ბუნებრივ და თანაბარ იერს აძლევს.",
    },
    {
      id: 3,
      name: "Golden Rose Longstay Matte Foundation",
      category: "ტონალური",
      price: 25,
      oldPrice: 50,
      discount: 50,
      image: "/images/foundation-3.jpg",
      description:
        "მატე ეფექტის მქონე ტონალური კრემი ხანგრძლივი გამოყენებისთვის.",
    },

    {
      id: 4,
      name: "Golden Rose Mascara",
      category: "ტუში",
      price: 25,
      oldPrice: 40,
      discount: 35,
      image: "/images/mascara-1.jpg",
      description:
        "ტუში წამწამებს აძლევს მოცულობასა და სიგრძეს და ქმნის გამოკვეთილ თვალის მაკიაჟს.",
    },
    {
      id: 5,
      name: "Golden Rose Lash Love Mascara",
      category: "ტუში",
      price: 20,
      oldPrice: 30,
      discount: 30,
      image: "/images/mascara-2.jpg",
      description:
        "მსუბუქი ტუში ყოველდღიური გამოყენებისთვის, რომელიც წამწამებს ბუნებრივად გამოკვეთს.",
    },
    {
      id: 6,
      name: "Golden Rose Volume Mascara",
      category: "ტუში",
      price: 25,
      oldPrice: 50,
      discount: 50,
      image: "/images/mascara-3.jpg",
      description:
        "მოცულობის ეფექტის მქონე ტუში ინტენსიური და ეფექტური თვალის მაკიაჟისთვის.",
    },

    {
      id: 7,
      name: "Golden Rose Glow Highlighter",
      category: "ჰაილაითერი",
      price: 30,
      oldPrice: 45,
      discount: 30,
      image: "/images/highlighter-1.jpg",
      description:
        "ნაზი ჰაილაითერი ბუნებრივი ბზინვარებისთვის, რომელიც სახის ნაკვთებს ლამაზად გამოკვეთს.",
    },
    {
      id: 8,
      name: "Golden Rose Liquid Highlighter",
      category: "ჰაილაითერი",
      price: 28,
      oldPrice: 40,
      discount: 30,
      image: "/images/highlighter-2.jpg",
      description:
        "თხევადი ჰაილაითერი ინტენსიური ბზინვარებისთვის.",
    },
    {
      id: 9,
      name: "Golden Rose Glow Stick",
      category: "ჰაილაითერი",
      price: 25,
      oldPrice: 50,
      discount: 50,
      image: "/images/highlighter-3.jpg",
      description:
        "მარტივად გამოსაყენებელი ჰაილაითერი ყოველდღიური მაკიაჟისთვის.",
    },

    {
      id: 10,
      name: "Golden Rose Precision Eyeliner",
      category: "ლაინერი",
      price: 15,
      oldPrice: 25,
      discount: 40,
      image: "/images/eyeliner-1.jpg",
      description:
        "ზუსტი ლაინერი მკვეთრი და ლამაზი ხაზის შესაქმნელად.",
    },
    {
      id: 11,
      name: "Golden Rose Waterproof Eyeliner",
      category: "ლაინერი",
      price: 18,
      oldPrice: 30,
      discount: 40,
      image: "/images/eyeliner-2.jpg",
      description:
        "წყალგამძლე ლაინერი ხანგრძლივი და გამძლე მაკიაჟისთვის.",
    },
    {
      id: 12,
      name: "Golden Rose Black Eyeliner",
      category: "ლაინერი",
      price: 20,
      oldPrice: 40,
      discount: 50,
      image: "/images/eyeliner-3.jpg",
      description:
        "ინტენსიური შავი ფერის ლაინერი თვალის გამოკვეთილი მაკიაჟისთვის.",
    },

    {
      id: 13,
      name: "Golden Rose Nail Lacquer Red",
      category: "NailLacquer",
      price: 12,
      oldPrice: 20,
      discount: 40,
      image: "/images/NailLacquer-1.jpg",
      description:
        "კლასიკური წითელი ფერის ფრჩხილის ლაქი ლამაზი და ელეგანტური მანიკიურისთვის.",
    },
    {
      id: 14,
      name: "Golden Rose Nail Lacquer Pink",
      category: "NailLacquer",
      price: 12,
      oldPrice: 18,
      discount: 30,
      image: "/images/NailLacquer-2.jpg",
      description:
        "ნაზი ვარდისფერი ფერის ფრჩხილის ლაქი ყოველდღიური და დახვეწილი სტილისთვის.",
    },
    {
      id: 15,
      name: "Golden Rose Nail Lacquer Nude",
      category: "NailLacquer",
      price: 12,
      oldPrice: 24,
      discount: 50,
      image: "/images/NailLacquer-3.jpg",
      description:
        "ბუნებრივი ნუდისფერი ლაქი მინიმალისტური და ელეგანტური მანიკიურისთვის.",
    },

    {
      id: 16,
      name: "Golden Rose Nude Eyeshadow",
      category: "Eyeshadow",
      price: 35,
      oldPrice: 50,
      discount: 30,
      image: "/images/Eyeshadow-1.jpg",
      description:
        "ნუდისფერ ტონებში შექმნილი თვალის ჩრდილების პალიტრა ყოველდღიური მაკიაჟისთვის.",
    },
    {
      id: 17,
      name: "Golden Rose Pink Eyeshadow",
      category: "Eyeshadow",
      price: 30,
      oldPrice: 40,
      discount: 25,
      image: "/images/Eyeshadow-2.jpg",
      description:
        "ვარდისფერ ტონებში შექმნილი თვალის ჩრდილების პალიტრა ლამაზი და ნაზი მაკიაჟისთვის.",
    },
    {
      id: 18,
      name: "Golden Rose Color Eyeshadow",
      category: "Eyeshadow",
      price: 25,
      oldPrice: 50,
      discount: 50,
      image: "/images/Eyeshadow-3.jpg",
      description:
        "ფერადი თვალის ჩრდილების მრავალფეროვანი პალიტრა კრეატიული მაკიაჟისთვის.",
    },
  {id: 19,
   name: "Golden Rose Velvet Matte Lipstick",
   category: "Lipstick",
   price: 25,
   oldPrice: 40,
   discount: 38,
   image: "/images/lipstick-1.jpg",
   description:
  "Golden Rose-ის მქრქალი პომადა ინტენსიური ფერით, რომელიც ტუჩებს ლამაზ და ხანგრძლივ ეფექტს ანიჭებს."
  },
  {
  id: 20,
name: "Golden Rose Longstay Lipstick",
category: "Lipstick",
price: 28,
oldPrice: 45,
discount: 38,
image: "/images/lipstick-2.jpg",
description:
  "ხანგრძლივი ეფექტის მქონე Golden Rose-ის პომადა, რომელიც ტუჩებზე თანაბრად ნაწილდება და მდიდარ ფერს ქმნის."
  },

{

  id: 21,
name: "Golden Rose Nude Lipstick",
category: "Lipstick",
price: 22,
oldPrice: 35,
discount: 37,
image: "/images/lipstick-3.jpg",
description:
  "Golden Rose-ის ნაზი ნიუდისფერი პომადა ყოველდღიური მაკიაჟისთვის, რომელიც ტუჩებს ბუნებრივ და დახვეწილ იერს აძლევს."
}
  ];

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <main className="container py-5 text-center">
        <h2>პროდუქტი ვერ მოიძებნა</h2>

        <Link
          to="/products"
          className="btn btn-dark mt-3"
        >
          პროდუქტებზე დაბრუნება
        </Link>
      </main>
    );
  }

  const addToCart = () => {
    const savedCart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    const existingProduct = savedCart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      savedCart.push({
        ...product,
        quantity: quantity,
      });
    }

    localStorage.setItem(
      "cart",
      JSON.stringify(savedCart)
    );

    alert("პროდუქტი დაემატა კალათაში 🛒");
  };

  return (
    <main className="container py-5">
      <div className="row g-5 align-items-center">

        <div className="col-lg-6">
          <div
            style={{
              background: "#f8f5ff",
              borderRadius: "25px",
              padding: "30px",
              position: "relative",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "450px",
                objectFit: "contain",
              }}
            />

            <span
              style={{
                position: "absolute",
                top: "25px",
                right: "25px",
                background: "#8b5cf6",
                color: "white",
                padding: "8px 15px",
                borderRadius: "20px",
                fontWeight: "bold",
              }}
            >
              -{product.discount}%
            </span>
          </div>
        </div>

        <div className="col-lg-6">

          <p
            style={{
              color: "#8b5cf6",
              fontWeight: "600",
            }}
          >
            {product.category}
          </p>

          <h1 className="fw-bold mb-3">
            {product.name}
          </h1>

          <div className="mb-4">
            <span
              style={{
                textDecoration: "line-through",
                color: "#999",
                fontSize: "20px",
                marginRight: "12px",
              }}
            >
              {product.oldPrice} ₾
            </span>

            <strong
              style={{
                color: "#7c3aed",
                fontSize: "30px",
              }}
            >
              {product.price} ₾
            </strong>
          </div>

          <div className="mb-4">
            <h4 className="fw-bold">
              პროდუქტის შესახებ
            </h4>

            <p
              className="text-secondary"
              style={{
                fontSize: "17px",
                lineHeight: "1.8",
              }}
            >
              {product.description}
            </p>
          </div>

          <div className="d-flex align-items-center gap-3 mb-4">

            <button
              type="button"
              className="btn btn-light border"
              onClick={() =>
                setQuantity((q) => Math.max(1, q - 1))
              }
            >
              −
            </button>

            <strong>{quantity}</strong>

            <button
              type="button"
              className="btn btn-light border"
              onClick={() =>
                setQuantity((q) => q + 1)
              }
            >
              +
            </button>

          </div>

          <button
            type="button"
            onClick={addToCart}
            className="btn w-100 py-3"
            style={{
              background:
                "linear-gradient(135deg, #8b5cf6, #38bdf8)",
              color: "white",
              border: "none",
              borderRadius: "12px",
              fontSize: "18px",
              fontWeight: "600",
            }}
          >
            🛒 კალათაში დამატება
          </button>

          <Link
            to="/products"
            className="btn btn-outline-secondary w-100 mt-3 py-3"
          >
            ← პროდუქტებზე დაბრუნება
          </Link>

        </div>
      </div>
    </main>
  );
}

export default ProductsDetails;

