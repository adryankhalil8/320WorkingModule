const BASE_URL = "https://swapi.dev/api/starships/";

export async function getAllStarships() {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching starships:", error);
    return [];
  }
}

export async function getStarshipByDetails(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {        console.error("Error fetching starship details:", error);
        return null;
    }
}

