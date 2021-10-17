import './imageGalleryItem.css'

export default function ImageGalleryItem({ images, openModal }) {
    
    function clickImage(e) {
        openModal(e.target.dataset.action)
        console.log(e.target.dataset.action)
    }
    
    return (
        <>
            {images.map((image) =>
            <li 
                className="ImageGalleryItem" 
                key={image.id}
                onClick={clickImage}>
                    <img
                        src={image.webformatURL}
                        alt=""
                        className="ImageGalleryItem-image"
                        data-action={image.largeImageURL}
                    />
            </li>)
            }
        </>
    )
}
