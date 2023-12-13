import GalleryItem from './GalleryItem'

function Gallery(props){

    const display = props.data.map((item, index) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })

    return (
        <div className="ml-3 mt-5 ">
        {display}
        </div>
    )
}


export default Gallery
