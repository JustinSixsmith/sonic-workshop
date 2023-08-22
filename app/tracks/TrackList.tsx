import { Track } from "@/typings";
import Link from "next/link";

const fetchTracks = async () => {
  const res = await fetch("https://64c4022067cfdca3b6608e88.mockapi.io/track");
  const tracks: Track[] = await res.json();
  return tracks;
};

async function TrackList() {
  const tracks = await fetchTracks();

  return (
    <>
      {tracks.map((track) => (
        // eslint-disable-next-line react/jsx-key
        <p>
          <Link href={`/tracks/${track.id}`}>Track name: {track.name}</Link>
        </p>
      ))}
    </>
  );
}

export default TrackList;
