import { Layout, Post } from '../../components';
import { resources, sortPosts } from "../../lib/getAllPosts";

export default function Resources(props) {
  let pageContent = sortPosts(resources).map((post, index) => (
    <Post post={post} key={index} folder='resources'/>
  ))

  return (
    <Layout pageTitle='she makes cool things sometimes' activePage='resources' children={pageContent}/>
  )
}
