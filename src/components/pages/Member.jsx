import React from "react"
import { useParams } from "react-router-dom"

const Member = ({ data }) => {
  const { houseId, memberId } = useParams()
  const house = data.find((house) => house.id.toString() === houseId)
  const member = house.people.find(
    (member) => member.id.toString() === memberId
  )

  return (
    <div className="page">
      <div className="header">
        <h2>
          <a
            href={`https://awoiaf.westeros.org/index.php/${member.wikiSuffix}`}
          >
            {member.name}
          </a>
        </h2>
      </div>
      <div className="desc">{member.description}</div>
    </div>
  )
}

export default Member
