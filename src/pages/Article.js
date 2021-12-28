import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import {useFetch} from '../hooks/useFetch';


export default function Article () {
    const {id} = useParams();
    const history = useHistory();   
    const url = 'http://localhost:3000/articles/' + id;
    const {data: article, isPending, error} = useFetch(url);

    useEffect(() => {
        if (error) {
            //redirect user
            setTimeout(() => {
                history.push('/');
            },2000);
         
        }
    },[error, history]) 

    return ( 
        <div>
            {isPending && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {article && 
                <div key={article.id}  className='article'>
                    <h2>{article.title}</h2>
                    <p>{article.author}</p>
                    <p>{article.body}</p>
                </div> 
            }
                </div>
     );
}
