import { Link } from 'preact-router/match';

export function Navigation (props) {
  return (
    < nav>
      <Link activeClassName="active" href="/">
        Home
      </Link>
      <Link activeClassName="active" href="/vod">
        VOD
      </Link>
    </nav>
  );
}
