import { useState } from "react";
import "./App.css";

function App() {
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    const audio = document.getElementById("bgAudio");
    audio.play()
      .then(() => setPlaying(true))
      .catch(err => console.log("Error al reproducir:", err));
  };

  return (
    <div className="App">
      <h1>🌌 Bienvenido al Naverse</h1>
      <p>Tu primera aventura digital comienza aquí: el Portal del Tiempo.</p>

      <img
        src="/portal-tiempo.png"
        alt="Portal del Tiempo"
        className="portal"
      />

      {!playing && (
        <button onClick={handlePlay}>✨ Activar Música del Portal ✨</button>
      )}

      <audio id="bgAudio" loop>
        <source src="/sounds/parque.mp3" type="audio/mp3" />
        Tu navegador no soporta audio HTML5.
      </audio>
    </div>
  );
}

export default App;
