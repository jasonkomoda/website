import React from 'react';
import './Photos.scss';
import { PhotoItem } from './PhotoItems';

interface PhotoTemplateProps {
    photos: PhotoItem[];
}

const photosPath = process.env.PUBLIC_URL + './photos';

const PhotoTemplate: React.FC<PhotoTemplateProps> = ({ photos }) => {
    return (
        <div className="body-container">
            {photos.map((item) => {
                return (
                    <div className="image-container">
                        <img onClick={() => window.open(`${photosPath}/${item.img}`)} className="body-image"
                            src={`${photosPath}/${item.img}`} alt={item.img} />
                    </div>
                )
            })}
        </div>
    );
};

export default PhotoTemplate;
