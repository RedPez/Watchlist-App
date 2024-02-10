import axios from "axios";

const BASEURL = "https://api.tvmaze.com/search/shows?q=";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  }
};