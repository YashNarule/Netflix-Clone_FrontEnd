
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINALS" 
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow={true}
      />
      <Row title="TERNDING NOW"fetchUrl={requests.fetchTrending}/>
      <Row title="TOP RATED"fetchUrl={requests.fetchTopRated}/>
      <Row title="ACTION MOVIES"fetchUrl={requests.fetchActionMovies}/>
      <Row title="COMEDY MOVIES"fetchUrl={requests.fetchComedyMovies}/>
      <Row title="HORROR"fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="ROMANCE MOVIE"fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="DOCUMENTARIES"fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
