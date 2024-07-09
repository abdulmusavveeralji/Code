import React, { Component } from "react";
import Person from "./Person";

class ListElements extends Component {
  render() {
    const superHero = ["Bruce", "Clark", "Diana"];

    const persons = [
      { id: 1, name: "Bruce", age: 40, skill: "React" },
      { id: 2, name: "Clark", age: 34, skill: "Angular" },
      { id: 3, name: "Diana", age: 150, skill: "Vue" },
    ];

    const personsList = persons.map((person) => (
      <Person key={person.id} person={person} />
    ));

    return <ul>{personsList}</ul>;
  }
}

export default ListElements;
