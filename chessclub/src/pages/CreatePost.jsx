import React, { useState } from 'react';
import { supabase } from '../client';
import './CreatePost.css';

const CreatePost = () => {
  const [post, setPost] = useState({ title: "", caption: "", image: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost(prev => ({ ...prev, [name]: value }));
  };

  const createPost = async (event) => {
    event.preventDefault();
  
    const {} = await supabase
      .from('chessclub')
      .insert({ title: post.title, caption: post.caption, image: post.image });

      window.location = "/";
  };
  

  return (
    <div>
      <form>
      <label htmlFor="caption">Post Title</label><br />
        <input type="text" name="title" value={post.title} onChange={handleChange} /><br /><br />

        <label htmlFor="caption">Caption</label><br />
        <input type="text" name="caption" value={post.caption} onChange={handleChange} /><br /><br />

        <label htmlFor="image">Submit an Image</label><br />
        <input type="text" name="image" value={post.image} onChange={handleChange} /><br /><br />

        <input type="submit" value="Submit" onClick={createPost} />
      </form>
    </div>
  );
};

export default CreatePost;
