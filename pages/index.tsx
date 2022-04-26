import ListLayout from "../components/layout/ListLayout";
import { attributes, react as HomeContent } from "../content/home.md";

const Home = () => {
  let { title, cats } = attributes;

  return (
    <>
      <ListLayout
        posts={[]}
        title="All Posts"
        pagination={{ currentPage: 1, totalPages: 2 }}
      />
      <article>
        <h1>{title}</h1>
        <HomeContent />
        <ul>
          {cats > 0
            ? cats.map(({ cat, k }: any) => (
                <li key={k}>
                  <h2>{cat.name}</h2>
                  <p>{cat.description}</p>
                </li>
              ))
            : null}
        </ul>
      </article>
    </>
  );
};

export default Home;
