import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "a65948f208msh54f579acd803375p1890d2jsn00c112ede4cd"
        //  process.env.VITE_SHAZAM_CORE_RAPID_API_KEY
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/charts/track" }),
    // getTopSongs: builder.query({ query: () => "/get-top-songs" }),
    getSongDetails: builder.query({
      query: ({ id }) => `/shazam-songs/get-details?id=${id}&locale=en-US`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  // useGetTopSongsQuery,
  useGetSongDetailsQuery,
} = shazamCoreApi;

// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': 'a65948f208msh54f579acd803375p1890d2jsn00c112ede4cd',
//       'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
//     }
//   };

//   fetch('https://shazam.p.rapidapi.com/charts/list', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
