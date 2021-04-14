export default function ImageWithCaption(props) {
  return (
    <div className={`${props.tiny ? 'tiny' : ''} photo-holder`}>
      <img className={`${props.small ? 'smaller-img' : ''}`} src={props.src} alt={props.alt}/>
      <p className='photo-caption'>{props.caption}</p>
      <style jsx>{`
        .photo-holder {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        img {
          padding: 2em 0em 1em 0em;
        }
        .tiny img {
            padding: 1em 0em 1em 0em;
        }
      `}</style>
    </div>
  )
}
