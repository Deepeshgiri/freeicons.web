// src/DetailCard.js
import React, { useState } from 'react';
import './DetailCard.css';
import { FiDocumentIcon } from 'freeicons';

// Function to convert React element to SVG string
const getSvgString = (Component) => {
  const svgElement = document.createElement('div');
  svgElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg">${Component().props.children}</svg>`;
  return svgElement.innerHTML;
};

const DetailCard = ({ icon, onClose }) => {
  const [copyText, setCopyText] = useState('');

  const copyToClipboard = (text) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(
        () => setCopyText(`Copied: ${text}`),
        (err) => {
          console.error('Failed to copy: ', err);
          alert('Failed to copy. Please try again.');
        }
      );
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setCopyText(`Copied: ${text}`);
      } catch (err) {
        console.error('Failed to copy: ', err);
        alert('Failed to copy. Please try again.');
      }
      document.body.removeChild(textArea);
    }
  };

  if (!icon) return null;

  return (
    <div className="detail-card">
      <button className="close-button" onClick={onClose}>Close</button>
      <div className="detail-icon">
        <icon.Component className="large-icon" />
        <div className="detail-name">{icon.name}</div>
      </div>
      <div className="button-box">
        <button onClick={() => copyToClipboard(icon.name)}>
          <FiDocumentIcon className="copy-icon" />
          {copyText === `Copied: ${icon.name}` ? `Copied` : `Copy Name`}
        </button>
        <button onClick={() => copyToClipboard(icon.name.replace('Icon', 'Svg'))}>
          <FiDocumentIcon className="copy-icon" />
          {copyText === `Copied: ${icon.name.replace('Icon', 'Svg')}` ? `Copied` : `Copy SVG Name`}
        </button>
        <button onClick={() => copyToClipboard(getSvgString(icon.Component))}>
          <FiDocumentIcon className="copy-icon" />
          {copyText === `Copied: ${getSvgString(icon.Component)}` ? `Copied` : `Copy SVG String`}
        </button>
      </div>
    </div>
  );
};

export default DetailCard;
