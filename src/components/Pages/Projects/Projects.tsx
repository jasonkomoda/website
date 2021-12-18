
import './Projects.scss';
import { Parallax } from 'react-parallax';
import { ProjectItems } from './ProjectItems';

export default function Projects() {
    return (
        <div className="projects">
            <Parallax className="image" bgImage={process.env.PUBLIC_URL + './photos/colorado.jpg'}>
                <div className="text-container">
                    <div className="text">Projects</div>
                </div>
            </Parallax>
            <ul className="list-container">
                {ProjectItems.map((item, index) => {
                    return (
                        <li>
                            <div className="body-container">
                                <div className="body-image-container">
                                    <img className="body-image" src={process.env.PUBLIC_URL + `./photos/${item.img}`} />
                                </div>
                                <div className="body-text-container">
                                <a href={item.url}><em style={{fontSize: '25px'}}>{item.title}</em></a>
                                    <p className="body-text">{item.description}</p>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
