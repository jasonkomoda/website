
import { Parallax } from 'react-parallax';
import { icons, photos } from './PhotoItems';
import FlagLabel from './FlagLabel';
import PhotoTemplate from './PhotoTemplate';

const photosPath = process.env.PUBLIC_URL + './photos';

export default function Photos() {
    return (
        <div className="photos">
            <Parallax className="image" bgImage={`${photosPath}/lasvegas.jpg`}>
                <div className="text-container">
                    <div className="text">Photos</div>
                </div>
            </Parallax>
            <ul className="list-container">
                <FlagLabel
                    label="Thailand"
                    flagUrl={`${photosPath}/${icons.thailandFlag}`}
                />
                <PhotoTemplate photos={photos.thailand} />
                <FlagLabel
                    label="Japan"
                    flagUrl={`${photosPath}/${icons.japanFlag}`}
                />
                <PhotoTemplate photos={photos.japan} />
                <FlagLabel
                    label="Spain"
                    flagUrl={`${photosPath}/${icons.spainFlag}`}
                />
                <PhotoTemplate photos={photos.spain} />
                <FlagLabel
                    label="Doggo"
                    flagUrl={`${photosPath}/${icons.dog}`}
                />
                <PhotoTemplate photos={photos.personal} />
            </ul>
        </div>
    )
}
