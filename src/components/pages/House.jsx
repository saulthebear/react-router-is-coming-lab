import React from "react"
import { Link, useParams } from "react-router-dom"

const House = ({ data, onFav, favs }) => {
  const { id } = useParams()
  const houseData = data.find((house) => house.id.toString() === id)
  const members = houseData.people
  const membersList = members.map((member) => (
    <li key={`member-link-${member.id}`}>
      <Link to={`/houses/${id}/members/${member.id}`}>{member.name}</Link>
      <button type="button" onClick={() => onFav(member)}>
        Favorite
      </button>
    </li>
  ))
  const favMembersList = favs.map((member) => (
    <li key={`member-link-${member.id}`}>
      <Link to={`/houses/${id}/members/${member.id}`}>{member.name}</Link>
      <button type="button" onClick={() => onFav(member)}>
        Remove Favorite
      </button>
    </li>
  ))
  console.log(id)
  return (
    <div className="page">
      <div className="header">
        <h2>Members of a GoT House</h2>
      </div>
      <h3>All</h3>
      <ul className="list">{membersList}</ul>
      <h3>Favorites</h3>
      <ul className="list">{favMembersList}</ul>
    </div>
  )
}

export default House
