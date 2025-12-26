import { keepPreviousData, useQuery } from '@tanstack/react-query'
import './App.css'
import { useState } from 'react';
import { fetchPosts } from './api/apiPosts';

function App() {
  const [page , setPage] = useState(1);
  const {data} = useQuery({
    queryKey: ['posts' , page],
    queryFn: () => fetchPosts(page , 5),
    placeholderData:keepPreviousData
  });

  return (
    <div className="layout">
      <header>Посты</header>
      <main>
        {data && (
          <div>
          <ul>
            {data.map(post => (
              <li key={post.id}>{post.id}# {post.title}</li>
            ))}
          </ul>
          <button onClick={() => setPage(prev => prev - 1)} disabled={page===1}>◀Prev</button>
            <span>Page {page}</span>
          <button onClick={() => setPage(prev => prev + 1)} disabled={data.length < 5}>Next▶</button>
        </div>
        )}
      </main>  
    </div>
  )
}

export default App
