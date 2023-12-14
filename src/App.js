import { useEffect, useState } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'

import "./index.css"


const App = () => {
  let [search, setSearch] = useState('')
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState([])

  const API_URL = 'https://itunes.apple.com/search?term='

  useEffect(() => {
      if(search) {
          const fetchData = async () => {
              document.title = `${search} music`
              const response = await fetch(API_URL + search)
              const resData = await response.json()
              if (resData.results.length > 0) {
                  return setData(resData.results)
              } else {
                  return setMessage('Not Found.')
              }
          }
          fetchData()
      }
  }, [search])

  const handleSearch = (e, term) => {
      e.preventDefault()
      setSearch(term)
  }

  return (
      <div className="flex bg-fuchsia-950">
          <SearchBar handleSearch={handleSearch} message={message} className="flex flex: 1 1 30% fixed"/>
          {/* <div className="ml-5 mb-5">{message}</div> */}
          <Gallery data={data} className="flex flex-grow flex: 1 1 70% relative overscroll-contain"/>
      </div>
  )
}

export default App

