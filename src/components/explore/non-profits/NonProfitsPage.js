import non_profits_data from "../../../resources/non_profits_data";
import SleekPageHeader from "../../utility/SleekPageHeader";
import NonProfitCards from "./NonProfitCards";

export default function NonProfitsPage({ lang }) {
  return (
    <div className="container my-5">
      <SleekPageHeader
        title={non_profits_data[lang].title}
        subtitle={non_profits_data[lang].subtitle}
      />
      <NonProfitCards non_profits_data={non_profits_data[lang].collection} />
    </div>
  );
}
