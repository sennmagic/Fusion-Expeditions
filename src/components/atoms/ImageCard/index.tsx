'use client';

import React, { useState } from 'react';

type Variant = 'rectangle' | 'square' | 'smallsquare' | 'smallrectangle';
type SnippetPosition = 'center' | 'start' | 'end';

interface ImageDisplayProps<T = string> {
  src?: T;
  alt?: string;
  className?: string;
  placeholderSrc?: T;
  variant?: Variant;
  height?: number | string;
  width?: number | string;
  snippet?: string;
  snippetPosition?: SnippetPosition;
  secondSnippet?: React.ReactNode;
  secondSnippetPosition?: SnippetPosition;
}

const getSnippetPositionClasses = (position: SnippetPosition) => {
  switch (position) {
    case 'start':
      return 'top-4 left-4';
    case 'end':
      return 'bottom-4 right-4';
    case 'center':
    default:
      return 'top-4 left-1/2 -translate-x-1/2';
  }
};

const defaultDimensions = {
  rectangle: { width: 820, height: 590 },
  square: { width: 408, height: 430 },
  smallsquare: { width: 200, height: 200 },
  smallrectangle: { width: 408, height: 236 },
};

const ImageDisplay = <T extends string>({
  src,
  alt = 'Image',
  className = '',
  placeholderSrc,
  variant = 'square',
  height,
  width,
  snippet,
  snippetPosition = 'start',
  secondSnippet,
  secondSnippetPosition = 'end',
}: ImageDisplayProps<T>) => {
  const [isError, setIsError] = useState(false);
  const shouldShowPlaceholder = isError || !src;

  const dimensions = defaultDimensions[variant];
  const finalWidth = width ?? dimensions.width;
  const finalHeight = height ?? dimensions.height;

  return (
    <div
      className={`relative overflow-hidden rounded-xl ${className}`}
      style={{ width: finalWidth, height: finalHeight }}
    >
      {shouldShowPlaceholder ? (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          {placeholderSrc ? (
            <img
              src={placeholderSrc}
              alt="Placeholder"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-400">Image not available</span>
          )}
        </div>
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
          className={`absolute z-10 text-white text-sm font-semibold px-4 py-2 bg-orange-500 rounded-lg ${getSnippetPositionClasses(
            snippetPosition
          )}`}
        >
          {snippet}
        </div>
      )}

      {secondSnippet && (
        <div
          className={`absolute z-10 text-white text-sm font-medium ${getSnippetPositionClasses(
            secondSnippetPosition
          )}`}
        >
          {secondSnippet}
        </div>
      )}
    </div>
  );
};

export default ImageDisplay;
