import { castVOD } from '../../api';

export function VOD ({vod}) {

  return (
    <div>
      <p>
        {vod.title} - {vod.duration}
      </p>

      { 
      vod.thumbnail_url &&
        <img src={vod.thumbnail_url.replace('%{width}', 160).replace('%{height}', 90)} />
        }
      <button onClick={() => castVOD(vod.id)}>cast me</button>
    </div>
  );
}
