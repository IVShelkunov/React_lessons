//HomePage.tsx

import { Link } from "react-router-dom";
import { posts } from "../data/data";

export function HomePage() {
return (
  <div className="home-page">
    <h1>Наш блог</h1>
    <ul>
      {posts.map(post => (
        <li key={post.id}><Link to={`/posts/${post.id}`}>{post.id}# {post.title}</Link></li>
      ))}
    </ul>
  </div>
  );
}
