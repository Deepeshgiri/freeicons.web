import React from 'react';
import './UsageInstructions.css';

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

const UsageInstructions = () => {
  return (
    <div className="usage-instructions">
      <h1>Usage Instructions for `freeicons`</h1>
      
      <section>
        <h2>1. Installation</h2>
        <p>To get started, install the `freeicons` package using npm or yarn:</p>
        <pre>
          <code>npm install freeicons</code>
        </pre>
        <pre>
          <code>yarn add freeicons</code>
        </pre>
      </section>

      <section>
        <h2>2. Importing Icons</h2>
        <p>Import icons into your React component like this:</p>
        <pre>
          <code>
{`import { FiBankIcon, FiAddressIcon, FiBusinessIcon } from 'freeicons';`}
          </code>
        </pre>
      </section>

      <section>
        <h2>3. Using Icons as React Components</h2>
        <p>Use the imported icons as React components within your JSX:</p>
        <pre>
          <code>
{`<FiBankIcon />\n<FiAddressIcon />\n<FiBusinessIcon />`}
          </code>
        </pre>
        <p>For example:</p>
        <pre>
          <code>
{`function App() {\n  return (\n    <div>\n      <FiBankIcon />\n      <FiAddressIcon />\n      <FiBusinessIcon />\n    </div>\n  );\n}`}
          </code>
        </pre>
      </section>

      <section>
        <h2>4. Copying Icon Details</h2>
        <p>The icons come with a feature to copy the icon name, SVG name, and SVG string. You can use the following methods:</p>
        <pre>
          <code>
{`const copyToClipboard = (text) => {\n  navigator.clipboard.writeText(text).then(() => {\n    console.log('Copied to clipboard!');\n  }, (err) => {\n    console.error('Failed to copy: ', err);\n  });\n};`}
          </code>
        </pre>
        <p>For example, you can copy the name of the icon or its SVG representation:</p>
        <pre>
          <code>
{`<button onClick={() => copyToClipboard('FiBankIcon')}>Copy Icon Name</button>\n<button onClick={() => copyToClipboard('FiBankSvg')}>Copy SVG Name</button>\n<button onClick={() => copyToClipboard(getSvgString(FiBankIcon))}>Copy SVG String</button>`}
          </code>
        </pre>
      </section>

      <section>
        <h2>5. Example Usage</h2>
        <p>Here's a complete example of how to use the `freeicons` library with icon copying functionality:</p>
        <pre>
          <code>
{`import React from 'react';\nimport { FiBankIcon, FiAddressIcon } from 'freeicons';\n\nconst App = () => {\n  const copyToClipboard = (text) => {\n    navigator.clipboard.writeText(text).then(() => {\n      console.log('Copied to clipboard!');\n    }, (err) => {\n      console.error('Failed to copy: ', err);\n    });\n  };\n\n  return (\n    <div>\n      <FiBankIcon />\n      <button onClick={() => copyToClipboard('FiBankIcon')}>Copy Icon Name</button>\n      <button onClick={() => copyToClipboard('FiBankSvg')}>Copy SVG Name</button>\n      <button onClick={() => copyToClipboard(getSvgString(FiBankIcon))}>Copy SVG String</button>\n    </div>\n  );\n};\n\nexport default App;`}
          </code>
        </pre>
      </section>

      <section>
        <h2>6. Responsive Design</h2>
        <p>Ensure your application is responsive by using CSS grid or flexbox layouts. The `freeicons` library works well with modern responsive design practices.</p>
        <p>For instance, use media queries to adjust the layout of icons and buttons for different screen sizes.</p>
      </section>

      <section>
        <h2>7. Contribution and Issues</h2>
        <p>If you encounter any issues or wish to contribute to the `freeicons` library, please visit the <a href="https://github.com/Deepeshgiri/freeicons">GitHub repository</a> for more details.</p>
      </section>
    </div>
  );
};

export default UsageInstructions;
