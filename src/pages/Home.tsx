import React from 'react'
import MoviePresentation from '../components/MoviePresentation'
import { listOfMovies } from '../shared/listOfMovie'

const Home = () => {
  return <MoviePresentation movies={listOfMovies} />
}

export default Home
