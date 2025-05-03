'use client';

import React, { useState } from 'react';

type Variant = 'rectangle' | 'square' | 'smallsquare';
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
  secondSnippet?: React.ReactNode;
  secondSnippetPosition?: SnippetPosition;
}

const defaultDimensions = {
  rectangle: { width: 816, height: 430 },
  square: { width: 408, height: 430 },
  smallsquare: { width: 300, height: 350 },
};

const getSnippetPositionClasses = (position: SnippetPosition) => {
  switch (position) {
    case 'start':
      return 'top-[15px] left-[30px]';
    case 'end':
      return 'bottom-[15px] right-[30px]';
    case 'center':
    default:
      return 'top-[15px] left-1/2 transform -translate-x-1/2';
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
  secondSnippet,
  secondSnippetPosition = 'end',
}: ImageDisplayProps<T>) => {
  const [isError, setIsError] = useState(false);
  const shouldShowPlaceholder = isError || !src;

  const finalWidth = width ?? defaultDimensions[variant].width;
  const finalHeight = height ?? defaultDimensions[variant].height;

  return (
    <div
      className={`max-w-7xl mx-auto relative overflow-hidden rounded-[20px] bg-gray-100 flex justify-center items-center text-gray-400 text-sm ${className}`}
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
          className={`absolute z-10 text-white text-lg font-semibold inline-flex items-center whitespace-nowrap ${getSnippetPositionClasses(snippetPosition)}`}
          style={{
            backgroundColor: '#F28A15',
            borderRadius: '12px',
            padding: '10px 20px',
          }}
        >
          {snippet}
        </div>
      )}

{secondSnippet && (
  <div
    className={`absolute z-10 text-white text-base font-medium inline-flex items-center whitespace-nowrap ${getSnippetPositionClasses(secondSnippetPosition ?? 'end')}`}
    style={{
      backgroundColor: 'transparent', 
      borderRadius: '10px',
      padding: '6px 16px',
    }}
  >
    {secondSnippet}
  </div>
)}
    </div>
  );
};

export default ImageDisplay;
