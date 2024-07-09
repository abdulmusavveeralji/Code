import React from "react";

function Person({ person }) {
  return (
    <li>
      Im {person.name}, Im {person.age} years old, i know {person.skill}
    </li>
  );
}

export default Person;
