"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import favicon from "../../public/favicon.svg"; // Update the path as needed

const LandingPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add("bg-white", "shadow-md");
        } else {
          header.classList.remove("bg-white", "shadow-md");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://eomail6.com/form/512efc6e-4872-11ef-be09-b1214129c663.js";
    script.async = true;
    script.setAttribute("data-form", "512efc6e-4872-11ef-be09-b1214129c663");
    const formContainer = document.getElementById("email-octopus-form");
    formContainer?.appendChild(script);

    return () => {
      formContainer?.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 to-green-100 text-gray-800 font-sf-rounded">
      <header className="fixed w-full top-0 z-50 transition-all duration-300 backdrop-blur-md bg-opacity-70 shadow-sm">
        <div className="container mx-auto p-6 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Image
              src={favicon}
              alt="StudentView Logo"
              width={40}
              height={40}
            />
            <h1 className="text-3xl font-semibold tracking-tight text-green-600">
              StudentView
            </h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#features"
              className="text-lg hover:text-green-400 text-green-600 transition-colors duration-300"
            >
              Features
            </a>
            <a
              href="#stay-updated"
              className="text-lg hover:text-green-400 text-green-600 transition-colors duration-300"
            >
              Stay Updated
            </a>
          </nav>
          <button
            className="md:hidden text-green-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden bg-green-50 shadow-md">
            <a
              href="#features"
              className="block px-4 py-2 text-lg text-green-600 hover:bg-green-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#stay-updated"
              className="block px-4 py-2 text-lg text-green-600 hover:bg-green-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Stay Updated
            </a>
          </div>
        )}
      </header>

      <main className="flex flex-col items-center justify-center text-center px-4 py-40 min-h-screen bg-gradient-to-b from-green-50 to-green-100">
        <h2 className="text-7xl md:text-9xl font-extrabold mb-6 leading-tight text-green-600 tracking-tight">
          Study{" "}
          <mark className="bg-transparent font-extrabold text-green-600 shadow-[inset_0_-0.5em_0_0_#B8F3FF]">
            Smart
          </mark>
          ,<br />
          Live Better.
        </h2>
        <p className="text-2xl md:text-3xl mb-12 max-w-2xl text-gray-700">
          The ultimate tool to manage your studies and well-being.
        </p>
        <a
          href="#stay-updated"
          className="bg-green-600 text-white py-4 px-12 rounded-full text-xl font-semibold shadow-lg transition-transform transform hover:scale-105"
        >
          Stay Updated
        </a>
      </main>

      <section id="features" className="py-32 bg-white text-gray-800">
        <div className="container mx-auto text-center">
          <h3 className="text-5xl md:text-6xl font-bold mb-16 text-green-600">
            Ease your life with
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-full md:w-1/3 p-8">
              <div className="p-10 h-full rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
                <h4 className="text-3xl font-semibold mb-4 text-green-600">
                  Study Notes
                </h4>
                <p className="text-lg">
                  Keep all your study notes in one organized place.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-8">
              <div className="p-10 h-full rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
                <h4 className="text-3xl font-semibold mb-4 text-green-600">
                  Meditation
                </h4>
                <p className="text-lg">
                  Take a break, meditate, and boost your focus.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-8">
              <div className="p-10 h-full rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
                <h4 className="text-3xl font-semibold mb-4 text-green-600">
                  Task Management
                </h4>
                <p className="text-lg">
                  Organize your tasks and manage your time effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="apps"
        className="py-32 bg-gradient-to-b from-white to-green-50 text-gray-900"
      >
        <div className="container mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-green-600">
            Web and iOS apps coming soon!
          </h3>
          <p className="text-xl md:text-2xl mb-12 text-gray-700">
            Get ready to take StudentView with you, wherever you go. Stay tuned
            for our launch!
          </p>
        </div>
      </section>

      <section
        id="faqs"
        className="py-32 bg-gradient-to-b from-green-50 to-white text-gray-800"
      >
        <div className="container mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-green-600">
            FAQs
          </h3>
          <div className="text-left max-w-3xl mx-auto">
            <div className="mb-4">
              <button className="w-full text-left text-lg font-semibold text-green-600">
                What is StudentView?
              </button>
              <div className="pl-4 pt-2 text-gray-700">
                <p>
                  StudentView is an app designed to help students manage their
                  studies, tasks, and well-being in one place.
                </p>
              </div>
            </div>
            <div className="mb-4">
              <button className="w-full text-left text-lg font-semibold text-green-600">
                How can I get the app?
              </button>
              <div className="pl-4 pt-2 text-gray-700">
                <p>
                  We are launching soon! Stay updated by signing up for our
                  newsletter.
                </p>
              </div>
            </div>
            <div className="mb-4">
              <button className="w-full text-left text-lg font-semibold text-green-600">
                Is StudentView free?
              </button>
              <div className="pl-4 pt-2 text-gray-700">
                <p>
                  Yes, StudentView will have a free version with optional
                  premium features available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="stay-updated" className="py-32 bg-white text-gray-800">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-green-600">
            Ready to transform your student life?
          </h3>
          <div id="email-octopus-form" className="flex justify-center "></div>
        </div>
      </section>

      <section
        id="founder-note"
        className="py-32 bg-gradient-to-b from-green-50 to-white text-gray-800"
      >
        <div className="container mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-green-600">
            A Note from Our Founder
          </h3>
          <p className="text-xl md:text-2xl mb-12 text-gray-700">
            &ldquo;As a student, I face numerous challenges in managing my tasks
            and well-being. That&apos;s why I created StudentView, an app that
            brings everything together in one place to help you live a more
            organized and stress-free student life.&rdquo;
          </p>
          <p className="text-lg text-gray-800">
            - Maxwell Young, Founder &amp; CEO
          </p>
        </div>
      </section>

      <footer className="py-8 bg-white text-gray-400 text-center">
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
