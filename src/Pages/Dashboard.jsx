import React, { useEffect, useState } from "react";
import { Navbar, Statistics, User, ChartRepos } from "../Component";
import { fetchUser, fetchFollowers, fetchRepos, fetchLimits } from "../Services/services";
import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { user } = useAuth0();
  const [searchUser, setSearchUser] = useState(user?.nickname);
  const [dataUser, setDataUser] = useState([]);
  const [dataFollowers, setDataFollowers] = useState([]);
  const [dataRepos, setDataRepos] = useState([]);

  const notify = () => toast.error("Alcanzaste el límite máximo de peticiones, intenta nuevamente mas tarde");

  useEffect(() => {
    fetchLimits().then(res => {
      if(res.rate.remaining > 6) {
        fetchUser(searchUser).then((res) => setDataUser(res));
        fetchFollowers(searchUser).then((res) => setDataFollowers(res));
        fetchRepos(searchUser).then((res) => setDataRepos(res));
      } else{
        notify()
      }
    });
  }, [searchUser]);

  console.log(dataRepos)

  return (
    <div className="w-full bg-bg-light dark:bg-bg-dark flex flex-col">
      <ToastContainer />
      <Navbar onSearch={setSearchUser} />
      <Statistics dataUser={dataUser} />
      <User dataUser={dataUser} dataFollowers={dataFollowers} />
      <ChartRepos dataRepos={dataRepos} />
    </div>
  );
}

export default App;
