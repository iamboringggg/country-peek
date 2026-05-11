import { Link } from "react-router-dom";
import { useFavourites } from "../context/FavouritesContext";
import CountryCard from "../components/CountryCard";

function Favourites() {
  const { favourites } = useFavourites();

  if (favourites.length === 0) {
    return (
      <div className="empty-state">
        <h2>No favourite countries yet</h2>
        <p>Start exploring and save countries you like.</p>
        <Link to="/" className="back-home-link">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="home">
      <h2>Your Favourite Countries</h2>

      <div className="cards-grid">
        {favourites.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
}

export default Favourites;
