
import Service from "./Service"


function Header(){
    const services=[
        {
            Title:"Web Development",
            Description:"irfowr dffjof dfjoiaff odfef dfjiojf dfj fiowjfwjf ejfkldjfo efjdfow ff;f odfhwff uwf whf dofhwuof;wh fwdf;owhefjhwof ",
            image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSssKUUbEbFZNBlNCmn7ljr-xV3-cu0ZcnwDpHrO0alhMo_H_7s5fldl0ehJ2Pgi4wzdc&usqp=CAU"
        },    
        {
            Title:"App Development",
            Description:"irfowr dffjof dfjoiaff odfef dfjiojf dfj fiowjfwjf ejfkldjfo efjdfow ff;f odfhwff uwf whf dofhwuof;wh fwdf;owhefjhwof ",
            image : "https://analyticsinsight.b-cdn.net/wp-content/uploads/2020/11/Artificial-Intelligence-5.jpg"
        },   
         {
            Title:"Web Development",
            Description:"irfowr dffjof dfjoiaff odfef dfjiojf dfj fiowjfwjf ejfkldjfo efjdfow ff;f odfhwff uwf whf dofhwuof;wh fwdf;owhefjhwof ",
            image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSssKUUbEbFZNBlNCmn7ljr-xV3-cu0ZcnwDpHrO0alhMo_H_7s5fldl0ehJ2Pgi4wzdc&usqp=CAU"
        },    
        
        {
            Title:"App Development",
            Description:"irfowr dffjof dfjoiaff odfef dfjiojf dfj fiowjfwjf ejfkldjfo efjdfow ff;f odfhwff uwf whf dofhwuof;wh fwdf;owhefjhwof ",
            image : "https://analyticsinsight.b-cdn.net/wp-content/uploads/2020/11/Artificial-Intelligence-5.jpg"
        }       
    ]
    

    return(
        <div>
            <h1 style={{marginLeft:"15% "}}>All services</h1>
            <div className="container">
                {
                    services.map((service,index)=>(
                        <Service key={index} Title={service.Title} Description={service.Description} image = {service.image}/>
                    ))
                }
            </div>
        </div>


          
    )
}


export default Header;