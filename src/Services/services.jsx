const baseUrl = import.meta.env.VITE_BASEURL;

export const fetchUser = async (user) => {
  const response = await fetch(`${baseUrl}/users/${user}`)
  const data = await response.json();
  return data;
};

export const fetchFollowers = async (user) => {
  const response = await fetch(`${baseUrl}/users/${user}/followers?per_page=100`)
  const data = await response.json();
  return data;
};

export const fetchRepos = async (user) => {
  const response = await fetch(`${baseUrl}/users/${user}/repos?per_page=100`)
  const data = await response.json();
  const sortedRepos = data.sort((a,b) => b.stargazers_count - a.stargazers_count)
  return sortedRepos
};

export const fetchLimits = async () => {
  const response = await fetch(`${baseUrl}/rate_limit`)
  const data = await response.json()
  return data
}