import "./Card.css";

function Card({name="Not Found", buttonValue="Not Found"}) {
  return (
    <>
        <div className="card-container">
            <div className="heading">
                <h2>{name}</h2>
            </div>
            <div className="image">
                <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ_Zuz3haRHrSz0f3bnMlUTGa14Qc7Z5LLQ3-l04P98hv9CMXQU" alt="Google Image" />
            </div>
            <div className="para">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, at!</p>
            </div>
            <div className="button">
                <button>{buttonValue}</button>
            </div>
        </div>
    </>
  )
}

export default Card