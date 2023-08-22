// UploadedTracks component
interface Track {
  id: number;
  name: string;
  uploadDate: string;
  length: string;
}

interface UploadedTracksProps {
  tracks: Track[];
}

const UploadedTracks: React.FC<UploadedTracksProps> = ({ tracks }) => {
  return (
    <div className="rounded-lg bg-blue-500 p-4 text-white shadow-md">
      <h2 className="mb-2 text-xl font-bold">Your Uploaded Tracks</h2>
      {tracks.map((track) => (
        <div key={track.id}>
          <h3>{track.name}</h3>
          <p>Upload Date: {track.uploadDate}</p>
          <p>Length: {track.length}</p>
          {/* Add buttons or links for play/download */}
        </div>
      ))}
    </div>
  );
};

export default UploadedTracks;
