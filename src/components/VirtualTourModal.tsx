"use client";

import { useEffect } from "react";

interface VirtualTourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VirtualTourModal({ isOpen, onClose }: VirtualTourModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition"
          aria-label="Close"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Kuula iframe */}
        <iframe
          src="https://kuula.co/share/collection/7c3nw?logo=0&info=0&fs=1&vr=1&zoom=1&autorotate=0.12&thumbs=1&alpha=0.60&inst=ru"
          className="w-full h-full"
          allow="xr-spatial-tracking; gyroscope; accelerometer"
          allowFullScreen
        />
      </div>
    </div>
  );
}
