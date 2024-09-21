import { artists } from './best-selling-music-artists';
import ArtistDetails from './components/ArtistDetails';

function App() {
  const artistList = artists.map(artist => (
    <ArtistDetails key={artist.name} artist={artist} />
  ));

  return (
    <div className="app">
      <h1>Best-selling music artists</h1>
      <div className="content">
        {artistList}
      </div>
    </div>
  );
}

export default App;
