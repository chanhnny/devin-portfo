import './footer.css'

const Footer = () => {
    return (
        <>
        <footer className="site-footer" id="footer">
            <div className="footer-header">
                <p>More about me</p>
            </div>

            <div className="footer-columns">
                <div className="footer-column">
                <h3>Hobbies</h3>
                <ul>
                    <li>Basketball</li>
                    <li>Cooking</li>
                    <li>Fitness</li>
                    <li></li>
                </ul>
                </div>

                <div className="footer-column">
                <h3>Favorite TV Shows</h3>
                <ul>
                    <li>Teenage Mutant Ninja Turtles</li>
                    <li>Dragon Ball Z</li>
                    <li>Gordon Ramsay</li>
                    <li>You</li>
                </ul>
                </div>

                <div className="footer-column">
                <h3>Fun Facts</h3>
                <ul>
                    <li>I only drink water</li>
                    <li>Favorite Food : Fried Chicken</li>
                    <li>Number One Artist : Gracie Abrams</li>
                </ul>
                </div>

                <div className="footer-column">
                <h3>Mindset</h3>
                <ul>
                    <li>Work hard, then play hard</li>
                    <li>Don't regret, don't stress</li>
                    <li>Learn from every experience</li>
                    <li>Do my best, then do better</li>
                </ul>
                </div>
            </div>
        </footer>
        </>
    );
}

export default Footer;