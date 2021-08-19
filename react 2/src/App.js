
import './App.css';
import Card  from './card'




function App() {
  const Olympics=[
    {
      Title: " Neeraj chopra Gold Medal",
      Subtitle: " Javelin throw ",
      Desc: " Naveen Chopra hurled an astonishing throw of 86.58 and no one could beat that. He won a gold medal for India in Tokyo Olympics 2021 and Indians waited for a long time for this moment.",
      Image:" https://akm-img-a-in.tosshub.com/indiatoday/images/story/202108/AP21219462944826_1200x768.jpeg?MxySq3g0tSlHuHuz.A_tzU5Tds86JwmQ&size=770:433",


    },
    {
      Title: " Ravi Kumar Dahiya Silver Medal",
      Subtitle: "Wrestling (57 KG) ",
      Desc: " Ravi Kumar Dahiya made it to the final but could not fetch the gold. But he managed to get India a Silver medal in the Tokyo Olympics. His semifinal match was worth appreciation. How he pinned his opponent even when the opponent was biting his hand will be spoken in stories for years.",
      Image:"https://images.firstpost.com/wp-content/uploads/2021/08/2-Ravi-Kumar-Dahiya-silver-Tokyo-AP-640.jpg ",


    },
    {
      Title: " Mirabai Chanu Silver Medal",
      Subtitle: " Weight Lifting (49 Kg Women)",
      Desc: "Mirabai Chanu showed how you can be what you want to be. No matter the situation, she worked hard for her career. She used to go to her stadium by taking lifts from the trucks and how she won a medal for India will be remembered forever. We are proud of you girl. ",
      Image:" https://akm-img-a-in.tosshub.com/indiatoday/images/story/202108/WhatsApp_Image_2021-08-05_at_1_2.jpeg?lpSkJzsaQNI.mbjDkxw.5Xbp00DSjdin&size=770:433",


    },
    {
      Title: "PV Sindhu Bronze Medal ",
      Subtitle: " Women’s Singles Badminton",
      Desc: " PV Sindhu became the first Indian female athlete to win 2 silver medals in the Olympic games. She did it with pure dedication and hard work. She has much more to conquer and we want her to touch new heights.",
      Image:" https://images.news18.com/ibnlive/uploads/2021/08/1627829463_pv-sindhu-olympics-bronze-1200x800.jpg?impolicy=website&width=510&height=356",


    },
    {
      Title: " Bajrang Punia Bronze Medal",
      Subtitle: "Wrestling (65 Kg) ",
      Desc: " Bajrang Punia is one of the best wrestlers in India and the world. He has won many Gold medals for India in various events. This time he brought home the Bronze Medal for India in Tokyo Olympics.",
      Image:"https://images.news18.com/ibnlive/uploads/2021/06/1624714868_bajrang-punia.jpg?impolicy=website&width=510&height=356",


    },
    
  ];


  return (
    <div className="App">
      <h1>Tokyo Olympics 2021</h1>
      <br>
      </br>
      <div className= "container">
        {
        Olympics.map((service,index)=>(
          <Card key={index} Title= {service.Title} Subtitle={service.Subtitle}
          Desc={service.Desc} Image={service.Image} />


        )

        )

        }

      </div>
      <Card/>

     


     
   

    </div>
  );
}

export default App;
