const axios = require('axios');

const API_BASE_URL = "https://trefle.io/api/v1/plants"
const TOKEN = "aVZOYmhDUVVNSWhkVVE5c0QwZ01sQT09"

async function BuildSearchQuery(plantName, filter_type="common_name") {
    const tokenParam = "token"
    const filterParam = `filter[${ filter_type || "scientific_name" }]`
    return `${API_BASE_URL}?${tokenParam}=${TOKEN}&${encodeURIComponent(filterParam)}=${encodeURIComponent(plantName)}`
}

async function ParseSearchResults(res) {
    if(res.data.data) {
        return res.data.data.map((plant) => ({"name": plant.common_name || plant.scientific_name, "desc": plant.observations || plant.family_common_name, "id": plant.id}))
    }
    return []
}

async function GetPlants(query) {
    const queryURL = await BuildSearchQuery(query)
    try {
        const res = await axios.get(queryURL, { timeout: 1000 })
        return await ParseSearchResults(res) 
    } catch(e) {
        console.log({e1: e})
    }
}

async function main() {
    const plants = await GetPlants("parsley");
    console.log({ plants })
}

main()