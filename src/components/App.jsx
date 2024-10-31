import { useEffect, useState } from "react";
import Nav from "./Nav";
import Article from "./Article";
import ArticleEntry from "./ArticleEntry";
import { SignIn, SignOut } from "./auth";
import { useAuthentication } from "../services/authservice";
import { fetchArticles, createArticle } from "../services/articleService";
import "./App.css";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState(null);
  const [writing, setWriting] = useState(false);
  const user = useAuthentication();

  useEffect(() => {
    if (user) {
      fetchArticles().then(setArticles);
    }
  }, [user]);

  function addArticle({ title, body }) {
    createArticle({ title, body }).then((article) => {
      setArticle(article);
      setArticles([article, ...articles]);
      setWriting(false);
    });
  }

  return (
    <div className="App">
      <header>
        <h4>Jesus' Personal Blog</h4>
        {user && <button onClick={() => setWriting(true)}>New Article</button>}
        {!user ? <SignIn /> : <SignOut user={user} />}
      </header>

      {user && (
        <>
          <Nav articles={articles} setArticle={setArticle} />
          {writing ? (
            <ArticleEntry addArticle={addArticle} />
          ) : (
            <Article article={article} />
          )}
        </>
      )}
    </div>
  );
}
