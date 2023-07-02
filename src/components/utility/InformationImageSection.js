export default function InformationImageSection({ data }) {
  return (
    <div className="d-flex flex-column mt-4 px-sm-0 px-lg-5 pb-5">
      <div className="row mb-5 align-items-center px-xl-5 px-xxl-5">
        <div className="col-sm-12 col-md-8">
          <p>{data.section_first_heading}</p>
        </div>
        <div className="col-sm-12 col-md-4">
          <img
            src={data.section_first_image}
            width={220}
            height={150}
            alt="config"
          />
        </div>
      </div>

      <div className="row mb-5 align-items-center px-xl-5 px-xxl-5">
        <div className="col-sm-12 col-md-4">
          <img
            src={data.section_second_image}
            width={220}
            height={150}
            alt="config"
          />
        </div>
        <div className="col-sm-12 col-md-8">
          <p>{data.section_second_heading}</p>
        </div>
      </div>

      <div className="row align-items-center px-xl-5 px-xxl-5">
        <div className="col-sm-12 col-md-8">
          <p>{data.section_third_heading}</p>
        </div>
        <div className="col-sm-12 col-md-4">
          <img
            src={data.section_third_image}
            width={220}
            height={150}
            alt="config"
          />
        </div>
      </div>
    </div>
  );
}
