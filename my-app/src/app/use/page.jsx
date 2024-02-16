import Layout from "../components/Layout";

export default function Use() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 text-white">
        <div className="bg-black bg-opacity-50 p-6 rounded-lg">
          <h1 className="text-2xl font-bold mb-4 underline">
            How to Use Our App
          </h1>
          <p className="text-lg mb-4">
            Welcome to our app! We've designed it to make finding the perfect
            movie for you a breeze. Here's how to get started:
          </p>
          <ol className="list-decimal list-inside">
            <li className="text-lg mb-2">
              First, specify your preferred movie genre, release year, and
              language in the search form.
            </li>
            <li className="text-lg mb-2">
              Once you've entered your criteria, click the "Search" button to
              find matching movies.
            </li>
            <li className="text-lg mb-2">
              Browse through the list of recommended movies and click on any
              title to view more details.
            </li>
            <li className="text-lg mb-2">
              If you find a movie you'd like to watch, simply click the "Watch
              Now" button to start streaming.
            </li>
          </ol>
          <p className="text-lg mt-4">
            That's it! With our app, discovering your next favorite movie has
            never been easier. Enjoy your movie night!
          </p>
        </div>
      </div>
    </Layout>
  );
}
