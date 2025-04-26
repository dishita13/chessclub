import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';
import './PostPage.css';

const PostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState({ title: '', caption: '', image: '' });
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
        try {
            const { data, error } = await supabase
                .from('chessclub')
                .select()
                .eq('id', id)
                .single();

            if (error) {
                console.error('Error fetching post:', error);
            } else {

                const comments = data.comments || [];
                data.comments = comments;

                setPost(data);
                setComments(comments);
            }
        } catch (error) {
            console.error('Error fetching post:', error.message);
        }
    };
    fetchPost();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };


  //handle comments that are submitted 
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    try {
        // Fetch existing comments for the post
        const { data: data, error: postError } = await supabase
            .from('chessclub')
            .select('comments')
            .eq('id', id)
            .single();

        if (postError) {
            throw postError;
        }

        const existingComments = data.comments || [];
        //append to existing comment array  
        const updatedComments = [...existingComments, newComment]; 

        // Update the post in the database with the updated comments array
        const { error: updateError } = await supabase
            .from('chessclub')
            .update({ comments: updatedComments })
            .eq('id', id);

        if (updateError) {
            throw updateError;
        }

        // Update the local state with the updated comments array
        setComments(updatedComments);
        setNewComment('');
    } catch (error) {
        console.error('Error adding comment:', error.message);
    }
};

  return (
    <div className='PostPage'>
      <h2>Post Page</h2>
      {post ? (
                <div>
                    <div className='card'>
                        <h3>{post.title}</h3>
                        <p>date created: {new Date(post.created_at).toLocaleDateString(undefined, {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                            })}</p>
                        {/* <p>upvotes: {post.upvotes}</p> */}
                        <p>{post.caption}</p>
                        {post.image && (
                        <img
                            src={post.image}
                            alt="Post"
                            style={{ maxWidth: '100%', borderRadius: '8px', marginTop: '12px' }}
                        />
                        )}
                    </div>
                    {/* Uncomment this if you want to add upvote and edit/delete functionality */}
                    {/* <button onClick={handleUpvote}>Upvote</button> */}
                    {/* <Link to={`/edit/${postId}`}>
                        <button>Edit</button>
                    </Link> */}
                    {/* <button onClick={handleDeletePost}>Delete</button> */}
                </div>
            ) : (
                <p>Loading...</p>
            )}

            <form onSubmit={handleCommentSubmit} className="comment-flexbox">
                <input type="text" className="input-box"value={newComment} onChange={(e) => setNewComment(e.target.value)} placeholder='Write a comment... what is your solution?' />
                <button type="submit" className="comment-button">Comment</button>
            </form>
            <h4>Comments</h4>
            {comments.map((comment) => (
                <div className="comment-container">
                    <li key={comment.id} type="none">
                        {comment}
                    </li>
                </div>

            ))}
    </div>
  );
};

export default PostPage;