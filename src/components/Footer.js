import footer_data from "../resources/footer_data";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "./icons/FontAwesomeIcons";

export default function Footer({ lang }) {
  return (
    <div
      id="footer"
      className="d-flex flex-column mt-5 bg-color-primary"
      role="region"
    >
      <div
        id="footer-icons-container"
        className="bg-color-secondary text-center d-flex justify-content-evenly align-items-center py-2 fs-4"
        role="menu"
      >
        <span className="text-cursor-pointer-on-hover" role="link">
          <FacebookIcon />
        </span>
        <span className="text-cursor-pointer-on-hover" role="link">
          <TwitterIcon />
        </span>
        <span className="text-cursor-pointer-on-hover" role="link">
          <InstagramIcon />
        </span>
        <span className="text-cursor-pointer-on-hover" role="link">
          <LinkedInIcon />
        </span>
      </div>
      <div className="container text-color-white text-style-nunito">
        <div className="d-flex flex-column justify-content-center">
          <div className="row my-5">
            <div className="col-md-3">
              <div className="d-flex flex-column" role="navigation">
                <span className="fw-bold" role="link">
                  {footer_data[lang].explore}
                </span>
                <span
                  className="text-style-nunito mt-2 text-color-white text-underline-on-hover text-cursor-pointer-on-hover"
                  role="link"
                >
                  {footer_data[lang].artwork}
                </span>
                <span
                  className="text-style-nunito mt-2 text-color-white text-underline-on-hover text-cursor-pointer-on-hover"
                  role="link"
                >
                  {footer_data[lang].non_profits}
                </span>
                <span
                  className="text-style-nunito mt-2 text-color-white text-underline-on-hover text-cursor-pointer-on-hover"
                  role="link"
                >
                  {footer_data[lang].stories_of_kids}
                </span>
              </div>
            </div>
            <div className="col-md-9">
              <div className="d-flex flex-column" role="list">
                <span className="fw-bold" role="listitem">
                  {footer_data[lang].contact}
                </span>
                <span className="text-style-nunito mt-2" role="listitem">
                  {footer_data[lang].email}
                </span>
                <span className="text-style-nunito mt-2" role="listitem">
                  {footer_data[lang].call}
                </span>
                <span className="text-style-nunito mt-2" role="listitem">
                  {footer_data[lang].address}
                </span>
              </div>
            </div>
          </div>
          <div
            className="text-center text-style-nunito mb-4"
            role="contentinfo"
          >
            <span>{footer_data[lang].copyright}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
