const API_Key = '3ce63eea477043d7a470d2b21dc5ab4b';
const BASE_URL = 'http://newsapi.org/v2/';
export default class newsApi  {
    constructor (){
        this.searchQuery = '',
        this.page = 1
    }

    fetchArticles(){
        return fetch(`${BASE_URL}everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}&apiKey=${API_Key}`)
        .then(response=>response.json())
        .then(data=>data.articles)
        .then(articles=>articles)
        }
    increasePage(){
        this.page +=1
    }

    resetPage(){
        this.page = 1
    }
}