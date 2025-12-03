import { useState, useRef } from 'react';
import { X, Image as ImageIcon, Video, ChevronLeft, ChevronRight } from 'lucide-react';
import imgAvatarSmall from "figma:asset/ce67d23a925af943f1634792363b9deeb4837a22.png";
import imgFrame from "figma:asset/43f2f605db1237de841075d44257840170104211.png";

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAttemptClose: () => void;
}

interface UploadedFile {
  id: string;
  file: File;
  preview: string;
  type: 'image' | 'video';
}

export default function CreatePostModal({ isOpen, onClose, onAttemptClose }: CreatePostModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [caption, setCaption] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [currentPreviewIndex, setCurrentPreviewIndex] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (files: FileList | null) => {
    if (!files) return;

    const newFiles: UploadedFile[] = [];
    const remainingSlots = 10 - uploadedFiles.length;
    const filesToProcess = Math.min(files.length, remainingSlots);

    for (let i = 0; i < filesToProcess; i++) {
      const file = files[i];
      const fileType = file.type.startsWith('image/') ? 'image' : file.type.startsWith('video/') ? 'video' : null;

      if (fileType) {
        const preview = URL.createObjectURL(file);
        newFiles.push({
          id: Math.random().toString(36).substr(2, 9),
          file,
          preview,
          type: fileType,
        });
      }
    }

    setUploadedFiles([...uploadedFiles, ...newFiles]);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileSelect(e.dataTransfer.files);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleRemoveFile = (id: string) => {
    setUploadedFiles(uploadedFiles.filter(f => f.id !== id));
  };

  const handleNext = () => {
    if (uploadedFiles.length > 0) {
      setStep(2);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const handlePost = () => {
    // Handle posting logic here
    console.log('Posting...', { files: uploadedFiles, caption });
    // Reset and close
    setUploadedFiles([]);
    setCaption('');
    setStep(1);
    setCurrentPreviewIndex(0);
    onClose();
  };

  const handleCloseAttempt = () => {
    if (uploadedFiles.length > 0 || caption.trim()) {
      onAttemptClose();
    } else {
      onClose();
    }
  };

  const nextPreview = () => {
    setCurrentPreviewIndex((prev) => (prev + 1) % uploadedFiles.length);
  };

  const prevPreview = () => {
    setCurrentPreviewIndex((prev) => (prev - 1 + uploadedFiles.length) % uploadedFiles.length);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop - covers Center Feed and Right Panel only */}
      <div 
        className="fixed inset-0 bg-black/50 z-30 ml-[90px]"
        onClick={handleCloseAttempt}
      />

      {/* Modal */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 ml-[45px]">
        <div className="bg-white rounded-2xl shadow-2xl w-[800px] max-h-[90vh] overflow-hidden">
          {/* Header */}
          <div className="border-b border-[#e2e8f0] px-6 py-4 flex items-center justify-between">
            <h2 className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[18px] text-[#1e293b]">
              Create new post
            </h2>
            <button 
              onClick={handleCloseAttempt}
              className="text-[#94a3b8] hover:text-[#64748b] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          {step === 1 ? (
            // Step 1: File Upload
            <div className="p-8">
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*,video/*"
                onChange={(e) => handleFileSelect(e.target.files)}
                className="hidden"
              />

              {/* Dropzone */}
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-xl p-12 flex flex-col items-center justify-center cursor-pointer transition-all ${
                  isDragging 
                    ? 'border-[#60A5FA] bg-[#60A5FA]/5' 
                    : 'border-[#e2e8f0] hover:border-[#60A5FA] hover:bg-[#f8fafc]'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <ImageIcon className="w-12 h-12 text-[#94a3b8]" strokeWidth={1.5} />
                  <Video className="w-12 h-12 text-[#94a3b8]" strokeWidth={1.5} />
                </div>
                <p className="font-['Work_Sans:Medium',sans-serif] font-medium text-[16px] text-[#1e293b] mb-2">
                  Drag photos and videos here
                </p>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    fileInputRef.current?.click();
                  }}
                  className="mt-4 bg-[#60A5FA] hover:bg-[#3b82f6] text-white px-6 py-2.5 rounded-lg font-['Work_Sans:Medium',sans-serif] font-medium text-[14px] transition-colors"
                >
                  Select from computer
                </button>
                <p className="font-['Work_Sans:Regular',sans-serif] font-normal text-[12px] text-[#94a3b8] mt-4">
                  Maximum {10 - uploadedFiles.length} files remaining
                </p>
              </div>

              {/* Uploaded Files Preview */}
              {uploadedFiles.length > 0 && (
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-['Work_Sans:Medium',sans-serif] font-medium text-[14px] text-[#1e293b]">
                      Selected files ({uploadedFiles.length}/10)
                    </p>
                  </div>
                  <div className="grid grid-cols-5 gap-3">
                    {uploadedFiles.map((file) => (
                      <div key={file.id} className="relative group aspect-square rounded-lg overflow-hidden bg-[#f1f5f9]">
                        {file.type === 'image' ? (
                          <img src={file.preview} alt="" className="w-full h-full object-cover" />
                        ) : (
                          <video src={file.preview} className="w-full h-full object-cover" />
                        )}
                        <button
                          onClick={() => handleRemoveFile(file.id)}
                          className="absolute top-1 right-1 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="w-3 h-3" />
                        </button>
                        {file.type === 'video' && (
                          <div className="absolute bottom-1 left-1 bg-black/60 text-white px-1.5 py-0.5 rounded text-[10px]">
                            <Video className="w-3 h-3" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Next Button */}
              <div className="flex justify-end mt-6">
                <button
                  onClick={handleNext}
                  disabled={uploadedFiles.length === 0}
                  className={`px-8 py-2.5 rounded-lg font-['Work_Sans:Medium',sans-serif] font-medium text-[14px] transition-colors ${
                    uploadedFiles.length > 0
                      ? 'bg-[#60A5FA] hover:bg-[#3b82f6] text-white'
                      : 'bg-[#e2e8f0] text-[#94a3b8] cursor-not-allowed'
                  }`}
                >
                  Next
                </button>
              </div>
            </div>
          ) : (
            // Step 2: Details & Caption
            <div className="flex h-[600px]">
              {/* Left: Preview Carousel */}
              <div className="flex-1 bg-[#f8fafc] relative flex items-center justify-center">
                {uploadedFiles.length > 0 && (
                  <>
                    {uploadedFiles[currentPreviewIndex].type === 'image' ? (
                      <img 
                        src={uploadedFiles[currentPreviewIndex].preview} 
                        alt="" 
                        className="max-w-full max-h-full object-contain"
                      />
                    ) : (
                      <video 
                        src={uploadedFiles[currentPreviewIndex].preview} 
                        controls
                        className="max-w-full max-h-full object-contain"
                      />
                    )}

                    {/* Navigation Arrows */}
                    {uploadedFiles.length > 1 && (
                      <>
                        <button
                          onClick={prevPreview}
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                        >
                          <ChevronLeft className="w-5 h-5 text-[#64748b]" />
                        </button>
                        <button
                          onClick={nextPreview}
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                        >
                          <ChevronRight className="w-5 h-5 text-[#64748b]" />
                        </button>

                        {/* Indicators */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                          {uploadedFiles.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentPreviewIndex(idx)}
                              className={`rounded-full w-2 h-2 transition-all ${
                                idx === currentPreviewIndex ? 'bg-white w-6' : 'bg-white/50'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>

              {/* Right: Caption & Settings */}
              <div className="w-[340px] border-l border-[#e2e8f0] flex flex-col">
                {/* User Info */}
                <div className="p-4 border-b border-[#e2e8f0] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img src={imgAvatarSmall} alt="Pengu" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#1e293b]">
                      Pengu
                    </span>
                    <img src={imgFrame} alt="" className="w-3 h-3" />
                  </div>
                </div>

                {/* Caption Input */}
                <div className="flex-1 p-4">
                  <textarea
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    placeholder="What's on your mind?"
                    className="w-full h-32 resize-none border-none outline-none font-['Work_Sans:Regular',sans-serif] font-normal text-[14px] text-[#1e293b] placeholder:text-[#94a3b8]"
                    maxLength={2200}
                  />
                  <div className="text-right">
                    <span className="font-['Work_Sans:Regular',sans-serif] font-normal text-[12px] text-[#94a3b8]">
                      {caption.length}/2200
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-4 border-t border-[#e2e8f0] flex gap-3">
                  <button
                    onClick={handleBack}
                    className="flex-1 bg-[#e2e8f0] hover:bg-[#cbd5e1] text-[#64748b] px-4 py-2.5 rounded-lg font-['Work_Sans:Medium',sans-serif] font-medium text-[14px] transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={handlePost}
                    className="flex-1 bg-[#60A5FA] hover:bg-[#3b82f6] text-white px-4 py-2.5 rounded-lg font-['Work_Sans:Medium',sans-serif] font-medium text-[14px] transition-colors"
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
