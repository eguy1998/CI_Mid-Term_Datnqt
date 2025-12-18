import { useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './App.css';
import { movies } from './datas/movies';
import Banner from './components/Banner';
import MovieCard from './components/MovieCard';

function App() {
  // 2.1 Sử dụng State lưu trữ dữ liệu - State to store selected movie
  // Banner ban đầu hiển thị movie có id="1"
  const [selectedMovie, setSelectedMovie] = useState(movies.find(m => m.id === "1"));
  const [searchQuery, setSearchQuery] = useState('');

  // Handler for movie card click
  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    // Scroll to top to show the banner
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Lọc ra các movies không phải là movie đang hiển thị ở banner (6 movies còn lại)
  // const displayMovies = movies.filter(movie => movie.id !== selectedMovie?.id);
  const displayMovies = movies.filter(movie => movie.id !== "1");


  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <h1 className="logo">Anonime</h1>
          <nav className="nav">
            <a href="#" className="nav-link active">Home</a>
          </nav>
          <nav className="nav">
            <a href="#" className="nav-link">List anime</a>
          </nav>
          <TextField
            variant="outlined"
            placeholder="Search anime or movie"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'rgba(255, 255, 255, 0.5)' }} />
                </InputAdornment>
              ),
              sx: {
                color: 'white',
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: '37px',
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },
                height: '48px',
                paddingLeft: '18px',
              },
            }}
            sx={{
              width: '374.5px',
              '& .MuiInputBase-input::placeholder': {
                color: 'rgba(255, 255, 255, 0.5)',
                opacity: 1,
              },
            }}
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Explore Section */}
        <section className="explore-section">
          <h2 className="section-title">Explore</h2>
          <p className="section-subtitle">What are you gonna watch today ?</p>
          {/* 2.2 Sử dụng Props để hiển thị thông tin bộ phim */}
          <Banner movie={selectedMovie} />
        </section>

        {/* New Release Section */}
        <section className="new-release-section">
          <h2 className="section-title">New Release</h2>
          <div className="movie-grid">
            {displayMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onClick={() => handleMovieClick(movie)}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
