import Router from 'preact-router';
import { Live } from './components/Live'
import { VOD } from './components/VOD'
import { Navigation } from './components/Navigation'


export function App(props) {
  return (
    <>
    <Navigation />
    <Router>
      <Live path="/" />
      <VOD path="/vod" />
    </Router>
    </>
  )
}
