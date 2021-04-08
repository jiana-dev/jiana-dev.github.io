export default function VideoWithCaption(props) {
  return (
    <div className='video-holder'>
      <video src={props.src} alt={props.alt} autoPlay controls/>
      <p className='photo-caption'>{props.caption}</p>
      <style jsx>{`
        .video-holder {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  )
}
