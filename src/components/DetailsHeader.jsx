const DetailsHeader = ({ artistId, artistData, songData }) => (
  <div className="relative w-full flex flex-col">
    <div className="w-full bg-gradient-to-l from-transparnet to-black sm:h-48 h-28">
      <div className="absolute inset-0 flex items-center">
        <img
          src={
            artistId
              ? artistData?.artists[artistId].attributes.artworks?.url
                  .replace("{w}", "500")
                  .replace("{h}", "500")
              : songData?.images?.coverart
          }
          alt="art"
        />
      </div>
    </div>
  </div>
);

export default DetailsHeader;
