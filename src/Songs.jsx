// PopularSongs.jsx
export default function ArtistsSongs({ songURL }) {
  return (
    <div style={{ maxWidth: 520 }}>
      <iframe
        data-testid="embed-iframe"
        style={{ borderRadius: '12px' }}
        src={songURL}
        width="100%"
        height="152"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
      
    </div>
  );
}
