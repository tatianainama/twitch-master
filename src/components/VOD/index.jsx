import { castVOD } from '../../api';
import useVOD from '../../hooks/useVOD';

export function VOD (props) {
  const { vods } = useVOD();

  return (
    <>
      {
            vods && vods.vixella.map((data) => (
              <>
                <p>
                  {data.title} - {data.duration}
                </p>

                { data.thumbnail_url &&
                  <img src={data.thumbnail_url.replace('%{width}',
                      160).replace('%{height}', 90)} />
                    }
                <button onClick={() => castVOD(data.id)}>cast me</button>
              </>)
            )
        }
    </>
  );
}
