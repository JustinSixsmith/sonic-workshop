import { Track } from "@/typings";

type PageProps = {
  params: {
    trackId: string;
  };
};

const fetchTrack = async (trackId: string) => {
  const res = await fetch(
    `https://64c4022067cfdca3b6608e88.mockapi.io/track/${trackId}`,
    { next: { revalidate: 60 } },
  );

  const track: Track = await res.json();
  return track;
};

async function TrackPage({ params: { trackId } }: PageProps) {
  const track = await fetchTrack(trackId);

  return (
    <div className="m-2, border-2 bg-[#CAD2C5] p-10 shadow-lg">
      <p>
        #{track.id}: {track.name}
      </p>
      <p>{track.fileUrl}</p>
      <p>For use in: {track.projectId}</p>
      <p className="mt-5 border-t border-gray-400 text-right">
        By User: {track.userId}
      </p>
    </div>
  );
}

export default TrackPage;

// export async function generateStaticParams() {
//   const res = await fetch("https://64c4022067cfdca3b6608e88.mockapi.io/track");
//   const tracks: Track[] = await res.json();

//   //   const trimmedTracks = tracks.splice(0, 10);

//   return tracks.forEach((track) => ({
//     trackId: track.id.toString(),
//   }));
// }
