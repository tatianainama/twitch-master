import { castVOD } from "../../api";
import Card from "../Card";

export function VOD({ vod }) {
  return (
    <Card
      title={vod.title}
      description={`Duration ${vod.duration}`}
      onClick={() => castVOD(vod.id)}
    >
      {vod.thumbnail_url && (
        <img
          src={vod.thumbnail_url
            .replace("%{width}", 160)
            .replace("%{height}", 90)}
        />
      )}
    </Card>
  );
}
