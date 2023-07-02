import how_it_works_data from "../../resources/how_it_works_data";

export default function HowItWorks({ lang }) {
  return (
    <div className="container my-5">
      <h1 className="text-center border-bottom text-color-primary text-style-nunito">
        {how_it_works_data[lang].title}
      </h1>
      <div className="d-flex flex-column mt-4 px-sm-0 px-lg-5">
        <div className="row mb-5 align-items-center px-xl-5 px-xxl-5">
          <div className="col-sm-12 col-md-8">
            <p>{how_it_works_data[lang].section_heading_first}</p>
          </div>
          <div className="col-sm-12 col-md-4">
            <img
              src="./assets/image_sample.png"
              width={220}
              height={150}
              alt="config"
            />
          </div>
        </div>

        <div className="row mb-5 align-items-center px-xl-5 px-xxl-5">
          <div className="col-sm-12 col-md-4">
            <img
              src="./assets/image_sample.png"
              width={220}
              height={150}
              alt="config"
            />
          </div>
          <div className="col-sm-12 col-md-8">
            <p>{how_it_works_data[lang].section_heading_second}</p>
          </div>
        </div>

        <div className="row align-items-center px-xl-5 px-xxl-5">
          <div className="col-sm-12 col-md-8">
            <p>{how_it_works_data[lang].section_heading_third}</p>
          </div>
          <div className="col-sm-12 col-md-4">
            <img
              src="./assets/image_sample.png"
              width={220}
              height={150}
              alt="config"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
