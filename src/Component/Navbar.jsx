import React, { useState } from "react";
import { BsSearch, BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { BiLogOutCircle } from "react-icons/bi";
import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Navbar({ onSearch }) {
  const [searchUser, setSearchUser] = useState();
  const [darkTheme, setDarkTheme] = useState(true);
  const { user, logout } = useAuth0();

  const notify = () => toast.error("El campo de búsqueda no puede estar vacío");

  function changeTheme() {
    setDarkTheme(!darkTheme);
    const html = document.querySelector("html");
    html.classList.contains("dark")
      ? html.classList.remove("dark")
      : html.classList.add("dark");
  }

  function handleSearch(e) {
    e.preventDefault();
    if (searchUser.trim() !== "") {
      onSearch(searchUser.trim());
    } else {
      notify();
    }
  }

  return (
    <nav className="w-full">
      <ToastContainer />
      <div className="w-full max-w-screen-2xl mx-auto flex justify-between items-center py-4 px-4">
        <form
          onSubmit={handleSearch}
          className="flex items-center gap-4 rounded-xl px-2 dark:bg-gray-800 bg-gray-100 py-2"
        >
          <BsSearch className="text-text-color-light dark:text-text-color-dark" />
          <input
            type="search"
            className="text-text-color-light dark:text-text-color-dark bg-transparent outline-none text-lg w-44 md:w-64"
            placeholder="Buscar..."
            onChange={(e) => setSearchUser(e.target.value)}
            value={searchUser}
          />
        </form>
        <div className="flex items-center justify-center gap-5 md:gap-8">
          {darkTheme ? (
            <BsFillSunFill
              onClick={() => changeTheme()}
              className="text-xl text-gray-400 cursor-pointer hover:text-gray-600"
            />
          ) : (
            <BsFillMoonStarsFill
              onClick={() => changeTheme()}
              className="text-xl text-gray-400 cursor-pointer hover:text-gray-600"
            />
          )}
          <BiLogOutCircle onClick={()=> logout()} className="text-xl text-gray-400 cursor-pointer hover:text-gray-600" />
          <img src={user.picture} alt="" className="rounded-full w-8 h-8 md:w-12 md:h-12" />
        </div>
      </div>
    </nav>
  );
}
