function Card(props){
    return(
        <div className= "card">
            <div className="card-img">
                <img src= {props.Image}></img>
            </div>
            <h1 className = "card-Title">{props.Title}</h1>
            <h3 className= "card-Subtitle">{props.Subtitle}</h3>
            <p className= "card-Desc">{props.Desc}</p>
            <p className= "btn-parent">
                <button className="card-btn">Read More</button>
            </p>

        </div>

    )
}




export default Card;