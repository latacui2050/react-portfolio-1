import culinaryimage from '../assets/images/';
import weatherimage from '../assets/images/';
import quizimage from '../assets/images/';
import moviemiximage from '../assets/images/';
import portfolioimage from '../assets/images/';
import skillmagnetimage from '../assets/images/';

const projects = [
    {
        title: "Culinary Connect",
        image: culinaryimage,
        github: "https://github.com/quar-tech/mvc-recipe-sharing",
        site: "https://mvc-culinary-connect-e00ad0e3e10d.herokuapp.com/"
    },
    {
        title: "SkillMagnet",
        image: skillmagnetimage,
        github: "",
        site: "https://full-stack-service-app.onrender.com/"
    },
    {
        title: "Timed Quiz",
        image: quizimage,
        github: "",
        site: ""
    },
    {
        title: "Movie Mix & Sip",
        image: moviemiximage,
        github: "",
        site: "https://ucb-allstars-project-1.github.io/movie-cocktail-combo/"
    },
    {
        title: "My First Portfolio",
        image: portfolioimage,
        github: "",
        site: ""
    },
    {
        title: "Weather Forecast",
        image: weatherimage,
        github: "",
        site: ""
    }
]



export default function Portfolio() {
    return (
        <section className="portfolio">
            <div className="portfolioGrid">
                {projects.map((project) => (
                    <div className="portfolioDiv" key={project.title}>
                        <h2>{project.title}</h2>
                        <img className="portfolioCards" src={project.image} alt="culinary connect"/>
                        <div className="portfolioLinks">
                            <a href={project.github}>GitHub</a>
                            <a href={project.site}>Live Site</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
