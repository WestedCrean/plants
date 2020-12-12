import axios from 'axios'

const API_BASE_URL = "https://trefle.io/api/v1/plants"
const TOKEN = "YOUR_API_TOKEN"

function BuildSearchQuery(plantName) {
    const tokenParam = "token"
    const filterParam = "filter[common_name]"
    return await axios.get(`${API_BASE_URL}?${tokenParam}=${TOKEN}&${filterParam}=${encodeURIComponent(plantName)}`)
}

function ParseSearchResults(res) {
    const { data } = JSON.parse(res)

    return data.map((plant) => ({"name": plant.common_name || plant.scientific_name, "desc": plant.observations, "id": plant.id}))
}


export { BuildSearchQuery, ParseSearchResults}
