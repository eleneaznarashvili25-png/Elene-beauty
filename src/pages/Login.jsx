function Login() {
  return (
    <main className="container py-5">
      <div className="form-container">

        <h1>შესვლა</h1>

        <form>

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

          <button className="btn btn-dark w-100">
            შესვლა
          </button>

        </form>

      </div>
    </main>
  );
}

export default Login;