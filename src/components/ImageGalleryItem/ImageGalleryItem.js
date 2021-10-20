import './imageGalleryItem.css'

export default function ImageGalleryItem({ image, openModal }) {
    
    return (
        <li
            className="ImageGalleryItem"
            onClick={() => openModal(image.largeImageURL)}>
                
            <img
                src={image.webformatURL}
                alt=""
                className="ImageGalleryItem-image"
            />
        </li>
    )
}
