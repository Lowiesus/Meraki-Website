import { useState } from "react";
import CreatePostModal from "./CreatePostModal";
import CreateSellModal from "./CreateSellModal";

const ChoiceCard = ({ title, description, onClick }) => (
<button
    onClick={onClick}
    className="w-full bg-white border border-base-300 rounded-lg p-6 text-left hover:shadow-md"
>
    <div className="font-semibold text-lg mb-1">{title}</div>
    <div className="text-sm text-zinc-500">{description}</div>
</button>
);

const CreateChoiceModal = ({ onClose }) => {
  const [choice, setChoice] = useState(null); // 'post' | 'sell'

if (choice === "post") return <CreatePostModal onClose={onClose} />;
if (choice === "sell") return <CreateSellModal onClose={onClose} />;

return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40" onClick={onClose} />

        <div className="relative bg-white rounded-lg w-[720px] max-w-full p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">What would you like to create?</h3>
        <button className="text-zinc-500" onClick={onClose}>✕</button>
        </div>

        <div className="grid grid-cols-2 gap-4">
        <ChoiceCard
            title="Create Post"
            description="Share an update, photos, or a moment with your followers."
            onClick={() => setChoice("post")}
        />

        <ChoiceCard
            title="Sell Item"
            description="List a product for sale with photos, price, and description."
            onClick={() => setChoice("sell")}
        />
        </div>
    </div>
</div>
);
};

export default CreateChoiceModal;
