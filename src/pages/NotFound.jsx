import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="container py-5 text-center">

      <h1 className="display-1 fw-bold">
        404
      </h1>

      <h2>
        გვერდი ვერ მოიძებნა
      </h2>

      <Link
        to="/"
        className="btn btn-dark mt-4"
      >
        მთავარ გვერდზე დაბრუნება
      </Link>

    </main>
  );
}

export default NotFound;