const API_KEY="0d321475f005df755fcb99e223e14774";
const BASE_URL="https://api.themoviedb.org/3";

export const getPopularMovies=async()=>{
    const response=await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    const data=await response.json();
    return data.results;
};

export const searchMovies=async(query)=>{
    const response=await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}`);
    const data=await response.json();
    return data.results;
}