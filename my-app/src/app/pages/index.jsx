"use client";

import React, { useState } from "react";
import Form from "../components/Form";
import Layout from "../components/Layout";
import { fetchRecommendedMovies } from "../utils/api";

const IndexPage = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (formData) => {
    setLoading(true);
    try {
      const response = await fetchRecommendedMovies(formData);
      const data = await response.json();
      setRecommendedMovies(data);
    } catch (error) {
      setError("Error fetching recommended movies.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          Sistem Rekomendasi Film atau Musik
        </h1>
        <p>
          Silakan isi formulir di bawah ini untuk mendapatkan rekomendasi yang
          tepat.
        </p>
        <Form onSubmit={handleSubmit} />
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <div className="mt-4">
          <h2>Rekomendasi Film</h2>
          <ul>
            {recommendedMovies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
