import LoginComponent from './LoginComponent';

export default function LoginForContentButton() {
  return (
    <div className='sorry'>
      <LoginComponent text='Click to make a new friend'/>
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
