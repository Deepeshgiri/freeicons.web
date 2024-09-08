import React, { useState } from 'react';

import './IconGallery.css';

// Import icons from freeicons
import {
  FiBankIcon,
  FiAddressIcon,
  FiBusinessIcon,
  FiCalendarIcon,
  FiCellPhoneIcon,
  FiColumnChartIcon,
  FiCompanyIcon,
  FiComputerIcon,
  FiConversationIcon,
  FiCreativityIcon,
  FiDocumentIcon,
  FiMailIcon,
  FiNetworkIcon,
  FiNotifyIcon,
  FiPhotoIcon,
  FiPieChartIcon,
  FiSetUpIcon,
  FiThumbsUpIcon,
  FiTrophyIcon,
  FiUploadIcon,
  FiUserIcon,
} from 'freeicons';

// Array of icon components and their names
const icons = [
  { name: 'FiBankIcon', Component: FiBankIcon },
  { name: 'FiAddressIcon', Component: FiAddressIcon },
  { name: 'FiBusinessIcon', Component: FiBusinessIcon },
  { name: 'FiCalendarIcon', Component: FiCalendarIcon },
  { name: 'FiCellPhoneIcon', Component: FiCellPhoneIcon },
  { name: 'FiColumnChartIcon', Component: FiColumnChartIcon },
  { name: 'FiCompanyIcon', Component: FiCompanyIcon },
  { name: 'FiComputerIcon', Component: FiComputerIcon },
  { name: 'FiConversationIcon', Component: FiConversationIcon },
  { name: 'FiCreativityIcon', Component: FiCreativityIcon },
  { name: 'FiDocumentIcon', Component: FiDocumentIcon },
  { name: 'FiMailIcon', Component: FiMailIcon },
  { name: 'FiNetworkIcon', Component: FiNetworkIcon },
  { name: 'FiNotifyIcon', Component: FiNotifyIcon },
  { name: 'FiPhotoIcon', Component: FiPhotoIcon },
  { name: 'FiPieChartIcon', Component: FiPieChartIcon },
  { name: 'FiSetUpIcon', Component: FiSetUpIcon },
  { name: 'FiThumbsUpIcon', Component: FiThumbsUpIcon },
  { name: 'FiTrophyIcon', Component: FiTrophyIcon },
  { name: 'FiUploadIcon', Component: FiUploadIcon },
  { name: 'FiUserIcon', Component: FiUserIcon },
];

// Function to convert React element to SVG string
const getSvgString = (Component) => {
  const svgElement = document.createElement('div');
  svgElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg">${Component().props.children}</svg>`;
  return svgElement.innerHTML;
};

const IconGallery = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);
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

  return (
    <div className="icon-gallery-container">
      <div className="icon-gallery">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="icon-card"
            onClick={() => setSelectedIcon(icon)}
          >
            <icon.Component className="icon" />
            <div className="icon-name">{icon.name.replace('Fi','').replace('Icon', '')}</div>
          </div>
        ))}
      </div>
      {selectedIcon && (
        <div className="detail-card">
          <div className="detail-icon">
            <selectedIcon.Component className="large-icon" />
            <div className="detail-name">{selectedIcon.name}</div>
          </div>
          <div className="button-box">
            <button onClick={() => copyToClipboard(selectedIcon.name)}>
              <FiDocumentIcon className="copy-icon" />
              {copyText === `Copied: ${selectedIcon.name}` ? `Copied` : `Copy Name`}
            </button>
            <button onClick={() => copyToClipboard(selectedIcon.name.replace('Icon', 'Svg'))}>
              <FiDocumentIcon className="copy-icon" />
              {copyText === `Copied: ${selectedIcon.name.replace('Icon', 'Svg')}` ? `Copied` : `Copy SVG Name`}
            </button>
            <button onClick={() => copyToClipboard(getSvgString(selectedIcon.Component))}>
              <FiDocumentIcon className="copy-icon" />
              {copyText === `Copied: ${getSvgString(selectedIcon.Component)}` ? `Copied` : `Copy SVG String`}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default IconGallery;
