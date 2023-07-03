import footer_data from "../resources/footer_data";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "./icons/FontAwesomeIcons";

export default function Footer({ lang }) {
  return (
    <div id="footer" className="d-flex flex-column mt-5 bg-color-primary">
      <div
        id="footer-icons-container"
        className="bg-color-secondary text-center d-flex justify-content-evenly align-items-center py-2 fs-4"
      >
        <span className="text-cursor-pointer-on-hover">
          <FacebookIcon />
        </span>
        <span className="text-cursor-pointer-on-hover">
          <TwitterIcon />
        </span>
        <span className="text-cursor-pointer-on-hover">
          <InstagramIcon />
        </span>
        <span className="text-cursor-pointer-on-hover">
          <LinkedInIcon />
        </span>
      </div>
      <div className="container text-color-white text-style-nunito">
        <div className="d-flex flex-column justify-content-center">
          <div className="row my-5">
            <div className="col-md-3">
              <div className="d-flex flex-column">
                <span className="fw-bold">{footer_data[lang].explore}</span>
                <span className="text-style-nunito mt-2">
                  <span className="text-color-white text-underline-on-hover text-cursor-pointer-on-hover">
                    {footer_data[lang].artwork}
                  </span>
                </span>
                <span className="text-style-nunito mt-2">
                  <span className="text-color-white text-underline-on-hover text-cursor-pointer-on-hover">
                    {footer_data[lang].non_profits}
                  </span>
                </span>
                <span className="text-style-nunito mt-2">
                  <span className="text-color-white text-underline-on-hover text-cursor-pointer-on-hover">
                    {footer_data[lang].stories_of_kids}
                  </span>
                </span>
              </div>
            </div>
            <div className="col-md-9">
              <div className="d-flex flex-column">
                <span className="fw-bold">{footer_data[lang].contact}</span>
                <span className="text-style-nunito mt-2">
                  {footer_data[lang].email}
                </span>
                <span className="text-style-nunito mt-2">
                  {footer_data[lang].call}
                </span>
                <span className="text-style-nunito mt-2">
                  {footer_data[lang].address}
                </span>
              </div>
            </div>
          </div>
          <div className="text-center text-style-nunito mb-4">
            <span>{footer_data[lang].copyright}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
