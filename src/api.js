const API = import.meta.env.VITE_TWITCH_API;
const KODI_JSONRPC_URL = import.meta.env.VITE_KODI_JSONRPC_URL;

const MOCK_CASTING_DATA =
  import.meta.env.MODE === "MOCK"
    ? {
        type: "single",
        data: {
          n: "npc_dota_hero_bloodseeker",
          name: "Bloodseeker",
          talent_tree: {
            entries: [
              [
                { name: "+25 Bloodrage Attack Speed", picked: true },
                { name: "+10% Bloodrage Spell Amplification", picked: false },
              ],
              [
                { name: "+8% Rupture Initial Damage", picked: true },
                { name: "+120 Blood Rite Damage", picked: false },
              ],
              [
                { name: "+425 Rupture Cast Range", picked: true },
                { name: "+15% Spell Lifesteal", picked: false },
              ],
              [
                { name: "2 Rupture Charges", picked: false },
                { name: "+18% Max Thirst MS", picked: false },
              ],
            ],
          },
          abilities: [
            {
              name: "Bloodrage",
              n: "bloodseeker_bloodrage",
              tooltip: {
                description:
                  "Drives Bloodseeker into a bloodthirsty rage which causes him to attack faster and deal more spell damage at the cost of a percentage of his health per second. Provides half attack speed to allied heroes.",
                lore: "Strygwyr shares his animalistic thirst for bloodshed.",
                scepter_description: null,
              },
              has_scepter_upgrade: false,
              has_shard_upgrade: true,
              properties: [
                { name: "DURATION:", value: ["8"] },
                {
                  name: "ATTACK SPEED:",
                  value: ["60", "90", "120", "150"],
                },
                {
                  name: "%SPELL AMPLIFICATION:",
                  value: ["15", "20", "25", "30"],
                },
                { name: "%MAX HEALTH DAMAGE PER SECOND:", value: ["1.5"] },
              ],
            },
            {
              name: "Blood Rite",
              n: "bloodseeker_blood_bath",
              tooltip: {
                description:
                  "Bloodseeker baptizes an area in sacred blood. After 2.9 seconds the ritual completes, causing any enemies caught in the area to take damage and become silenced.",
                lore: "The Flayed Twins are ever willing to aid those who spill blood upon the field of battle.",
                scepter_description: null,
              },
              has_scepter_upgrade: false,
              has_shard_upgrade: false,
              properties: [
                { name: "RITUAL AREA:", value: ["600"] },
                { name: "SILENCE DURATION:", value: ["3", "4", "5", "6"] },
                { name: "DAMAGE:", value: ["110", "180", "250", "320"] },
              ],
            },
            {
              name: "Thirst",
              n: "bloodseeker_thirst",
              tooltip: {
                description:
                  "Bloodseeker is invigorated by the wounds of his enemies, restoring some life when he kills a unit. Restores for half values when denying, or if an ally kills a nearby enemy hero. Also gains bonus movement speed when an enemy hero's health falls below 80%, with the bonuses increasing as their health falls further. If an enemy hero's health falls below 25%, he will also gain vision and True Sight of that hero. Bonuses stack per hero. Unlocks max movement speed for Bloodseeker.",
                lore: "Strygwyr becomes frenzied when blood is spilled.",
                scepter_description: null,
              },
              has_scepter_upgrade: false,
              has_shard_upgrade: false,
              properties: [
                { name: "%THIRST HEALTH THRESHOLD:", value: ["80"] },
                {
                  name: "%MAX THIRST MOVE SPEED:",
                  value: ["16", "24", "32", "40"],
                },
                {
                  name: "%MAX HEALTH HEAL HEROES:",
                  value: ["10", "15", "20", "25"],
                },
                {
                  name: "%MAX HEALTH HEAL CREEPS:",
                  value: ["8", "12", "16", "20"],
                },
                { name: "HALF HEAL RADIUS:", value: ["300"] },
                { name: "%VISIBILITY HEALTH THRESHOLD:", value: ["25"] },
              ],
            },
            {
              name: "Blood Mist",
              n: "bloodseeker_blood_mist",
              tooltip: {
                description:
                  "Bloodseeker sprays his blood continuously in the area around him, losing health to damage and slow his enemies. While active, Thirst's healing is increased. Cannot be turned off while on cooldown. Additionally, passively turns all your overheal from your own abilities into an all damage barrier up to 50% of Bloodseeker's Max Health. Barrier amount decays by 0.5% per second.",
                lore: null,
                scepter_description: null,
              },
              has_scepter_upgrade: true,
              has_shard_upgrade: false,
              properties: [
                { name: "%HP PER SECOND COST/DAMAGE:", value: ["7"] },
                { name: "RADIUS:", value: ["450"] },
                { name: "%MOVE SPEED SLOW:", value: ["30"] },
                { name: "%THIRST HEAL BONUS:", value: ["50"] },
              ],
            },
            {
              name: "Rupture",
              n: "bloodseeker_rupture",
              tooltip: {
                description:
                  "Causes an enemy unit's skin to rupture, dealing initial damage based on its current health. If the unit moves, it takes damage based on the distance moved.",
                lore: "When the Bloodseeker hunts you, injuries become fatalities.",
                scepter_description: null,
              },
              has_scepter_upgrade: false,
              has_shard_upgrade: false,
              properties: [
                { name: "DURATION:", value: ["9", "10", "11"] },
                { name: "%MOVE DAMAGE:", value: ["35", "45", "55"] },
                { name: "%HEALTH DAMAGE:", value: ["10"] },
              ],
            },
          ],
          inventory: {
            items: [
              {
                n: "item_phase_boots",
                name: "Phase Boots",
                active:
                  "[h1]Active: Phase[/h1] Gives [b]20[/b]% increased movement speed on melee heroes, and [b]10[/b]% on ranged heroes, and lets you move through units and turn more quickly for [b]3.0[/b] seconds.\\nMovement speed bonuses from multiple pairs of boots do not stack.",
                cooldown: "8.0",
                manacost: null,
                use: null,
              },
              {
                n: "item_ultimate_scepter",
                name: "Aghanim's Scepter",
                active: null,
                cooldown: null,
                manacost: null,
                use: null,
              },
              {
                n: "item_black_king_bar",
                name: "Black King Bar",
                active:
                  "[h1]Active: Avatar[/h1] Applies a basic dispel. Grants [b]60[/b]% Magic resistance and immunity to pure and reflected damage. For the duration of the effect, any negative effect from enemy spells has no effect. \\n\\nDuration: [b]9 8 7 6[/b] \\nDispel Type: [b]Basic Dispel[/b]",
                cooldown: "95",
                manacost: "50",
                use: null,
              },
              {
                n: "item_gungir",
                name: "Gleipnir",
                active:
                  "[h1]Active: Eternal Chains[/h1]Roots all enemies in a target [b][object Object][/b] radius for [b]2.0[/b] seconds and deals [b]180[/b] damage.\\n\\nRange: [b]1100[/b] \\n\\n",
                cooldown: "18",
                manacost: "200",
                use: null,
              },
              {
                n: "item_wraith_band",
                name: "Wraith Band",
                active: null,
                cooldown: null,
                manacost: null,
                use: null,
              },
              {
                n: "item_slippers",
                name: "Slippers of Agility",
                active: null,
                cooldown: null,
                manacost: null,
                use: null,
              },
            ],
            neutral_slot: {
              n: "item_elven_tunic",
              name: "Elven Tunic",
              active: null,
              cooldown: null,
              manacost: null,
              use: null,
            },
          },
        },
      }
    : {};
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
  const res = await fetch(`${API}/currently_casting`);
  const json = await res.json();
  return {
    ...json,
    ...MOCK_CASTING_DATA,
  };
};
