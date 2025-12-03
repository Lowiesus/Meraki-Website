import { useState } from "react";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";

const FILE_MAX_BYTES = 200 * 1024; // 200 KB

const toBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

const FilePreview = ({ fileData }) => (
    <div className="w-full h-full flex items-center justify-center bg-red-500 rounded-md relative overflow-hidden">
        {fileData ? (
            <img src={fileData} alt="preview" className="w-full h-full object-cover" />
        ) : (
            <div className="w-24 h-24 rounded-full bg-yellow-300 flex items-center justify-center text-white">📷</div>
        )}
        <div className="absolute bottom-3 right-3 bg-white rounded-full p-2 border">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h4l2-3h6l2 3h4v11a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
            </svg>
        </div>
    </div>
);

const CreateSellModal = ({ onClose }) => {
    const [fileData, setFileData] = useState(null);
    const [fileObj, setFileObj] = useState(null);
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [tagsInput, setTagsInput] = useState("");
    const [loading, setLoading] = useState(false);

    const onFileChange = (e) => {
        const f = e.target.files && e.target.files[0];
        if (!f) return;
        if (f.size > FILE_MAX_BYTES) {
            toast.error(`Image too large — maximum ${Math.round(FILE_MAX_BYTES/1024)} KB`);
            return;
        }
        const reader = new FileReader();
        reader.onload = () => setFileData(reader.result);
        reader.readAsDataURL(f);
        setFileObj(f);
    };

    const submit = async (e) => {
        e.preventDefault();
        if (!name.trim()) {
            toast.error("Product name is required");
            return;
        }
        if (!fileObj) {
            toast.error("Please upload an image for your product");
            return;
        }
        if (!price || isNaN(Number(price))) {
            toast.error("Please enter a valid price");
            return;
        }

        setLoading(true);
        try {
            const images = [];
            // Convert fileObj to base64 (already validated size)
            const b64 = await toBase64(fileObj);
            images.push(b64);

            const payload = {
                caption: description || "",
                images,
                listing: {
                    name: name.trim(),
                    type: type || "",
                    price: Number(price),
                    description: description || "",
                    tags: tagsInput.split(",").map((t) => t.trim()).filter(Boolean),
                },
            };

            await axiosInstance.post("/posts", payload);
            toast.success("Listing created");
            // reset
            setFileData(null);
            setFileObj(null);
            setName("");
            setType("");
            setPrice("");
            setDescription("");
            setTagsInput("");
            onClose && onClose();
        } catch (err) {
            console.error(err);
            toast.error(err?.response?.data?.message || "Failed to create listing");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/40" onClick={onClose} />

            <form onSubmit={submit} className="relative bg-white rounded-xl w-[900px] max-w-full p-6 shadow-lg">
                <div className="text-center mb-4">
                    <h3 className="font-semibold text-lg">Create Listing</h3>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-center justify-center">
                        <div className="w-[360px] h-[360px] bg-zinc-100 rounded-lg p-4">
                            <FilePreview fileData={fileData} />
                            <div className="mt-3 flex items-center justify-end">
                                <label className="btn btn-sm btn-primary cursor-pointer">
                                    Upload Image
                                    <input type="file" accept="image/*" className="hidden" onChange={onFileChange} />
                                </label>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="mb-3">
                            <label className="block text-sm font-medium mb-1">Product Name</label>
                            <input value={name} onChange={(e)=>setName(e.target.value)} className="input input-bordered w-full" />
                        </div>

                        <div className="mb-3">
                            <label className="block text-sm font-medium mb-1">Type</label>
                            <select value={type} onChange={(e)=>setType(e.target.value)} className="select select-bordered w-full">
                                <option value="">Select type</option>
                                <option value="physical">Physical</option>
                                <option value="digital">Digital</option>
                                <option value="service">Service</option>
                            </select>
                        </div>

                        <div className="mb-3 flex items-center gap-3">
                            <div className="flex-1">
                                <label className="block text-sm font-medium mb-1">Price</label>
                                <input value={price} onChange={(e)=>setPrice(e.target.value)} className="input input-bordered w-full" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Tags</label>
                                <input value={tagsInput} onChange={(e)=>setTagsInput(e.target.value)} placeholder="comma,separated" className="input input-bordered" />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="block text-sm font-medium mb-1">Description</label>
                            <textarea value={description} onChange={(e)=>setDescription(e.target.value)} className="textarea textarea-bordered w-full h-40" />
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex justify-end gap-3">
                    <button type="button" className="btn btn-ghost" onClick={onClose} disabled={loading}>Cancel</button>
                    <button type="submit" className="btn btn-primary" disabled={loading}>{loading ? 'Creating...' : 'Create'}</button>
                </div>
            </form>
        </div>
    );
};

export default CreateSellModal;
