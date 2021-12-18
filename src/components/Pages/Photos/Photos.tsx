
import './Photos.scss';
import { Parallax } from 'react-parallax';
import { PhotoItems } from './PhotoItems';

export default function Photos() {
    return (
        <div className="photos">
            <Parallax className="image" bgImage={process.env.PUBLIC_URL + './photos/lasvegas.jpg'}>
                <div className="text-container">
                    <div className="text">Photos</div>
                </div>
            </Parallax>
            <ul className="list-container">
                <div className="body-container">
                    {PhotoItems.map((item, index) => {
                        return (
                            <div className="image-container">
                                <img onClick={() => window.open(process.env.PUBLIC_URL + `./photos/${item.img}`)} className="body-image" src={process.env.PUBLIC_URL + `./photos/${item.img}`} />
                            </div>
                        )
                    })}
                </div>
            </ul>
        </div>
    )
}
