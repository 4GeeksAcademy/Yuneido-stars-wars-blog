import React from "react";
import { Link } from "react-router-dom";
const FavoritesButton = ({ favorites, onDelete }) => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        data-bs-auto-close="false"
        aria-expanded="false"
      >
        Favorites{" "}
        <span className="badge bg-secondary ms-2">{favorites.length}</span>
      </button>
      <ul
        className="dropdown-menu dropdown-menu-end"
        aria-labelledby="dropdownMenuButton1"
        style={{ minWidth: "200px" }}
      >
        {favorites.length > 0 ? (
          favorites.map((favorite, index) => {
            return (
              <li key={index} className="d-flex m-2 align-items-center">
                <Link
                  to={`/${favorite.type}/${favorite.uid}`}
                  className="dropdown-item "
                >
                  {favorite.title}
                </Link>
                <button
                  className="btn btn-danger m-1"
                  onClick={() => onDelete(favorite.uid, favorite.type)}
                >
                  b
                </button>
              </li>
            );
          })
        ) : (
          <li><p>(Empty)</p></li>
        )}
      </ul>
    </div>
  );
};

export default FavoritesButton;
