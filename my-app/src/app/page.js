// src/app/page.js
"use client";
import React, { useState } from "react";
import { fetchRecommendedMovies } from "./utils/api";
import Layout from "./components/Layout";

const Home = () => {
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [country, setCountry] = useState("");
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      genre,
      year,
      country,
    };
    try {
      const response = await fetchRecommendedMovies(formData);
      console.log("Response from backend:", response);

      if (
        Array.isArray(response) && // Mengubah 'data' menjadi 'response'
        response.length > 0 &&
        response[0].hasOwnProperty("title")
      ) {
        setRecommendedMovies(response); // Mengubah 'data' menjadi 'response'
      } else {
        console.error("Received data format is not as expected.");
      }
    } catch (error) {
      console.error("Error fetching recommended movies:", error);
    }
  };

  return (
    <Layout>
      <div>
        <form onSubmit={handleSubmit} className="mt-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="genre" className="block text-white">
                Genre
              </label>
              <input
                type="text"
                id="genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                placeholder="Enter the genre you like..."
                className="w-full border-none p-2 rounded-md bg-gray-200 opacity-70 outline-none focus:ring-0"
              />
            </div>
            <div>
              <label htmlFor="year" className="block text-white">
                Year
              </label>
              <input
                type="number"
                id="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="Enter the year of the film..."
                className="w-full border-none p-2 rounded-md bg-gray-200 opacity-70 outline-none focus:ring-0"
              />
            </div>
            <div>
              <label htmlFor="country" className="block text-white">
                Country
              </label>
              <input
                type="text"
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Enter Country..."
                className="w-full border-none p-2 rounded-md bg-gray-200 opacity-70 outline-none focus:ring-0"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-400 text-white py-2 px-4 rounded"
          >
            Search
          </button>
        </form>
        <div className="mt-4 mb-4 bg-black p-4 bg-opacity-40 rounded-lg">
          <h2 className="text-white text-xl font-semibold mb-2">
            Rekomendasi Film:
          </h2>
          <ul className="text-white">
            {recommendedMovies.map((movie, index) => (
              <li className="text-white flex items-center" key={index}>
                <span className="mr-2">{index + 1}.</span>
                {movie && movie.title ? movie.title : "Unknown Title"}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
