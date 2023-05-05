import React from 'react';

export async function getServerSideProps() {
    const response = await fetch("https://api.weather.gov/gridpoints/MFL/109,49/forecast")
    const data = await response.json()
  
    return {
      props: {
        forecast: data.properties.periods[0].detailedForecast
      }
    }
  }

const LandingPage = (props) =>  {
    return (
       
        <div>
        <h2> This is Landing Page !!!</h2>
        <p>This is the best home page in the world. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum aspernatur illum architecto cumque recusandae fuga sequi necessitatibus deleniti repellat harum nobis, dolor veniam vero deserunt. Voluptatibus, ducimus deserunt. Recusandae, dolore.</p>
        <p>The weather: {props.forecast}</p>
      </div>
    )
}

export default LandingPage;