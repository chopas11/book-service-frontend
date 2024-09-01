import defaults from "../../app/defaults.json"

export const API_AUTH_SERVER_URI = defaults.mode === "dev" ? 'http://localhost:9000' : 'https:// id.storysphere.ru';
export const API_PUBLICATION_SERVICE_URI = defaults.mode === "dev" ? 'http://localhost:10000' : 'https://publish.storysphere.ru';
export const REDIRECT_URI = defaults.mode === "dev" ? 'http://localhost:8000': 'https://storysphere.ru';



