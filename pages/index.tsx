import ListLayout from "../components/layout/ListLayout";

const Home = () => {
  return (
    <>
      <ListLayout
        posts={[]}
        title="All Posts"
        pagination={{ currentPage: 1, totalPages: 2 }}
      />
    </>
  );
};

export default Home;
