'use client';

import React from 'react';
import Button from '../button';

type TextAlign = 'left' | 'center' | 'right' | 'justify';
type TextSize = 'medium' | 'small';

interface TextHeaderProps<TSpecialIndices = string> {
  text?: string;
  align?: TextAlign;
  className?: string;
  width?: string | number;
  specialWordsIndices?: TSpecialIndices;
  size?: TextSize;
  buttonText?: string;
}

const TextHeader = <TSpecialIndices extends string = string>({
  text = '',
  align = 'center',
  className = '',
  width,
  specialWordsIndices = '' as TSpecialIndices,
  size = 'medium',
  buttonText,
}: TextHeaderProps<TSpecialIndices>) => {
  const validText = typeof text === 'string' ? text : '';

  const baseFontStyles = {
    medium: {
      fontSize: '52px',
      lineHeight: '57.6px',
    },
    small: {
      fontSize: '30px',
      lineHeight: '38.4px',
    },
  };

  const baseStyle: React.CSSProperties = {
    color: '#2C2727',
    textAlign: align,
    fontFamily: 'DM Sans, sans-serif',
    fontWeight: 600,
    letterSpacing: '-0.03em',
    marginBottom:40,
    width: width ?? 'auto',
    ...baseFontStyles[size],
  };

  const specialStyle: React.CSSProperties = {
    fontFamily: 'Playfair Display, serif',
    fontWeight: 500,
    fontStyle: 'italic',
    letterSpacing: '-0.03em',
    ...baseFontStyles[size],
  };

  const specialIndices = specialWordsIndices
    ? (specialWordsIndices as string)
        .split(',')
        .map((index) => parseInt(index.trim(), 10))
        .filter((index) => !isNaN(index))
    : [];

  const renderText = () => {
    const words = validText.split(' ');

    return words.map((word, index) => {
      const isSpecial = specialIndices.includes(index);
      return (
        <span key={index} style={isSpecial ? specialStyle : {}}>
          {word}{' '}
        </span>
      );
    });
  };

  // Determine alignment class
  const alignmentClass = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
    justify: 'items-stretch text-justify',
    
  }[align];

  // Apply margin based on text size
  const spacingClass = size === 'medium' ? 'mb-10' : 'mb-5';

  return (
    <div className={`flex flex-col  ${alignmentClass}`}>
      {buttonText && (
        <div className="mb-2">
          <Button text={buttonText} variant="secondary" textColor="text-primary" />
        </div>
      )}
      <h1 className={`text-header ${className} ${spacingClass} `} style={baseStyle}>
        {renderText()}
      </h1>
    </div>
  );
};

export default TextHeader;
