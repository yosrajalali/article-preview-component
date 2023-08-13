import { BiLogoFacebook } from 'react-icons/bi';
import { VscTwitter } from 'react-icons/vsc';
import { FaPinterestP } from 'react-icons/fa';

function ShareSection() {
  return (
    <div className="share">
      <div className="shareSection">
        <p>share</p>
        <a href="/" className="icon">
          <BiLogoFacebook className="facebook" />
        </a>
        <a href="/" className="icon">
          <VscTwitter className="twitter" />
        </a>
        <a href="/" className="icon">
          <FaPinterestP className="pinterest" />
        </a>
      </div>
      <div class="triangle"></div>
    </div>
  );
}

export default ShareSection;
