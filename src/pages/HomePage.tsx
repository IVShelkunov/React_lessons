//HomePage.tsx
import type{ HomePageProps } from "../types/types";
export function HomePage({posts}: HomePageProps) {
  return (
    <div className="home">
      <h1>Последние посты</h1>
      <ul>
      {posts.map(post => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </li>
        ))}
    </ul>
    </div>
  );
}
