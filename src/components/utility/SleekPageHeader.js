export default function SleekPageHeader({ title, subtitle }) {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center mb-5 border-bottom"
      role="row"
    >
      <h1 className="sleek-header-slogan" role="rowheader">
        {title}
      </h1>
      <p className="text-style-nunito">{subtitle}</p>
    </div>
  );
}
