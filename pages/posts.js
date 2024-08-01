import Card from "../components/cards/Card";
import { ThreeCol } from "../components/grids";
import Layout from "../components/layout/Layout";
import { getSortedPostsData } from "../lib/posts";

const Posts = ({ allPostsData }) => {
  return (
    <Layout>
      <section>
        <h2>Blog</h2>
        <p>Posts coming soon!</p>
        {/* <ThreeCol>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Card
                title={title}
                subtitle={date}
                image="none"
                description="lorem ipsum"
              />
            </li>
          ))}
        </ThreeCol> */}
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default Posts;
