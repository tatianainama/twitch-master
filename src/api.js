const API = import.meta.env.VITE_TWITCH_API;

export const getStreaming = () => fetch(`${API}/twitch/list`)
  .then(res => res.json());

export default {
  getStreaming,
}