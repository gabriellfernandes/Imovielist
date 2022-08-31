import { LoginForm } from "./pages/login";

function App() {
  //const [filme, setfilme] = useState<responseTrailer>({} as responseTrailer)

  //apiTMDb.get(`/movie/top_rated${api_keyTMDb}`).then(res => console.log(res.data))
  //apiIMDB.get(`https://imdb-api.com/API/Search/${api_keyIMDb}/lost 2004`).then(res => setfilme(res.data))
  return (
  <div>
    <LoginForm />
  </div>
  );
}

export default App;
