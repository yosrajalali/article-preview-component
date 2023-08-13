import { useState } from 'react';
import { PiShareFatFill } from 'react-icons/pi';

import ShareSection from './ShareSection';

const AuthorSection = (props) => {
  const { author, date } = props;
  const [showShareIcon, setShowShareIcon] = useState(false);
  const [isMobileTopBtn, setIsMobileTopBtn] = useState(false);

  const toggleShareIcon = () => {
    setShowShareIcon(!showShareIcon);
    setIsMobileTopBtn(!isMobileTopBtn);
  };

  return (
    <div className="authorContainer">
      <div className="author">
        <img className="authorImg" src={author.imageSrc} alt={author.name} />
        <div>
          <h2 className="authorTitle">{author.name}</h2>
          <p className="authorDate">{date}</p>
        </div>
        <button
          className={`shareIcon ${isMobileTopBtn ? 'mobileTopBtn' : ''}`}
          type="button"
          aria-label="Share"
          onClick={toggleShareIcon}
        >
          <PiShareFatFill />
        </button>
      </div>
      {showShareIcon && <ShareSection />}
    </div>
  );
};

export default AuthorSection;
