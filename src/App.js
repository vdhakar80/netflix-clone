import "./css/App.css";
import request from "./request";
import Row from "./component/Row";
import Banner from "./component/Banner";
import Nav from "./component/Nav";
// import About from "./component/About";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title={"NETFLIX ORIGINALS"}
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title={"Trending"} fetchUrl={request.fetchTrending} />
      <Row title={"Top Rated"} fetchUrl={request.fetchTopRated} />
      <Row title={"Action Movies"} fetchUrl={request.fetchActionMovies} />
      <Row title={"Comedy Movies"} fetchUrl={request.fetchComedyMovies} />
      <Row title={"Horror Movies"} fetchUrl={request.fetchHorrorMovies} />
      <Row title={"Romance Movies"} fetchUrl={request.fetchRomanceMovies} />
      <Row title={"Documentaries"} fetchUrl={request.fetchDocumentaries} />
      {/* <About /> */}
    </div>
  );
}

export default App;
