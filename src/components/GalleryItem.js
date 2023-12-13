import { useState } from 'react'


// Having trouble getting tailwind cards to work; will need to continue troubleshooting next time
function GalleryItem(props) {
    let [view, setView] = useState(false)

    function HandleClick() {
        window.scroll(0, 0);
    }

    const dateOptions = {
        year: "numeric",
        month: "short",
        day: "numeric",
        timeZone: "UTC",
      };
    
    
    const simpleView = () => {
        return (
            <ul className="bg-gray-600 mb-8 flex justify-center items-center overflow-hidden h-[50px] outline outline-offset-2 outline-2 hover:outline-pink-500 drop-shadow-md mx-3 rounded flex-1 w-64 flex-wrap">
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2 p-1">
                    <div className="card bg-dark text-white border-secondary d-flex flex-column h-100"> 
                        <div className="card-body text-center">
                            <h5 className="card-title text-white">{props.item.trackName}</h5>
                            <p className="card-text text-secondary font-mono">
                                {props.item.artistName}
                            </p>
                        </div>
                    </div>
                </div>
            </ul>
        )
    }

    const detailView = () => {
        return (
            <ul className="bg-gray-600 mb-8 flex justify-center items-center overflow-hidden h-[350px] outline outline-offset-2 outline-2 hover:outline-pink-500 drop-shadow-md mx-3 rounded">
             
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <div className="card bg-dark text-white border-secondary d-flex flex-column h-100">
                        <img
                        className="h-96 w-full object-cover object-center lg:h-full lg:w-full"
                        src={props.item.artworkUrl100}
                        alt={props.item.trackName}
                        />
                        <div className="card-body text-center">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 mb-2">{props.item.trackName}</h5>
                            <h6 className="card-title text-white">{props.item.artistName}</h6>
{/*                             <p className="card-text text-secondary">
                                {new Date(props.item.releaseDate).toLocaleDateString(
                                    "en-US",
                                    dateOptions
                                )}
                            </p> */}
                        
                            <button
                            className="btn btn-outline-light mt-2 font-mono"
                            onClick={HandleClick}
                            >
                            View More
                            </button>
                        
                        </div>
                    </div>
                </div>
                
            </ul>
            /* <ul className="list-unstyled d-flex flex-wrap justify-content-center align-items-stretch">
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2 p-1">{props.item.trackName}
                    <div className="card bg-dark text-white border-secondary d-flex flex-column h-100">
                        <img
                            className="card-img-top flex-grow-1"
                            src={props.item.artworkUrl100}
                            alt={props.item.trackName}
                        />
                        <div className="card-body text-center">
                            <h5 className="card-title text-white">{props.item.trackName}</h5>
                            <p className="card-text text-secondary">
                                {props.item.releaseDate}
                            </p>
                        </div>
                    </div>
                </div>
                <h3>{props.item.collectionName}</h3>
                <h4>{props.item.primaryGenreName}</h4>
                <h4>{props.item.releaseDate}</h4>
            </ul> */
        )
    }

    return (
        <div onClick={() => setView(!view)}
        style={{'display': 'inline-block'}}>
        
            {/* This simple ternary shows the simple view when 'view' is false! */}
            {view ? detailView() : simpleView()}

        </div>
    )

}
export default GalleryItem
