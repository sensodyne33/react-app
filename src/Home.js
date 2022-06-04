import { useEffect, useState } from "react";
import BlogList from "./Bloglist";


const Home = () => {
    const [blogs, setBlogs] = useState(null);




    //useEffect is used to fetch data from json file
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
          .then(res => {
            return res.json();
          })
          .then(data => {
            setBlogs(data);
          })
    }, [])

    return ( 
        <div className="home">
          {blogs && <BlogList blogs={blogs} title="Cool blog"/>}
        </div>
     );
}
 
export default Home;