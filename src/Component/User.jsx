import React from "react";
import { FaMapMarkerAlt, FaLink } from "react-icons/fa";

export default function User({ dataUser, dataFollowers }) {
  return (
    <div className="w-full py-5">
      {dataUser && (
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 px-4">
          <div className="w-full bg-cards-bg-light dark:bg-cards-bg-dark rounded-2xl shadow-md p-6 flex flex-col justify-between gap-6">
            <h1 className="text-text-color-light dark:text-text-color-dark text-lg">
              Usuario
            </h1>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img
                  src={dataUser.avatar_url}
                  alt=""
                  className="w-20 h-20 rounded-full"
                />
                <div>
                  <h3 className="text-text-color-light dark:text-text-color-dark font-semibold text-lg">
                    {dataUser.name}
                  </h3>
                  <p className="text-text-color-light dark:text-gray-400 text-sm mt-1">
                    {`@${dataUser.login}`}
                  </p>
                </div>
              </div>
              <button className="border border-color-primary text-color-primary rounded-2xl px-2 py-1 md:px-6 md:py-2 hover:bg-color-primary hover:text-white">
                Seguir
              </button>
            </div>
            <p className="text-text-color-light dark:text-text-color-dark max-w-lg">
              {dataUser.bio}
            </p>
            <ul className="flex flex-col gap-5">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-gray-400 text-lg" />
                <p className="text-gray-400 text-sm">{dataUser.location}</p>
              </li>
              <li className="flex items-center gap-2">
                <FaLink className="text-gray-400 text-lg" />
                <a
                  href={dataUser.html_url}
                  target="_blanck"
                  className="text-gray-400 text-sm"
                >
                  {dataUser.html_url}
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full max-h-[400px] bg-cards-bg-light dark:bg-cards-bg-dark rounded-2xl shadow-md p-6 flex flex-col justify-between overflow-hidden">
            <h1 className="text-text-color-light dark:text-text-color-dark text-lg∂">
              Seguidores
            </h1>
            <div className="overflow-y-scroll flex flex-col gap-8 mt-6">
              {dataFollowers.map((data, index) => (
                <div key={index} className="flex gap-8 items-center">
                  <img
                    src={data.avatar_url}
                    alt={`image ${data.name}`}
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="flex flex-col gap-1">
                    <h3 className="text-text-color-light dark:text-text-color-dark font-semibold text-lg leading-none">
                      {data.login}
                    </h3>
                    <a
                      href={data.html_url}
                      className="text-text-color-light dark:text-gray-400 text-xs mt-1"
                    >
                      {data.html_url}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
