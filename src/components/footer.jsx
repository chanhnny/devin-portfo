import './footer.css'

const Footer = () => {
    return (
        <>
        <footer className="site-footer" id="footer">
            <div className="footer-header">
                <p>Q & A</p>
            </div>

            <div className="footer-columns">
                <div className="footer-column">
                <h3>Why Software Engineering?</h3>
                <p>
                    Software engineering holds the power to change lives. 
                    My passion for innovation fuels me to take ideas from spark to reality, 
                    crafting tools that make a difference in how people live, learn, and connect.
                </p>
                </div>

                <div className="footer-column">
                <h3>What keeps me going?</h3>
                <p>
                   What keeps me going is the constant evolution of technology. 
                   Each new challenge, tool, or problem is a chance to push myself 
                   further. I will adapt and prove that I can succeed.
                </p>
                </div>

                <div className="footer-column">
                <h3>How do I handle difficult challenges?</h3>
                <p>
                    Challenges are only as difficult as I let them be. I  
                    organize a clear plan, break the task into smaller pieces, 
                    and make sure I understand the problem fully. From there, I stay 
                    focused, adapt to changes as they come, and push forward with determination.
                </p>
                </div>

                <div className="footer-column">
                <h3>What makes a team?</h3>
                <p>
                    I believe a successful team is built on collaboration, communication, and trust. 
                    When coworkers enjoy working with each other, the energy is different. Ideas flow
                    more freely, feedback is constructive, and everyone is motivated to do their best work.
                    Teamwork is the KEY to success.
                </p>
                </div>
            </div>
        </footer>
        </>
    );
}

export default Footer;