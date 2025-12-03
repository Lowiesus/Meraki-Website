import { X } from 'lucide-react';

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onDelete: () => void;
  itemTitle?: string;
}

export default function DeleteConfirmationModal({ 
  isOpen, 
  onCancel, 
  onDelete,
  itemTitle 
}: DeleteConfirmationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onCancel}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
        {/* Close button */}
        <button
          onClick={onCancel}
          className="absolute top-4 right-4 text-[#94a3b8] hover:text-[#64748b] transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="p-8 pt-12 text-center">
          {/* Warning Icon */}
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-16 rounded-full bg-[#fee2e2] flex items-center justify-center">
              <svg className="w-8 h-8 text-[#ef4444]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h2 className="font-['Work_Sans:Bold',sans-serif] font-bold text-[24px] text-[#1e293b] mb-3">
            Delete Item
          </h2>

          {/* Message */}
          <p className="font-['Work_Sans:Regular',sans-serif] font-normal text-[15px] text-[#64748b] mb-8 leading-relaxed">
            {itemTitle 
              ? `Are you sure you want to remove "${itemTitle}" from your cart? This action cannot be undone.`
              : 'Are you sure you want to remove this item from your cart? This action cannot be undone.'
            }
          </p>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={onCancel}
              className="flex-1 px-6 py-3 rounded-lg font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[15px] text-[#64748b] bg-[#f1f5f9] hover:bg-[#e2e8f0] transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onDelete}
              className="flex-1 px-6 py-3 rounded-lg font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[15px] text-white bg-[#ef4444] hover:bg-[#dc2626] transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
