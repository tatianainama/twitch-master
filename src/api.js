const API = import.meta.env.VITE_TWITCH_API;

const MOCK_DATA = import.meta.env.MODE === 'MOCK' ? [
  { viewers: 7509, user: "Vixella", desc: "villager hunting day 2 (๑✧◡✧๑) !bingo", category: "Animal Crossing: New Horizons", avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/8fccb72a-a9d3-43c9-90fc-a90a54284ae7-profile_image-70x70.png"},
  { viewers: 10000, user: "lilsimsie", desc: "building a restaurant for henford-on-bagle", category: "The Sims 4", avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/81f1a47f-0f18-4276-80e6-568aef8715e0-profile_image-70x70.png" },
  { viewers: 250, user: "tokidokitraveller", desc: "In some hotel in Wakayama", category: "Just Chatting", avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/6cbd36d7-8851-490b-a299-cf525763e41c-profile_image-70x70.png" },
  { viewers: 15000, user: "Gorgc", desc: "yo", category: "Dota 2", avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/gorgc-profile_image-469e05d25a1e8594-70x70.jpeg" },
  { viewers: 1023, user: "WagamamaTV", desc: "<3 Chat @WagaGaming", category: "Dota 2", avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/wagamamatv-profile_image-fcc33886efd92c4f-70x70.jpeg"},
] : [];

export const getStreaming = () => fetch(`${API}/twitch/list`)
  .then(res => res.json())
  .then(data => [...data.high, ...data.normal, ...MOCK_DATA])

export default {
  getStreaming,
}