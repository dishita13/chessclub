import React, { useState } from 'react';
import { supabase } from '../client';
import './CreatePost.css';
const CreatePost = () => {
  const [post, setPost] = useState({ title: '', caption: '', image: '' });
  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = fileName;

    setUploading(true);

    const { error: uploadError } = await supabase.storage
      .from('postimages')
      .upload(filePath, file);

    if (uploadError) {
      console.error('Image upload error:', uploadError);
      setUploading(false);
      return;
    }

    const { data: publicUrlData } = supabase.storage
      .from('postimages')
      .getPublicUrl(filePath);

    setPost((prev) => ({ ...prev, image: publicUrlData.publicUrl }));
    setUploading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from('chessclub')
      .insert({
        title: post.title,
        caption: post.caption,
        image: post.image,
      });

    if (error) {
      console.error('Post creation error:', error);
    } else {
      setPost({ title: '', caption: '', image: '' });
    }
  };

  return (
    <div className='create-post-container'>
      <h5>Create a new post below</h5>
      <form onSubmit={handleSubmit}>
        <label>Title</label><br />
        <input type="text" name="title" value={post.title} onChange={handleChange} /><br /><br />

        <label>Caption</label><br />
        <input type="text" name="caption" value={post.caption} onChange={handleChange} /><br /><br />

        <label>Image</label><br />
        <input type="file" accept="image/*" onChange={handleImageUpload} /><br /><br />

        {uploading && <p>Uploading image...</p>}
        {post.image && (
          <div>
            <p>Image preview:</p>
            <img src={post.image} alt="Uploaded" style={{ maxWidth: '200px' }} />
          </div>
        )}

        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
