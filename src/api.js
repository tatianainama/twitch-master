const API = import.meta.env.VITE_TWITCH_API;
const KODI_JSONRPC_URL = import.meta.env.VITE_KODI_JSONRPC_URL;

const MOCK_DATA =
  import.meta.env.MODE === "MOCK"
    ? [
        {
          viewers: 7509,
          user_name: "Vixella",
          title: "villager hunting day 2 (๑✧◡✧๑) !bingo",
          game_name: "Animal Crossing: New Horizons",
          avatar:
            "https://static-cdn.jtvnw.net/jtv_user_pictures/8fccb72a-a9d3-43c9-90fc-a90a54284ae7-profile_image-70x70.png",
        },
        {
          viewers: 10000,
          user_name: "lilsimsie",
          title: "building a restaurant for henford-on-bagle",
          game_name: "The Sims 4",
          avatar:
            "https://static-cdn.jtvnw.net/jtv_user_pictures/81f1a47f-0f18-4276-80e6-568aef8715e0-profile_image-70x70.png",
        },
        {
          viewers: 250,
          user_name: "tokidokitraveller",
          title: "In some hotel in Wakayama",
          game_name: "Just Chatting",
          avatar:
            "https://static-cdn.jtvnw.net/jtv_user_pictures/6cbd36d7-8851-490b-a299-cf525763e41c-profile_image-70x70.png",
        },
        {
          viewers: 15000,
          user_name: "Gorgc",
          title: "yo",
          game_name: "Dota 2",
          avatar:
            "https://static-cdn.jtvnw.net/jtv_user_pictures/gorgc-profile_image-469e05d25a1e8594-70x70.jpeg",
        },
        {
          viewers: 1023,
          user_name: "WagamamaTV",
          title: "<3 Chat @WagaGaming",
          game_name: "Dota 2",
          avatar:
            "https://static-cdn.jtvnw.net/jtv_user_pictures/wagamamatv-profile_image-fcc33886efd92c4f-70x70.jpeg",
        },
      ]
    : [];

export const getStreaming = () =>
  fetch(`${API}/list`)
    .then((res) => res.json())
    .then((data) => [...data, ...MOCK_DATA]);

export const castStream = (user_name) =>
  fetch(`${API}/cast_live?user=${user_name}`).then((res) => res.json());

export const castVOD = (video_id) =>
  fetch(`${API}/cast_vod?vod_id=${video_id}`).then((res) => res.json());

export const getVODs = () => fetch(`${API}/vods/`).then((res) => res.json());

export const playOnServer = (user) =>
  fetch(`${API}/stream?key=${user}&quality=1080p60,1080p,720p60,720p`).then(
    (res) => res.json()
  );

export const stopPlaying = () => fetch(`${API}/end`).then((res) => res.json());

const getVolumeFromKodi = () => {
  return postJson(KODI_JSONRPC_URL, {
    jsonrpc: "2.0",
    method: "Application.GetProperties",
    params: [["volume", "muted"]],
    id: 53
  }).then((text) => text.result);
};
export const kodiIncreaseVolume = () => {
  getVolumeFromKodi().then(({ volume }) => kodiSetVolume(volume + 5));
};
export const kodiDecreaseVolume = () => {
  getVolumeFromKodi().then(({ volume }) => kodiSetVolume(volume - 5));
};

export const setPowerOn = () => {
  fetch(`${API}/remote/tv/on`).then((res) => res.json());
};
export const setPowerOff = () => {
  fetch(`${API}/remote/tv/off`).then((res) => res.json());
};
export const setSourceCC = () => {
  fetch(`${API}/remote/input/chromecast`).then((res) => res.json());
};
export const setSourceKodi = () => {
  fetch(`${API}/remote/input/kodi`).then((res) => res.json());
};

const postJson = (url, data) => {
  return fetch(url,
    {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json());
};

const kodiSetVolume = (volume) => {
  postJson(KODI_JSONRPC_URL, {
    jsonrpc: "2.0",
    method: "Application.SetVolume",
    params: [volume],
    id: 1
  }).then((text) => text.result);

};
export const getCurrentlyCasted = () =>
  fetch(`${API}/currently_casting`).then((res) => res.json());
