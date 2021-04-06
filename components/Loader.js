import {Loader as ReactLoader} from 'react-loaders';

export default function Loader() {
  return (
    <div id="loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx="24" cy="24" r="22" fill="none" strokeWidth="4" stroke="#eeeeee"/><circle className="path" cx="24" cy="24" r="22" fill="none" strokeWidth="4" strokeMiterlimit="10" stroke="#b7b2a2"/></svg></div>
  )
}
