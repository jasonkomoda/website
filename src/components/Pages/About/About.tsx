
import './About.scss';

export default function About() {
    return (
        <div className="about">
            <h3 className="title">Software Developer</h3>
            <p className="intro">
                Welcome to my page! I'm a motivated software developer that enjoys taking on new challenges and ideas to grow as a programmer.
                I received my BS in Computer Science (with a focus on game development) from the University of Denver, along with minors in Mathematics and Emergent Digital
                Practices (Electronic Art). I consider myself a full-stack engineer with a lot of experience in Typescript/Javascript, Go, React, Angular, Docker and Kubernetes.
                I take pride in my ability to learn and adapt quickly in order to produce quality applications. Playing a lot of video games growing up made me
                get curious about game development and programming in general. I realized creating real-world, meaningful applications is just as cool as creating games.
                I was born and raised on the island of Oahu, Hawaii, went to school in Denver, CO and now currently reside in Henderson, Nevada.
                When I'm away from my computer I really enjoy golfing, working out, hanging out with friends and relaxing with my dog.
            </p>
            <div className="container">
                <div className="image-container">
                    <img className="image" src={process.env.PUBLIC_URL + './photos/selfie.jpeg'} alt="selfie.jpg" />
                </div>
                <div className="body-container">
                    <p>
                        Feel free to reach out to me:
                        <br></br><br></br>
                        <div>
                            <div className="contact-container">
                                <div>
                                    <img src={process.env.PUBLIC_URL + './photos/phone.png'} alt="phone.png" />
                                    <p>(808)-389-3619</p>
                                </div>
                                <div>
                                    <img src={process.env.PUBLIC_URL + './photos/mail.png'} alt="mail.png" />
                                    <a href="mailto: jason.komoda@gmail.com">jason.komoda@gmail.com</a>
                                </div>
                                <div>
                                    <img src={process.env.PUBLIC_URL + './photos/linkedin.png'} alt="linkedin.png" />
                                    <a href="https://www.linkedin.com/in/jasonkomoda/" >LinkedIn</a>
                                </div>
                                <div>
                                    <img src={process.env.PUBLIC_URL + './photos/github.png'} alt="github.png" />
                                    <a href="https://github.com/jkomoda/">Github</a>
                                </div>
                                <div>
                                    <img src={process.env.PUBLIC_URL + './photos/resume.png'} alt="resume.png" />
                                    <a href={process.env.PUBLIC_URL + './files/JasonKomodaResume.pdf'} target="_blank"
                                        rel="noopener noreferrer" >Resume</a>
                                </div>
                            </div>
                        </div>
                    </p>
                </div>
            </div>
        </div>
    )
}
