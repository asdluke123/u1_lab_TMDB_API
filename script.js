const API_KEY = 'fbc30021976bc4996558f2195b2c5ad2'
const DOMAIN = 'https://api.themoviedb.org/3'
const IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/original'
const userText = document.querySelector('input');
const searchBtn = document.querySelector('button');
const movieList = document.querySelector('.movie-list')
let newInfo = document.createElement('p')
let title = document.querySelector('h1')

let value
//https://api.themoviedb.org/3/search/movie?query=[your search query]&api_key=${API_KEY}
searchBtn.addEventListener('click', async () =>{
    clearSearch()
    value = userText.value;
    let response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${value}&api_key=${API_KEY}`)
    renderList(response.data.results)
    userText.value = ' '
})

const renderList= (movie) =>{
    movie.forEach((e) =>{
    let newDiv = document.createElement('div')
    newDiv.classList.add('movieDiv');
    let newH3 = document.createElement('h3')
    let newPic = document.createElement('img');
    newPic.src = IMAGE_BASE_PATH + e.poster_path;
    newH3.innerText = e.title
    newPic.addEventListener('click',()=>{
        if(newInfo.innerText === ''){
        newInfo.innerText = e.overview
        title.append(newInfo);
        }else{
            newInfo.innerText = ''
            newInfo.innerText = e.overview
            title.append(newInfo);
        }
    })
    newDiv.append(newH3)
    newDiv.append(newPic);
    movieList.append(newDiv);
    
    })
}
const clearSearch = () =>{
    let list = movieList.querySelectorAll('div');
    if(list === null){}
    else{
    list.forEach((e)=>e.remove())
    }
}