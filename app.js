const NYTBaseUrl = "https://api.nytimes.com/svc/search/v2/";
const ApiKey = "GHN0vR0Lc8fn9zlZcfTwKkM5LuM7Rwmw";

function buildUrl (url) {
  return NYTBaseUrl + url + ".json?api-key=" + ApiKey
}

const vm = new Vue({
  el: '#app',
  data: {
    results: []
  },
  mounted () {
    this.getPosts('articlesearch');
  },
  methods: {
    getPosts(section) {
      let url = buildUrl(section);
      axios.get(url).then((response) => {
        this.results = response;
        console.log(this.results)
      }).catch( error => { console.log(error); });
    }
  }
});