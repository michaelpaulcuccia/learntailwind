import React from "react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4 shadow-lg">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Welcome to My Tailwind Page</h1>
        </div>
      </header>

      <main className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card Component */}
          <Card
            title="Tailwind CSS"
            description="A utility-first CSS framework packed with classes to style any element."
            buttonText="Learn More"
          />
          <Card
            title="React & TypeScript"
            description="Build modern apps with React and the power of static typing from TypeScript."
            buttonText="Get Started"
          />
          <Card
            title="Responsive Design"
            description="Design responsive layouts easily with Tailwind’s responsive classes."
            buttonText="Explore"
          />
        </div>
      </main>
    </div>
  );
};

interface CardProps {
  title: string;
  description: string;
  buttonText: string;
}

const Card: React.FC<CardProps> = ({ title, description, buttonText }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition">
        {buttonText}
      </button>
    </div>
  );
};

export default Home;
