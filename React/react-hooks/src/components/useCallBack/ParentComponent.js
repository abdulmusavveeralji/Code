import React, { useCallback, useState } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";
function ParentComponent({ text, cb }) {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(1000);

  const increaseAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const increaseSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);
  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button text="Age" cb={increaseAge} />
      <Count text="Salary" count={salary} />
      <Button text="Salary" cb={increaseSalary} />
    </div>
  );
}

export default ParentComponent;
