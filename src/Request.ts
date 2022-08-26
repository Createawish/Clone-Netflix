import {LANGUAGE} from "./constants/contstants";

export  const requests = {
    requestPopular: `${process.env.REACT_APP_BASE_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=${LANGUAGE}&page=1`,
    requestTopRated:`${process.env.REACT_APP_BASE_URL}/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=${LANGUAGE}&page=1`,
    requestTrending:`${process.env.REACT_APP_BASE_URL}/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`,
    requestHorror:`${process.env.REACT_APP_BASE_URL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=${LANGUAGE}&query=horror&page=1&include_adult=false`,
    requestUpcoming:`${process.env.REACT_APP_BASE_URL}/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=${LANGUAGE}&page=1`
  }
