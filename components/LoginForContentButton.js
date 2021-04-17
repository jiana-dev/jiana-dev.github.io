import LoginComponent from './LoginComponent';

export default function LoginForContentButton() {
  return (
    <div className='sorry'>
      <p className='small'>i would <b>love</b> to share with you, and maybe one day it'll be open to everyone, but for now, it's just a little personal so i wanna make sure we're friends</p>
      <LoginComponent text='we cool?'/>
      <style jsx>{`
      .sorry {
        position: fixed;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      `}</style>
    </div>
  )
}
