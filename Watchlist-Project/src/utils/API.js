import axios from "axios";

const BASEURL = "https://api.tvmaze.com/";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + "search/shows?q=" + query);
  },
  getShowSeasons: function (showID) {
    return axios.get(BASEURL + "shows/" + showID + "/seasons")
  }
};