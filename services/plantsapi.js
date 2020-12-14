import axios from 'axios'

const API_BASE_URL = "https://trefle.io/api/v1/plants"
const TOKEN = "aVZOYmhDUVVNSWhkVVE5c0QwZ01sQT09"

async function BuildSearchQuery(plantName, filter_type="common_name") {
    const tokenParam = "token"
    const filterParam = `filter[${ filter_type || "scientific_name" }]`
    return `${API_BASE_URL}?${tokenParam}=${TOKEN}&${encodeURIComponent(filterParam)}=${encodeURIComponent(plantName)}`
}

async function ParseSearchResults(res) {
    return res.data.map((plant) => (
        { 
            "name": plant.common_name ? `${plant.common_name} (${plant.scientific_name})` : plant.scientific_name,
            "desc": plant.family_common_name,
            "id": plant.id.toString()
        }
    ))
}

async function GetPlants(query) {
    const queryURL = await BuildSearchQuery(query)
    return fetch(queryURL, { timeout: 1000, mode: 'cors'}).then(res => res.json()).then(
        data => ParseSearchResults(data)
    ).
    then(results => { return results })
    .catch(error => console.error(error))
}


export { GetPlants }
