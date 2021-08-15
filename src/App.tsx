
import NavBar from './components/NavBar';
import './App.css'
import ProgressContextProvider from './context/ProgressContext';
import ThemeContextProvider from './context/ThemeContext';
import ToggleTheme from './components/ToggleTheme';
import MovieContextProvider from './context/MoviesContext';
import Movie from './components/Movie';

function App() {
  return (
    <MovieContextProvider>
    <ThemeContextProvider>
    <div className="App">
      <ProgressContextProvider>

      <NavBar />
      <Movie/>
      </ProgressContextProvider>
      <ToggleTheme/>
    </div>
    </ThemeContextProvider>
    </MovieContextProvider>
  );
}

export default App;
