import React from 'react';

const PersonCard = (props) => {

  const [count, setCount] = React.useState(props.age)

  const addAge = () => setCount(count + 1)

  return (
    <>
      <h1>{props.name}, {props.lastname}</h1>
      <p>Age: {count}</p>
      <p>Hair Color: {props.hair}</p>
      <button onClick={addAge}>
        Birthday Button for {props.name} {props.lastname}
      </button>
    </>
  );
};

export default PersonCard;


