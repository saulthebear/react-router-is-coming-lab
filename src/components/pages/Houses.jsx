import React from "react"
import { Link } from "react-router-dom"

const Houses = ({ data, onFav, favs }) => {
  const houseLinks = data.map((house) => {
    return (
      <li key={`house-link-${house.id}`}>
        <Link to={`/houses/${house.id}`}>{house.name}</Link>
        <button type="button" onClick={() => onFav(house)}>
          Favorite
        </button>
      </li>
    )
  })

  const faveHouseLinks = favs.map((house) => {
    return (
      <li key={`house-link-${house.id}`}>
        <Link to={`/houses/${house.id}`}>{house.name}</Link>
        <button type="button" onClick={() => onFav(house)}>
          Remove Favorite
        </button>
      </li>
    )
  })

  return (
    <div>
      <div className="header">
        <h2>Game of Thrones Houses</h2>
      </div>
      <h3>All</h3>
      <ul className="list">{houseLinks}</ul>
      <h3>Favorites:</h3>
      <ul>{faveHouseLinks}</ul>
    </div>
  )
}

export default Houses
