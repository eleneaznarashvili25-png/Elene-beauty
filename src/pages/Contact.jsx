function Contact() {
  return (
    <main className="contact-page">
      <section className="container py-5">

        <div className="text-center mb-5">
          <h1 className="fw-bold">კონტაქტი</h1>

          <p className="text-secondary">
            დაგვიკავშირდი — მოხარული ვიქნებით დაგეხმაროთ
          </p>
        </div>

        <div className="row g-4 justify-content-center">

          <div className="col-md-5">
            <div className="card h-100 border-0 shadow-sm text-center p-4">
              <div className="fs-1 mb-3">📞</div>

              <h4 className="fw-bold">
                ტელეფონი
              </h4>

              <p className="text-secondary mb-0">
                +995 598737585
              </p>
            </div>
          </div>

          <div className="col-md-5">
            <div className="card h-100 border-0 shadow-sm text-center p-4">
              <div className="fs-1 mb-3">📧</div>

              <h4 className="fw-bold">
                ელფოსტა
              </h4>

              <p className="text-secondary mb-0">
                elenebeauty@gmail.com
              </p>
            </div>
          </div>

        </div>

        <div className="row justify-content-center mt-5">

          <div className="col-lg-8">

            <div className="card border-0 shadow-sm p-4 p-md-5">

              <h3 className="fw-bold text-center mb-4">
                მოგვწერე
              </h3>

              <form>

                <div className="mb-3">
                  <label className="form-label">
                    სახელი
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="შეიყვანე სახელი"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    ელფოსტა
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="შეიყვანე ელფოსტა"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    შეტყობინება
                  </label>

                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="დაწერე შენი შეტყობინება..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn w-100 contact-button"
                >
                  შეტყობინების გაგზავნა
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>
    </main>
  );
}

export default Contact;

