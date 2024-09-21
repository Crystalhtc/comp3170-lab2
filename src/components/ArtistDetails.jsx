export default function ArtistDetails({ artist }) {
    return (
        <div className="container">
            <div className="photo-container">
                <img className="photo" src={artist.photo_url} alt={artist.name}/>
            </div>
            <div className="text">
                <h2 className="name">{artist.name}</h2>
                <div className="info">
                    <p>{artist.country}</p>
                    <p>{artist.years_active}</p>
                </div>
            </div>
        </div>
    );
}
