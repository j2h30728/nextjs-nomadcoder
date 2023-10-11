import Seo from "@/components/Seo";
import { useEffect, useState } from "react";

const API_KEY = "08192788a8e5af154550148c8022e396";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      // response.results => 구조분해할당으로 {results} 사용
      const { results } = await (await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)).json();
      setMovies(results);
    })();
  }, []);

  return (
    <div className="container">
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-8px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
