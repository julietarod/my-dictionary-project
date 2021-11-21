import "./App.css";

import dictionarylogo from "./dictionarylogo.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={dictionarylogo} className="app-logo img-fluid" alt="logo" />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="text-center">
        <small>Coded by Julieta Rod</small>
      </footer>
    </div>
  );
}
