import axios from 'axios'

const API_BASE_URL = "https://trefle.io/api/v1/plants"
const TOKEN = "aVZOYmhDUVVNSWhkVVE5c0QwZ01sQT09"

async function BuildSearchQuery(plantName, filter_type="common_name") {
    const tokenParam = "token"
    const filterParam = `filter[${ filter_type || "scientific_name" }]`
    if (plantName) {
        return `${API_BASE_URL}?${tokenParam}=${TOKEN}&${encodeURIComponent(filterParam)}=${encodeURIComponent(plantName)}`
    }
    return `${API_BASE_URL}?${tokenParam}=${TOKEN}`
}

async function BuildSinglePlantQuery(plantId) {
    const tokenParam = "token"
    return `${API_BASE_URL}/${plantId}?${tokenParam}=${TOKEN}`
}

function ParseSinglePlant(plant) {
    return { 
        "name": plant.common_name ? `${plant.common_name} (${plant.scientific_name})` : plant.scientific_name,
        "imgSrc": plant.image_url,
        "desc": plant.family_common_name,
        "id": plant.id.toString()
    }
}

async function ParseSearchResults(res) {
    return res.data.map(ParseSinglePlant)
}

async function GetPlants(query) {
    const queryURL = await BuildSearchQuery(query)
    return fetch(queryURL, { timeout: 1000, mode: 'cors'})
        .then(res => res.json())
        .then(
            data => data.data.map(ParseSinglePlant) 
        )
        .catch(error => console.error(error))
}

async function GetSinglePlant(plantId) {
    const queryURL = await BuildSinglePlantQuery(plantId)
    console.log({plantId, queryURL})
    return fetch(queryURL, { timeout: 1000, mode: 'cors'})
        .then(res => res.json())
        .then(result => { 
            const plant = result.data
            return ParseSinglePlant(plant)
        })
        .catch(error => console.error(error))
}


export { GetPlants, GetSinglePlant }
