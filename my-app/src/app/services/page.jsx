import Layout from "../components/Layout";

export default function Services() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4 text-center text-white underline italic">
          Services
        </h1>
        <p className="text-lg mb-4 text-white">
          We offer a range of services tailored to meet your needs. Whether
          you're looking for movie recommendations, streaming options, or
          personalized suggestions, we've got you covered. Here's what we offer:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-black bg-opacity-50 p-6 rounded-lg text-white">
            <h2 className="text-xl font-bold mb-2">Movie Recommendations</h2>
            <p className="text-lg">
              Discover new movies tailored to your preferences, including genre,
              release year, and language.
            </p>
          </div>
          <div className="bg-black bg-opacity-50 p-6 rounded-lg text-white">
            <h2 className="text-xl font-bold mb-2">Streaming Options</h2>
            <p className="text-lg">
              Explore various streaming platforms and find out where you can
              watch your favorite movies.
            </p>
          </div>
          <div className="bg-black bg-opacity-50 p-6 rounded-lg text-white">
            <h2 className="text-xl font-bold mb-2">Personalized Suggestions</h2>
            <p className="text-lg">
              Receive personalized movie recommendations based on your viewing
              history and preferences.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
