import React, {useState} from "react";
import Searchbar from "./Searchbar";
import DisplayCard from "./DisplayCard";
import API from "../utils/API";


const SearchResultContainer = () => {

    const [searchData, setSearchData] = useState({
        search: '',
        results: [],
    })


    const searchTvShow = async (query) => {
        try {
            const response =  await API.search(query)
            setSearchData({ ...searchData, results: response.data });
          } catch (error) {
           console.log(error)
          }
        }
        

    const handleInputChange = (event) => {
        const { name, value } = event.target

        setSearchData({
            ...searchData,
            [name]: value,
        })
    }

     // When the form is submitted, search the TVmaze API for `searchData.search`
    const handleSearchSubmit = (event) => {
        event.preventDefault()

        searchTvShow(searchData.search)
    }


  return (
    <div>
        <Searchbar 
        search={searchData.search}
        handleSearchSubmit={handleSearchSubmit}
        handleInputChange={handleInputChange}
        />

        <DisplayCard 
        results={searchData.results}
        />
    </div>
  )
}

export default SearchResultContainer