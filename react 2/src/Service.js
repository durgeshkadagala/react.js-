function Service(porps){
    return(
        <div className= "card">
            <div className= "card-img">
                <img src={porps.image} className= "card-image"/>
            </div>
            <h1 className="card-Title">
                {porps.Title}
            </h1>
            <p className="card-Description">
               {porps.Description}
            </p>
            <p className="btn-parent">
                <button className= "card-btn">
                    Read More
                </button>
            </p>
        </div>

    )
}


export default Service;