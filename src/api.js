import { MOCK_DATA } from "../mock_data/index";
const API = import.meta.env.VITE_TWITCH_API;
const KODI_JSONRPC_URL = import.meta.env.VITE_KODI_JSONRPC_URL;
const MOCK = import.meta.env.VITE_MODE === "MOCK";

export const getStreaming = () => {
  if (MOCK) return Promise.resolve(MOCK_DATA.streaming.list);

  return fetch(`${API}/list`).then((res) => res.json());
};

export const getTargets = () =>
  fetch(`${API}/targets`)
    .then((res) => res.json())
    .then((data) => [...data]);

export const castStream = (target, user_name) =>
  fetch(`${API}/cast_live/${target}/${user_name}`).then((res) => res.json());

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
    id: 53,
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

export const getDotaFromChannel = async ({ user_name }) => {
  if (MOCK) return Promise.resolve(MOCK_DATA.dota.multiple);

  const res = await fetch(`${API}/dota_info/${user_name}`);
  return await res.json();
};

const postJson = (url, data) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
};

const kodiSetVolume = (volume) => {
  postJson(KODI_JSONRPC_URL, {
    jsonrpc: "2.0",
    method: "Application.SetVolume",
    params: [volume],
    id: 1,
  }).then((text) => text.result);
};
export const getCurrentlyCasted = async () => {
  if (MOCK) return Promise.resolve(MOCK_DATA.streaming.currentlyCasting);

  const res = await fetch(`${API}/currently_casting`);
  const json = await res.json();
  return json;
};
