import ImageGalleryItem from '../ImageGalleryItem'
import React from 'react'
import './imageGallery.css'

export default function ImageGallery({ images, openModal }) {

    return (
        <>
            {images &&
                <ul className="ImageGallery" >
                    {images.map((image) =>
                        <ImageGalleryItem
                            key={image.id}
                            image={image}
                            openModal={openModal} />)
                    }
                </ul>}
        </>
    )
}