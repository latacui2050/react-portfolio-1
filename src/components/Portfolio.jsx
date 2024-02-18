import culinaryimage from '../assets/images/horiseon.jpg';
import weatherimage from '../assets/images/zodiac.jpg';
import quizimage from '../assets/images/quizwave.jpg';
import moviemiximage from '../assets/images/passgen.png';
import portfolioimage from '../assets/images/notetaker.jpg';
import skillmagnetimage from '../assets/images/texteditor.jpg';

const projects = [
    {
        title: "Code Factor",
        image: culinaryimage,
        github: "https://github.com/latacui2050/code-factor",
        site: "https://latacui2050.github.io/code-factor/"
    },
    {
        title: "Moira",
        image: skillmagnetimage,
        github: "https://github.com/JackW2023/Moira",
        site: "https://jackw2023.github.io/Moira/"
    },
    {
        title: "Quizwave",
        image: quizimage,
        github: "https://github.com/JackW2023/FlashCard-APP",
        site: "https://calm-island-50179-67f2dfd210f1.herokuapp.com/"
    },
    {
        title: "Password Generator",
        image: moviemiximage,
        github: "https://github.com/latacui2050/password-generator-homework/tree/gh-pages",
        site: "https://latacui2050.github.io/password-generator-homework/"
    },
    {
        title: "Note Taker",
        image: portfolioimage,
        github: "https://github.com/latacui2050/note-taker",
        site: "https://exs-note-taker-1e8b2846d5cf.herokuapp.com/"
    },
    {
        title: "Text Editor",
        image: weatherimage,
        github: "https://github.com/latacui2050/text-editor",
        site: "https://pwa-text-editor-dhr3.onrender.com/"
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
