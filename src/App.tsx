
import NavBar from './components/NavBar';
import './App.css'
import ProgressContextProvider from './context/ProgressContext';
import ThemeContextProvider from './context/ThemeContext';
import ToggleTheme from './components/ToggleTheme';

function App() {
  return (
    <ThemeContextProvider>
    <div className="App">
      <ProgressContextProvider>

      <NavBar />
      </ProgressContextProvider>
      <ToggleTheme/>
    </div>
    </ThemeContextProvider>
  );
}

export default App;
