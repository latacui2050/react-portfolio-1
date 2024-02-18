export default function Resume() {

    const onButtonClick = () => {
        const pdfUrl = "https://docs.google.com/document/d/1XcWj6uXS1KWUvlTymWXYHEC6JJoTi4oo/edit?usp=sharing&ouid=111085412982604816744&rtpof=true&sd=true";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "wenmocuiresume"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="resumeSection">
            <div className="resumeDiv">
                <h2 className="resumeH">download my resume here:</h2>
                <button className="Button" onClick={onButtonClick}>Download PDF</button>
            </div>
        </section>
    )
}