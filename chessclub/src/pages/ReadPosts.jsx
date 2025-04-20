import React from 'react';
import { useState } from 'react';
import './ReadPosts.css'
import { supabase } from '../client';
// import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import { useEffect } from 'react';
const ReadPosts = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            const { data, error } = await supabase
              .from('chessclub')
              .select()
              .order('created_at', { ascending: false });
          
            if (error) {
              console.error("Error fetching posts:", error);
            } else {
              console.log("Fetched posts:", data);
              setPosts(data);
            }
          };
        fetchPost();
        // setPosts(props.data);
    }, []);
    
    return (
        <div className="ReadPosts">
            {
                posts && posts.length > 0 ?
                
                posts.map((post,index) => 
                   <Card id={post.id} title={post.title} caption={post.caption} image={post.image}/>
                ) 
                 : <h2>{'No Posts Yet 😞'}</h2>
            }
        </div>  
    )
}

export default ReadPosts;