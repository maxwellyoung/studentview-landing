"use client";
import { useEffect } from "react";

const LandingPage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add("bg-gray-800", "shadow-md");
        } else {
          header.classList.remove("bg-gray-800", "shadow-md");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark-gray text-white">
      <header className="fixed w-full top-0 z-50 transition-all duration-300">
        <div className="container mx-auto p-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-green-500">StudentView</h1>
          <nav className="flex space-x-6">
            <a
              href="#features"
              className="text-lg hover:text-green-600 text-green-500 transition-colors duration-300"
            >
              Features
            </a>
            {/* <a
              href="#stay-updated"
              className="text-lg hover:text-green-600 text-green-500 transition-colors duration-300"
            >
              Stay Updated
            </a> */}
          </nav>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center text-center px-4 py-40 min-h-screen">
        <h2 className="text-7xl md:text-9xl font-extrabold mb-6 leading-tight text-green-500">
          Study Smart,
          <br />
          Live Better.
        </h2>
        <p className="text-2xl md:text-3xl mb-12 max-w-2xl text-gray-400">
          The ultimate tool to manage your studies, finances, and well-being.
        </p>
        {/* <a
          href="#stay-updated"
          className="bg-green-500 text-dark-gray py-4 px-12 rounded-full text-xl font-semibold shadow-lg transition-transform transform hover:scale-105"
        >
          Stay Updated
        </a> */}
      </main>

      <section id="features" className="py-32 bg-gray-800 text-gray-200">
        <div className="container mx-auto text-center">
          <h3 className="text-5xl md:text-6xl font-bold mb-16 text-green-500">
            Features
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-full md:w-1/3 p-8">
              <div className="p-10 h-full rounded-lg shadow-lg bg-gray-700 hover:shadow-2xl transition-shadow duration-300">
                <h4 className="text-3xl font-semibold mb-4 text-light-green">
                  Budget Management
                </h4>
                <p className="text-lg">
                  Track your expenses and manage your budget like a pro.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-8">
              <div className="p-10 h-full rounded-lg shadow-lg bg-gray-700 hover:shadow-2xl transition-shadow duration-300">
                <h4 className="text-3xl font-semibold mb-4 text-light-green">
                  Study Notes
                </h4>
                <p className="text-lg">
                  Keep all your study notes in one organized place.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-8">
              <div className="p-10 h-full rounded-lg shadow-lg bg-gray-700 hover:shadow-2xl transition-shadow duration-300">
                <h4 className="text-3xl font-semibold mb-4 text-light-green">
                  Meditation
                </h4>
                <p className="text-lg">
                  Take a break, meditate, and boost your focus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ios-app" className="py-32 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-green-500">
            Web and iOS Apps Coming Soon!
          </h3>
          <p className="text-xl md:text-2xl mb-12 text-gray-300">
            Get ready to take StudentView with you, wherever you go. Stay tuned
            for our launch!
          </p>
        </div>
      </section>

      {/* <section id="stay-updated" className="py-32 bg-gray-800 text-gray-200">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-green-500">
            Stay Updated!
          </h3>
          <p className="text-xl md:text-2xl mb-12">
            Sign up for our newsletter to get the latest updates and be the
            first to know when we launch.
          </p>
          <form
            action="https://emailoctopus.com/lists40ead1b4-4815-11ef-bce6-8f905a46a786/members/embedded/1.1/add"
            method="post"
            className="flex flex-col items-center"
          >
            <input
              type="email"
              name="email_address"
              placeholder="Enter your email"
              className="mb-4 px-4 py-2 rounded-md border border-gray-600 w-80 bg-gray-700 text-white"
              required
            />
            <button
              type="submit"
              className="bg-green-500 text-dark-gray py-3 px-8 rounded-full text-lg font-semibold shadow-lg transition-transform transform hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section> */}

      <footer className="py-8 bg-gray-900 text-gray-400 text-center">
        <p>© 2024 StudentView. All rights reserved.</p>
        <p>
          Designed by{" "}
          <a
            href="https://ninetynine.digital"
            className="underline hover:text-gray-300 transition-colors duration-300"
          >
            ninetynine digital
          </a>
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
