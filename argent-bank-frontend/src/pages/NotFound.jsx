import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="not-found">
      <h1>Oups...</h1>
      <p className="not-found-message">
        La page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <Link to="/" className="not-found-link">
        Retour à l'accueil
      </Link>
    </main>
  );
}

export default NotFound;
