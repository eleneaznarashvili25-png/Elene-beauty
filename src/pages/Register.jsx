function Register() {
  return (
    <main className="container py-5">

      <div className="form-container">

        <h1>რეგისტრაცია</h1>

        <form>

          <input
            className="form-control mb-3"
            placeholder="სახელი"
          />

          <input
            className="form-control mb-3"
            placeholder="გვარი"
          />

          <input
            type="email"
            className="form-control mb-3"
            placeholder="ელფოსტა"
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="პაროლი"
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="გაიმეორე პაროლი"
          />

          <button className="btn btn-dark w-100">
            რეგისტრაცია
          </button>

        </form>

      </div>

    </main>
  );
}

export default Register;