import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const BookImage = ({ image }: { image: any }) => (
    <LazyLoadImage
        alt={image.alt}
        width={image.width}
        src={image.src} />
);

export default BookImage