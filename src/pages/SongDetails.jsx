import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetSongDetailsQuery } from "../redux/services/shazamCore";

const SongDetails = () => {
  const { songid } = useParams();
  const { data: songData, isFetching: isFetchingSongDetails } =
    useGetSongDetailsQuery({ id: songid });
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { song, setSong } = useState();

  console.log(songid, "didid");
  // const { text } = songData?.resources?.lyrics[2];
  console.log(songData?.resources?.lyrics, "datassss");

  const property = "shazam-songs";

  useEffect(() => {
    console.log("ly", songData?.resources.lyrics[0]);
    setSong(songData?.resources.lyrics[0]);

    console.log("song", song);
  }, []);

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId="" songData={songData} />

      <div className="mb-10">
        <h2 className="text-3xl font-bold text-white">Lyrics:</h2>
        <div className="mt-5">
          {/* {songData?.resources?.lyrics.type === "LYRICS" ? (
            songData?.resources?.lyric.text.map((line, i) => (
              <p className="my-1 text-base text-gray-400">{line}</p>
            ))
          ) : (
            <p className="my-1 text-base text-gray-400">
              Sorry, no lyrics found!
            </p>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default SongDetails;
