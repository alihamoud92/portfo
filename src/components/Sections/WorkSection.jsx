import { Col } from "../../Tools/Grid-system";
import { Button } from "../Index";

function WorkSection({ img, name, description, link }) {
  return (
    <div className="h-full">
      <div className="border-2 border-Secondary rounded-2xl h-full overflow-hidden">
        <img src={img} alt="" className="w-full h-[220px]" />
        <h2 className="text-lg font-bold text-center text-Main my-3 px-2">
          {name}
        </h2>
        <p className="px-2 mb-5">{description}</p>
        <Col sm={6} className="mx-auto">
          <Button name="read more" link={link} />
        </Col>
      </div>
    </div>
  );
}
export default WorkSection;
