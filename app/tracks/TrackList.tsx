import { Track } from "@/typings";
import Link from "next/link";
import Footer from "../Footer";

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
        <p key={track.id}>
          <Link href={`/tracks/${track.id}`}>Track name: {track.name}</Link>
        </p>
      ))}
      <Footer />
    </>
  );
}

export default TrackList;
