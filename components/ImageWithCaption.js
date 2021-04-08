export default function ImageWithCaption(props) {
  return (
    <div className='photo-holder'>
      <img src={props.src} alt={props.alt}/>
      <p className='photo-caption'>{props.caption}</p>
      <style jsx>{`
        .photo-holder {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  )
}
