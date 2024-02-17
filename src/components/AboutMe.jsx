import backgroundimage from '../assets/images/backgroundimage2.jpg';
import aboutmeimage from '../assets/images/aboutme3.jpg';

export default function AboutMe() {
    return (
        <section className="aboutmeSection">
            <div className="aboutmeContainer">
                <img className="backgroundImage" src={backgroundimage}/>
                <p className="aboutmeP"> Welcome to my homepage! My name is Wenmo Cui, a 2024 graduate from UCB extension coding bootcamp. My skillsets include node, express, MongoDB, react. Looking forward to connect with fellow developers! <br/> <br/>
                </p>
                <img className="aboutmeImage" src={aboutmeimage}/>
            </div>
        </section>
    )
}