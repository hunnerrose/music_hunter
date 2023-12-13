                
import { useState } from 'react'

function SearchBar(props){
    // We can comment out our searchTerm state variable as we are not using it!
    // let [searchTerm, setSearchTerm] = useState('')

    return (
        <div className="h-100 w-60 m-4 rounded bg-gray-300">
            <form className="p-4">
                <input type="text" placeholder="Search Here" className="block p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-violet-800 focus:border-violet-800 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-800 dark:focus:border-violet-800"
                    onChange={
                        (e) => props.handleSearch(e, e.target.value)
                    } />
                <input type="submit" className="p-1"/>
                
            </form> 
        </div>
    )
}

export default SearchBar

    