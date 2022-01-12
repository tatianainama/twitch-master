import { VOD } from '../VOD';
import useVOD from '../../hooks/useVOD';

export function VODList () {
  const { vods } = useVOD();

  return (
    <>
      {
            vods && Object.keys(vods).map((username) => { 
              const userVods = vods[username];
              
              return userVods.map((vod) => (
                <VOD key={vod.id} vod={vod} />
            ));
          })
        }
    </>
  );
}
