import { useEffect, useState } from "react";
import BlogList from "./Bloglist";


const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);



    //useEffect is used to fetch data from json file
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    if(!res.ok){
                        throw Error('could not fetch data for this resource')
                    }
                    return res.json();
                })
                .then(data => {
                    setBlogs(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    setIsPending(false)
                    setError(err.message);
                })
        }, 1000);
    }, [])

    return ( 
        <div className="home">
            {error && <div>{ error}...</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="Cool blog"/>}
        </div>
     );
}
 
export default Home;