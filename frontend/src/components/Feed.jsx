import { useEffect, useState } from 'react';
import { axiosInstance } from '../lib/axios.js';
import PostCard from './PostCard';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const res = await axiosInstance.get('/posts');
        if (!mounted) return;
        setPosts(res.data || []);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError(err?.response?.data?.message || 'Failed to load posts');
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchPosts();
    return () => { mounted = false; };
  }, []);

  if (loading) return <div className="py-12 text-center">Loading posts...</div>;
  if (error) return <div className="py-12 text-center text-red-500">{error}</div>;
  if (!posts.length) return <div className="py-12 text-center text-zinc-500">No posts yet.</div>;

  return (
    <div className="space-y-6">
      {posts.map((p) => (
        <PostCard key={p._id} post={p} />
      ))}
    </div>
  );
};

export default Feed;
