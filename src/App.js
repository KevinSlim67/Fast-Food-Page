import './App.css';
import Header from './components/header';
import MainPage from './components/main_page/main_page';
import NavBar from './components/navbar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <MainPage />
    </div>
  );
}

export default App;
