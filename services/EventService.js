import axios from 'axios'
    
const apiClient = axios.create({
    baseURL: `http://my-json-server.typicode.com/av09/start-with-nuxt`,
    withCredentials: false, 
    headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
    }
})

export default {
    getEvents() {
        return apiClient.get('/events')
    },
    getEvent(id) {
        return apiClient.get('/events/' + id)
    }
}