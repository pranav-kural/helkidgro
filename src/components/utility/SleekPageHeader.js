export default function SleekPageHeader({ title, subtitle }) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mb-5 border-bottom">
      <h1 className="sleek-header-slogan">{title}</h1>
      <p className="text-style-nunito">{subtitle}</p>
    </div>
  );
}
