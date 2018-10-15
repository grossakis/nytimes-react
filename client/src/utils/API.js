import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
const APIKEY = "&api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

export default {
  search: function(query) {
    return axios.get(BASEURL + APIKEY + "&q=" + query);
  },

  saveArticle: function(articleData) {
    return axios.post('/api/articles', articleData)
  }
};
