import { Image } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios.js";

const toBase64 = (file) =>
new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
});

const CreatePostModal = ({ onClose }) => {
const [files, setFiles] = useState([]);
const [caption, setCaption] = useState("");
const [loading, setLoading] = useState(false);

const handleFiles = async (fileList) => {
    const arr = Array.from(fileList).slice(0, 4); // limit to 4 files
    setFiles(arr);
};

const handleSubmit = async () => {
    if (!files.length && !caption.trim()) {
    toast.error("Add an image or caption before posting.");
    return;
    }

    setLoading(true);
    try {
        const images = [];
        for (const f of files) {
        const b64 = await toBase64(f);
        images.push(b64);
    }

    const payload = { caption, images };
    const res = await axiosInstance.post("/posts", payload);
    toast.success("Post created");
    setCaption("");
    setFiles([]);
    onClose && onClose();
    } catch (err) {
    console.error(err);
        toast.error(err?.response?.data?.message || "Failed to create post");
    } finally {
        setLoading(false);
    }
};

return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
        <div className="bg-white rounded-2xl w-[92vw] max-w-md p-6 border border-base-200 shadow-xl">
            <div className="flex items-center justify-center mb-4 border-b pb-3">
            <h3 className="text-center w-full font-semibold">Create new post</h3>
        </div>

        <div className="flex flex-col items-center py-6">
                <div className="mb-3 text-center">
                    <Image className="mx-auto w-20 h-20 text-zinc-300" />
                    <div className="mt-3 text-sm text-zinc-600">Drag photos and videos here</div>
                </div>

        <label className="inline-flex items-center">
            <input
                type="file"
                accept="image/*,video/*"
                multiple
                className="hidden"
                onChange={(e) => handleFiles(e.target.files)}
            />
            <span className="btn btn-primary">Select from computer</span>
        </label>

        {files.length > 0 && (
            <div className="mt-4 w-full">
                {files.map((f, idx) => (
                <div key={idx} className="flex items-center justify-between mb-2 border p-2 rounded">
                    <div className="truncate">{f.name}</div>
                    <div className="text-xs text-zinc-500">{Math.round(f.size / 1024)} KB</div>
                </div>
            ))}
            </div>
        )}

        <textarea
            placeholder="Write a caption..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="mt-4 textarea textarea-bordered w-full"
        />

        <div className="mt-4 flex justify-end gap-2 w-full">
            <button className="btn btn-ghost" onClick={onClose} disabled={loading}>Cancel</button>
            <button className="btn btn-primary" onClick={handleSubmit} disabled={loading}>{loading ? 'Posting...' : 'Share'}</button>
        </div>
        </div>
    </div>
    </div>
);
};

export default CreatePostModal;
