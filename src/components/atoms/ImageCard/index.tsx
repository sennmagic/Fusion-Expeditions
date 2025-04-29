'use client';

import React, { useState } from 'react';

type Variant = 'rectangle' | 'square';
type SnippetPosition = 'center' | 'start' | 'end';

interface ImageDisplayProps<T = string> {
  src?: T;
  alt?: string;
  className?: string;
  placeholderSrc?: T;
  variant?: Variant;
  width?: number;
  height?: number;
  snippet?: string;
  snippetPosition?: SnippetPosition;
}

const defaultDimensions = {
  rectangle: { width: 952, height: 571 },
  square: { width: 408, height: 430 },
};

const getSnippetPositionClasses = (position: SnippetPosition) => {
  switch (position) {
    case 'start':
      return 'top-4 left-4';
    case 'end':
      return 'bottom-4 right-4';
    case 'center':
    default:
      return 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
  }
};

const ImageDisplay = <T extends string>({
  src,
  alt = 'Image',
  className = '',
  placeholderSrc,
  variant = 'square',
  width,
  height,
  snippet,
  snippetPosition = 'start',
}: ImageDisplayProps<T>) => {
  const [isError, setIsError] = useState(false);
  const shouldShowPlaceholder = isError || !src;

  const finalWidth = width ?? defaultDimensions[variant].width;
  const finalHeight = height ?? defaultDimensions[variant].height;

  return (
    <div
      className={`relative overflow-hidden rounded-[20px] bg-gray-100 flex justify-center items-center text-gray-400 text-sm ${className}`}
      style={{ width: finalWidth, height: finalHeight }}
    >
      {shouldShowPlaceholder ? (
        placeholderSrc ? (
          <img
            src={placeholderSrc}
            alt="Placeholder"
            className="w-full h-full object-cover"
          />
        ) : (
          <span>{finalWidth}x{finalHeight}</span>
        )
      ) : (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onError={() => setIsError(true)}
        />
      )}

      {snippet && (
        <div
          className={`absolute z-10 text-white text-lg font-semibold ${getSnippetPositionClasses(snippetPosition)}`}
          style={{
            backgroundColor: '#F28A15',
            borderRadius: '12px',
            padding: '15px 30px',
            maxWidth: '628px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            whiteSpace: 'nowrap',
          }}
        >
          {snippet}
        </div>
      )}
    </div>
  );
};

export default ImageDisplay;
