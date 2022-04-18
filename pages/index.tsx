import ListLayout from "../components/layout/ListLayout";
import { useSession, signIn, signOut } from "next-auth/react";

const Home = () => {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <>
          <button onClick={() => signOut()}>Sign out</button>
          <ListLayout
            posts={[]}
            title="All Posts"
            pagination={{ currentPage: 1, totalPages: 2 }}
          />
        </>
      ) : (
        <>
          <button onClick={() => signIn()}>Sign in</button>
          <h1>Not logged in</h1>
        </>
      )}
    </>
  );
};

export default Home;
