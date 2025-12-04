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
    return "";
  }
};

import {
  ChevronLeft,
  ChevronRight,
  Heart,
  MessageSquare,
  MoreHorizontal,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { axiosInstance } from "../lib/axios";
import { useAuthStore } from "../store/useAuthStore";

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
  const [comments, setComments] = useState([]);
  const [commentsCount, setCommentsCount] = useState(null);
  const [commentText, setCommentText] = useState("");
  const [posting, setPosting] = useState(false);

  const priceValue = post?.listing?.price;
  const formattedPrice =
    priceValue != null && !Number.isNaN(Number(priceValue))
      ? new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(Number(priceValue))
      : null;

  const titleValue = post?.listing?.name;
  const formattedTitle =
    titleValue && String(titleValue).trim() ? String(titleValue).trim() : null;

  const toggleLike = () => {
    // optimistic UI
    const pid = post?._id || post?.id;
    if (!pid) return;

    const previousLiked = liked;
    const previousCount = likesCount;

    if (previousLiked) {
      setLiked(false);
      setLikesCount((c) => Math.max(0, c - 1));
    } else {
      setLiked(true);
      setLikesCount((c) => c + 1);
    }

    (async () => {
      try {
        await axiosInstance.post(`/posts/${pid}/like`);
      } catch (err) {
        // revert on error
        setLiked(previousLiked);
        setLikesCount(previousCount);
        try {
          const toast = (await import("react-hot-toast")).default;
          toast.error(err?.response?.data?.message || "Failed to update like");
        } catch (e) {}
      }
    })();
  };

  const handleBuy = async (e) => {
    e.stopPropagation();
    if (!authUser) {
      // you might want to open login modal; for now show toast
      try {
        const toast = (await import("react-hot-toast")).default;
        toast.error("Please sign in to buy items");
      } catch (err) {}
      return;
    }

    const pid = post?._id || post?.id;
    if (!pid) return;

    try {
      // Create order directly with this item
      const orderData = {
        items: [{ postId: pid, quantity: 1 }],
        paymentMethod: "cash_on_delivery",
        shippingAddress: "To be updated",
      };

      await axiosInstance.post("/orders", orderData);
      const toast = (await import("react-hot-toast")).default;
      toast.success(
        <span>
          Order placed!{" "}
          <a href="/cart" className="underline font-semibold">
            View Orders
          </a>
        </span>,
        { duration: 4000 }
      );
    } catch (err) {
      const toast = (await import("react-hot-toast")).default;
      toast.error(err?.response?.data?.message || "Failed to place order");
    }
  };

  useEffect(() => {
    let mounted = true;
    const pid = post?._id || post?.id;
    if (!pid) return;
    (async () => {
      try {
        const res = await axiosInstance.get(`/posts/${pid}/comments`);
        if (!mounted) return;
        setComments(res.data || []);
        setCommentsCount(Array.isArray(res.data) ? res.data.length : null);
      } catch (err) {
        // ignore fetch errors for comments
      }
    })();
    return () => {
      mounted = false;
    };
  }, [post]);

  const submitComment = async (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    const pid = post?._id || post?.id;
    if (!pid) return;
    setPosting(true);
    try {
      const res = await axiosInstance.post(`/posts/${pid}/comments`, {
        text: commentText.trim(),
      });
      const created = res.data;
      // server returns the created comment (populated)
      setComments((c) => [created, ...c]);
      setCommentsCount((c) => (typeof c === "number" ? c + 1 : (c || 0) + 1));
      setCommentText("");
    } catch (err) {
      // Could show toast here
    } finally {
      setPosting(false);
    }
  };

  const prev = (e) => {
    e.stopPropagation();
    setIndex((i) => (i - 1 + mediaArr.length) % mediaArr.length);
  };
  const next = (e) => {
    e.stopPropagation();
    setIndex((i) => (i + 1) % mediaArr.length);
  };

  return (
    <article className="bg-base-100 rounded-xl shadow-md overflow-hidden">
      <div className="p-3 flex items-center gap-3">
        <img
          src={author?.profilePic || "/avatar.png"}
          alt={author?.fullName || "User"}
          className="w-9 h-9 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <div className="font-semibold text-sm">
              {author?.fullName || "USERNAME"}
            </div>
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
            <img
              src={mediaArr[index]}
              alt={caption || "post image"}
              className="w-full h-full object-cover"
            />

            {mediaArr.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white rounded-full p-2"
                >
                  <ChevronLeft className="w-5 h-5 text-zinc-700" />
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white rounded-full p-2"
                >
                  <ChevronRight className="w-5 h-5 text-zinc-700" />
                </button>
              </>
            )}

            {mediaArr.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {mediaArr.map((_, i) => (
                  <span
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i === index ? "bg-white" : "bg-white/60"
                    }`}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-zinc-400">
            No media
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-center gap-4 mb-3">
          <button onClick={toggleLike} className="flex items-center gap-2">
            <Heart
              className={`w-5 h-5 ${liked ? "text-red-500" : "text-zinc-600"}`}
            />
            <span className="text-sm font-medium">
              {likesCount.toLocaleString()}
            </span>
          </button>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-zinc-500">
              <MessageSquare className="w-5 h-5" />
              <span className="text-sm">
                {commentsCount !== null ? commentsCount.toLocaleString() : "—"}
              </span>
            </div>

            {post?.kind === "listing" && (
              <div className="flex items-center gap-2">
                {formattedPrice && (
                  <div className="text-sm font-semibold text-zinc-800">
                    {formattedPrice}
                  </div>
                )}
                <button
                  type="button"
                  onClick={handleBuy}
                  className="btn btn-sm btn-primary"
                >
                  Buy
                </button>
              </div>
            )}
          </div>
        </div>

        {formattedTitle && (
          <div className="text-base font-semibold text-zinc-900 mb-1">
            {formattedTitle}
          </div>
        )}

        <p className="text-sm text-zinc-800 mb-3">{caption}</p>

        <div className="mt-3">
          {comments && comments.length > 0 && (
            <div className="mb-2">
              {comments.slice(0, 3).map((c) => (
                <div key={c._id || c.id} className="text-sm mb-1">
                  <span className="font-semibold mr-2">
                    {c.author?.username || c.author?.fullName || "User"}
                  </span>
                  <span className="text-zinc-800">{c.text}</span>
                </div>
              ))}
            </div>
          )}

          <form onSubmit={submitComment} className="flex items-center gap-2">
            <input
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder={authUser ? "Add a comment..." : "Log in to comment"}
              disabled={!authUser || posting}
              className="flex-1 input input-sm bg-zinc-100"
            />
            <button
              type="submit"
              className="btn btn-sm"
              disabled={!authUser || posting || !commentText.trim()}
            >
              {posting ? "Posting..." : "Post"}
            </button>
          </form>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
