import Layout from "../../components/layout/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

function Posts({ metadata, contentHtml }) {
  return (
    <Layout>
      {metadata.title}
      <br />
      {metadata.id}
      <br />
      {metadata.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      metadata: postData.data,
      contentHtml: postData.content,
    },
  };
}

export default Posts;
