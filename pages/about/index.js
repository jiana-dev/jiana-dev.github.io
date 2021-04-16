import { Layout } from '../../components';
import FeaturePost from '../../components/FeaturePost';

export default function About() {
  let children = <FeaturePost/>

  return (
    <Layout pageTitle={`i'm so happy to have you`} activePage='about' children={children}/>
  )
}
