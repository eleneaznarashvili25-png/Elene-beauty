import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [currency, setCurrency] = useState("KRW");
  const [language, setLanguage] = useState("ka");

  return (
    <header className="navbar-wrapper">

      {/* ზედა ზოლი */}
      <div className="navbar-top">
        <div className="navbar-container navbar-top-inner">

          <div className="navbar-settings">

            <div className="navbar-select">
              <span>💰</span>

              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <option value="KRW">₩ KRW</option>
                <option value="GEL">₾ GEL</option>
                <option value="USD">$ USD</option>
                <option value="EUR">€ EUR</option>
              </select>
            </div>

            <div className="navbar-select">
              <span>🌐</span>

              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="ka">ქართული</option>
                <option value="ko">한국어</option>
                <option value="en">English</option>
                <option value="ru">Русский</option>
              </select>
            </div>

          </div>

          <Link to="/card" className="navbar-cart">
            🛒 კალათა
          </Link>

        </div>
      </div>

      {/* მთავარი მენიუ */}
      <div className="navbar-main">
        <div className="navbar-container navbar-main-inner">

          <Link to="/" className="navbar-logo">
            <span className="logo-icon">✦</span>
            <span>Elene Beauty</span>
          </Link>

          <nav className="navbar-navigation">

            <Link to="/" className="navbar-link">
              მთავარი
            </Link>

            <Link to="/products" className="navbar-link">
              პროდუქტები
            </Link>

            <div className="navbar-category">

              <button className="navbar-category-button">
                კატეგორიები
                <span>⌄</span>
              </button>

              <div className="navbar-dropdown">

                <Link to="/products?category=Foundarion">
                   Foundarion
                </Link>

                <Link to="/products?category=Mascara">
                   Mascara
                </Link>

                <Link to="/products?category=Lipstick"> 
                 Lipstick
                </Link>
                  

                <Link to="/products?category=Highlighter">
                   Highlighter
                </Link>

                <Link to="/products?category=Eyeliner">
                   Eyeliner
                </Link>

                <Link to="/products?category=NailLacquer">
                  NailLacquer
                </Link>

                <Link to="/products?category=Eyeshadow">
                   Eyeshadow
                </Link>

              </div>
            </div>

            <Link to="/contact" className="navbar-link">
              კონტაქტი
            </Link>

            <Link to="/login" className="navbar-login">
              შესვლა
            </Link>

          </nav>

          <div className="navbar-search">
            <span>⌕</span>

            <input
              type="text"
              placeholder="მოძებნე..."
            />
          </div>

        </div>
      </div>

    </header>
  );
}

export default Navbar;