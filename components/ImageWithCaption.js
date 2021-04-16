export default function ImageWithCaption(props) {
  return (
    <div style={props.style} className={`${props.tiny ? 'tiny' : ''} photo-holder`}>
      <img style={props.imgStyle} className={`${props.className ? props.className : ''} ${props.small ? 'smaller-img' : ''}`} src={props.src} alt={props.alt}/>
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

        img.hover:hover {
          filter: invert(99%) sepia(15%) saturate(934%) hue-rotate(309deg) brightness(91%) contrast(76%);
        }

        .tiny img {
            padding: 1em 0em 1em 0em;
        }
      `}</style>
    </div>
  )
}
