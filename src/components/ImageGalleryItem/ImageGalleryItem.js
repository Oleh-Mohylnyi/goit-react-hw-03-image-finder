import './imageGalleryItem.css'

export default function ImageGalleryItem({ image, openModal }) {
    
    const largeImageURL = image.largeImageURL
    function clickImage() {
        openModal(largeImageURL)
    }
    
    return (
        <li
            className="ImageGalleryItem"
            onClick={clickImage}>
                
            <img
                src={image.webformatURL}
                alt=""
                className="ImageGalleryItem-image"
            />
        </li>
    )
}
