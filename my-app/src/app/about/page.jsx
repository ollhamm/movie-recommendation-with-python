import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4 text-center underline text-white italic">
          About
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-black bg-opacity-50 text-white p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-2">Team</h2>
            <p className="text-lg">
              Currently, I am developing this app independently, however I am
              very interested in collaborating with a group in an effort to
              further expand and improve this app. I believe that by joining
              forces with the group, we can bring various perspectives and
              diverse expertise to create more innovative and effective
              solutions. This collaboration will allow us to better achieve our
              common goals and accelerate the development of this app towards a
              better direction.
            </p>
          </div>
          <div className="bg-black bg-opacity-50 text-white p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-2">Mission</h2>
            <p className="text-lg">
              Provide a satisfying experience for every user by providing an
              intuitive and sophisticated platform to discover quality movies,
              by combining the latest technology and deep understanding of
              individual preferences, we are determined to bring relevant,
              accurate, and satisfying movie recommendations to every user,
              regardless of genre or satisfying movie recommendations for every
              user, regardless of genre or language. language.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
