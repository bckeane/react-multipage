import {useFetch} from '../hooks/useFetch';
import { Link } from 'react-router-dom';
import './home.css';

export default function Home () {
    const {data: articles, isPending, error} = useFetch('http://localhost:3000/articles');

    return ( 
        <div className='home'>
            <h2>Articles</h2>
            {isPending && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {articles && articles.map((article) => (
                <div key={article.id}  className='card'>
                    <h3>{article.title}</h3>
                    <p>{article.author}</p>
                    <Link to={`article/${article.id}`}>Read More...</Link>
                </div> 
            ))}
        </div>
     );
}
