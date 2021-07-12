import { useEffect } from "react";
import { Button } from "./Button";

interface SideBarProps {
  genres: Array<GenresProps>,
  selectedGenreId: number,
  updateSelectedGenreId: (currentGenreId: number) => void
}
interface GenresProps {
  id: number;
  title: string;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
}

export function SideBar({ genres, selectedGenreId, updateSelectedGenreId }: SideBarProps) {

  function handleClickButton(id: number) {
    updateSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>

  )
}