import logo from './logo.svg';
import {useState} from "react"
import './App.css';
import { Settings } from './components/Settings';
import { Game } from './components/Game';


function App() {
    const [settings, setSettings] = useState([]);
    const [inGame, setInGame] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <div className={inGame?'pointer-events-none	fadeOut z-0':''}>
                <Settings setInGame={setInGame} setSettings={setSettings}></Settings>
            </div>

            <div className={'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' + (inGame?" fadeIn z-10":" opacity-0 pointer-events-none")}>
                <Game settings={settings}></Game>
            </div>

        </div>
    );
}

export default App;