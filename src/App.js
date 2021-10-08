import logo from './logo.svg';
import './App.css';
import { Settings } from './components/Settings';


function App() {
    const [settings, setSettings] = useState([]);
    const [inGame, setInGame] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            {!inGame && <Settings></Settings>}
        </div>
    );
}

export default App;