
const timeAgo = (iso) => {
  try {
    const diff = Date.now() - new Date(iso).getTime();
    const seconds = Math.floor(diff / 1000);
    if (seconds < 60) return `${seconds}s`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h`;
    const days = Math.floor(hours / 24);
    return `${days}d`;
  } catch (e) {
    return '';
  }
};

import { ChevronLeft, ChevronRight, Heart, MessageSquare, MoreHorizontal } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useAuthStore } from '../store/useAuthStore';

const PostCard = ({ post }) => {
  const { author, caption, media, createdAt, likes } = post || {};
  const mediaArr = Array.isArray(media) ? media : [];

  const { authUser } = useAuthStore();
  const userId = authUser?._id || authUser?.id;

  const [index, setIndex] = useState(0);
  const likesCountInitial = Array.isArray(likes) ? likes.length : 0;
  const likedInitial = useMemo(() => {
    if (!userId || !Array.isArray(likes)) return false;
    return likes.includes(userId) || likes.includes(String(userId));
  }, [likes, userId]);

  const [liked, setLiked] = useState(likedInitial);
  const [likesCount, setLikesCount] = useState(likesCountInitial);

  const toggleLike = () => {
    if (liked) {
      setLiked(false);
      setLikesCount((c) => Math.max(0, c - 1));
    } else {
      setLiked(true);
      setLikesCount((c) => c + 1);
    }
  };

  const prev = (e) => { e.stopPropagation(); setIndex((i) => (i - 1 + mediaArr.length) % mediaArr.length); };
  const next = (e) => { e.stopPropagation(); setIndex((i) => (i + 1) % mediaArr.length); };

  return (
    <article className="bg-base-100 rounded-xl shadow-md overflow-hidden">
      <div className="p-3 flex items-center gap-3">
        <img src={author?.profilePic || '/avatar.png'} alt={author?.fullName || 'User'} className="w-9 h-9 rounded-full object-cover" />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <div className="font-semibold text-sm">{author?.fullName || 'USERNAME'}</div>
            <div className="text-xs text-yellow-400">●</div>
            <div className="text-xs text-zinc-400">{timeAgo(createdAt)}</div>
          </div>
        </div>
        <div>
          <MoreHorizontal className="w-5 h-5 text-zinc-500" />
        </div>
      </div>

      <div className="relative h-[68vh] max-h-[680px] w-full bg-zinc-100">
        {mediaArr.length ? (
          <>
            <img src={mediaArr[index]} alt={caption || 'post image'} className="w-full h-full object-cover" />

            {mediaArr.length > 1 && (
              <>
                <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white rounded-full p-2">
                  <ChevronLeft className="w-5 h-5 text-zinc-700" />
                </button>
                <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white rounded-full p-2">
                  <ChevronRight className="w-5 h-5 text-zinc-700" />
                </button>
              </>
            )}

            {mediaArr.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {mediaArr.map((_, i) => (
                  <span key={i} className={`w-2 h-2 rounded-full ${i === index ? 'bg-white' : 'bg-white/60'}`} />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-zinc-400">No media</div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-center gap-4 mb-3">
          <button onClick={toggleLike} className="flex items-center gap-2">
            <Heart className={`w-5 h-5 ${liked ? 'text-red-500' : 'text-zinc-600'}`} />
            <span className="text-sm font-medium">{likesCount.toLocaleString()}</span>
          </button>

          <div className="flex items-center gap-2 text-zinc-500">
            <MessageSquare className="w-5 h-5" />
            <span className="text-sm">{/* placeholder for comments count */}13,384</span>
          </div>
        </div>

        <p className="text-sm text-zinc-800 mb-3">{caption}</p>

        <div className="text-sm text-zinc-400">Add a comment...</div>
      </div>
    </article>
  );
};

export default PostCard;
