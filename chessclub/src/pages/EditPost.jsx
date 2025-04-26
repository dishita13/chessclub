import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';
import './EditPost.css';

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState({ title: '', caption: '', image: '' });
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from('chessclub')
        .select()
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching post:', error);
      } else {
        setPost(data);
      }
    };

    fetchPost();
  }, [id]);

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

  const updatePost = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from('chessclub')
      .update({
        title: post.title,
        caption: post.caption,
        image: post.image,
      })
      .eq('id', id);

    if (error) {
      console.error('Error updating post:', error);
    } else {
      navigate('/');
    }
  };

  const deletePost = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from('chessclub')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting post:', error);
    } else {
      alert('Post deleted!');
      navigate('/');
    }
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={updatePost}>
        <label>Title</label><br />
        <input
          type="text"
          name="title"
          value={post.title}
          onChange={handleChange}
        /><br /><br />

        <label>Caption</label><br />
        <input
          type="text"
          name="caption"
          value={post.caption}
          onChange={handleChange}
        /><br /><br />

        <label>Image</label><br />
        <input type="file" accept="image/*" onChange={handleImageUpload} /><br /><br />
        {uploading && <p>Uploading image...</p>}
        {post.image && (
          <div>
            <p>Current image:</p>
            <img src={post.image} alt="Uploaded" style={{ maxWidth: '200px' }} />
          </div>
        )}

        <br />
        <button type="submit">Update Post</button>
        <button type="button" className="deleteButton" onClick={deletePost} style={{ marginLeft: '1rem' }}>
          Delete Post
        </button>
      </form>
    </div>
  );
};

export default EditPost;