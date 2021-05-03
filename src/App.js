import axios from "axios";
import Routes from "./routes";
import Header from "./components/header";

function App() {
  axios.defaults.baseURL = 'https://api.github.com/';

  return (<>
    <Header/>
    <Routes/>
  </>);
}

export default App;
