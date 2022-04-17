import {React , useState} from "react";

function ToyForm({toys , setToys}) {

  const [toyName , setToyName] = useState('')
  const [toyUrl , setToyUrl] = useState('')

  function handleToyName(value){
    setToyName(value)
  }
  function handleToyUrl(url) {
    setToyUrl(url)
  }

  function handleSubmit(e){
    e.preventDefault()

    const newToy = {
      name: toyName ,
      image : toyUrl ,
      likes : 0 
    }

    fetch('http://localhost:3001/toys', {
      method: 'POST' ,
      headers: {
        "Content-Type": "application/json"
      } ,
      body: JSON.stringify(newToy)
    })
    .then(res => res.json())
    .then(() => {
      setToys([...toys , newToy])
      setToyName('')
      setToyUrl('')
      }
    )
  
}

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={toyName}
          onChange={(e) => handleToyName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={toyUrl}
          onChange={e => handleToyUrl(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
