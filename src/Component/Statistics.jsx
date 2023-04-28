import React from "react";
import { IconFollowers, IconFollowing, IconRepos } from "../Images";

export default function Statistics({ dataUser }) {
  const statistics = [
    {
      title: "Repos",
      icon: IconRepos,
      info: dataUser.public_repos,
    },
    {
      title: "Seguidores",
      icon: IconFollowers,
      info: dataUser.followers,
    },
    {
      title: "Seguidos",
      icon: IconFollowing,
      info: dataUser.following,
    },
  ];

  return (
    <div className="w-full py-5">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-3 px-4 gap-5">
        {statistics.map((data, index) => (
          <div
            key={index}
            className="w-full bg-cards-bg-light dark:bg-cards-bg-dark rounded-2xl shadow-lg p-6 flex justify-between"
          >
            <div className="flex flex-col gap-2 justify-center items-starts">
              <h1 className="text-text-color-light dark:text-text-color-dark text-4xl font-bold">
                {data.info}
              </h1>
              <p className="text-gray-500 text-lg">{data.title}</p>
            </div>
            <div className="rounded-full dar:bg-gray-700 bg-gray-200 w-[120px] h-[120px]">
              <img src={data.icon} alt={`image ${data.title}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
