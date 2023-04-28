import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FaGithub } from "react-icons/fa";
import { BgLogin, GithubLogin } from "../Images";

export default function Login() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div
      className="flex items-center justify-center min-h-screen px-4 bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${BgLogin})`  }}
    >
      <div className="w-full h-[100vh] absolute top-0 bg-[#0000007d] z-10"></div>
      <div className="w-full max-w-md z-20">
        <form className="bg-gray-100 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
          <div className="flex items-center justify-center mb-6">
            <img src={GithubLogin} alt="" className="w-20 object-cover ob h-20 rounded-full " />
          </div>
          <h1 className="text-center text-xl xl:text-2xl font-semibold mb-8">
            Inicie sesión para obtener mas información
          </h1>

          <div className="flex items-center justify-center">
            <button
              onClick={() => loginWithRedirect()}
              className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
            >
              <span className="inline-flex items-center justify-center bg-white rounded-full p-1">
                <FaGithub className="text-black" size={24} />
              </span>
              <span className="ml-2">Iniciar sesión con GitHub</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
