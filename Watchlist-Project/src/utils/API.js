import axios from "axios";

const BASEURL = "https://api.tvmaze.com/";
const BASEURL2 = "https://www.omdbapi.com/?t=";
const APIKEY = "&apikey=2f91d296";
// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + "search/shows?q=" + query);
  },
  getShowDetails: function (showOmbd) {
    return axios.get(BASEURL2 + showOmbd + APIKEY)
  }
};