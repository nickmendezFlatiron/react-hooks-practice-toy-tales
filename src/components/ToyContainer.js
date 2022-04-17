import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, setToys}) {

  function handleDeleteToy(deletedToy){
    const updatedToys = toys.filter(toy => toy.id !== deletedToy.id)
    setToys(updatedToys)
  }

  const renderToys = toys.map(toy => <ToyCard toy={toy} key={toy.id} onDeleteToy={handleDeleteToy}/>)
  return (
    <div id="toy-collection">{renderToys}</div>
  );
}

export default ToyContainer;
