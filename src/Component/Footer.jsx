import React from "react";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 w-full border border-gray-700">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <p className="text-sm">
            Hecho con <span className="text-red-500">&hearts;</span> por Facundo
            Yobstraibizer
          </p>
        </div>
        <div className="flex items-center">
          <a
            href="https://github.com/FYobstra"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 hover:text-gray-400 transition-colors duration-200"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:facundolyobstraibizer@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 hover:text-gray-400 transition-colors duration-200"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/facundo-yobstraibizer/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors duration-200"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
