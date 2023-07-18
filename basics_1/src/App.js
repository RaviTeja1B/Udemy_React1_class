import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';


function App(){
    return(
        <div> 
            <div>
                Personal Digital Assistants
            </div>
            <ProfileCard title='Alexa' handle ='@alexa' image={AlexaImage}/>
            <ProfileCard title='Cortana' handle ='@Cortana' image={CortanaImage}/>
            <ProfileCard title='Siri' handle ='@siri' image={SiriImage}/> 
        </div>
    )
}
export default App

//Install the Bulma for the CSS to add in the React.js

