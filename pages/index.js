import { Layout } from '../components';
import TwoColumnImageLayout from '../components/TwoColumnImageLayout';

export default function Home() {
  let children =
    <>
      <TwoColumnImageLayout/>
    </>

  return (
    <Layout pageTitle={`welcome to my brain`} activePage='home' children={children}/>
  )
}
