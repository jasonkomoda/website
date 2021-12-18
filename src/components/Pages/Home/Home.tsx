
import './Home.scss';
import { Parallax } from 'react-parallax';

export default function Home() {
    return (
        <div className="home">
            <Parallax className="image" bgImage={process.env.PUBLIC_URL + './photos/hawaii.jpg'}>
                <div className="container">
                    <div className="text">Jason Komoda</div>
                </div>
            </Parallax>
        </div>
    )
}
