import multiple from "./dota/multiple.json";
import single from "./dota/single.json";
import currentlyCasting from "./stream/currently_casting.json";
import list from "./stream/streaming_list.json";

export const MOCK_DATA = {
  dota: {
    multiple,
    single,
  },
  streaming: {
    currentlyCasting,
    list,
  },
};
