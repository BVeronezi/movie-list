import { MovieCard } from "./MovieCard";
import { Header } from "./Header";
interface ContentProps {
  title: string;
  movies: Array<MovieProps>
}
interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function Content({ title, movies }: ContentProps) {
  return (
    <div className="container">
      <Header title={title} />

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}
