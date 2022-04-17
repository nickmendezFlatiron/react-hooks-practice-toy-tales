import {React , useState} from "react";

function ToyCard({toy, onDeleteToy}) {

  const {name , image , likes , id} = toy
  const [likeUpdate , setLikeUpdate] = useState(likes)
  

  function handleDelete() {
    fetch(`http://localhost:3001/toys/${id}` , {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(onDeleteToy(toy))
  }
  function handleLikes(){
    setLikeUpdate(likeUpdate => likeUpdate + 1)
    fetch(`http://localhost:3001/toys/${id}` ,{
      method: "PATCH",
      headers: {"Content-Type" : 'application/json'} ,
      body: JSON.stringify({likes : likeUpdate})
    })
    .then(res => res.json())
  }
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likeUpdate} Likes </p>
      <button className="like-btn" onClick={handleLikes}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete} >Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
