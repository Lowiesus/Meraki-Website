import { AlertTriangle } from 'lucide-react';

interface DiscardChangesModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onDiscard: () => void;
}

export default function DiscardChangesModal({ isOpen, onCancel, onDiscard }: DiscardChangesModalProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 z-50"
        onClick={onCancel}
      />

      {/* Modal */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
        <div className="bg-white rounded-2xl shadow-2xl w-[480px] overflow-hidden">
          {/* Content */}
          <div className="p-8 text-center">
            {/* Warning Icon */}
            <div className="mx-auto w-16 h-16 bg-[#FEF2F2] rounded-full flex items-center justify-center mb-4">
              <AlertTriangle className="w-8 h-8 text-[#EF4444]" strokeWidth={2} />
            </div>

            {/* Title */}
            <h3 className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[20px] text-[#1e293b] mb-3">
              Discard Post?
            </h3>

            {/* Message */}
            <p className="font-['Work_Sans:Regular',sans-serif] font-normal text-[15px] text-[#64748b] leading-relaxed">
              You have unsaved changes. Are you sure you want to leave?
            </p>
          </div>

          {/* Action Buttons */}
          <div className="px-8 pb-8 flex gap-3">
            <button
              onClick={onCancel}
              className="flex-1 bg-[#e2e8f0] hover:bg-[#cbd5e1] text-[#475569] px-6 py-3 rounded-lg font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[15px] transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onDiscard}
              className="flex-1 bg-[#EF4444] hover:bg-[#DC2626] text-white px-6 py-3 rounded-lg font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[15px] transition-colors"
            >
              Discard
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
