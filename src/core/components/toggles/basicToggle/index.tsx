import BasicToggleComponent from "./basicToggle";
import * as ToggleTypes from "../toggle.types";

const BasicToggle: React.FC<ToggleTypes.ToggleProps> = (props) => <BasicToggleComponent {...props} />;
const IconToggle: React.FC<ToggleTypes.IconToggleProps> = (props) => <BasicToggleComponent {...props} />;

export { BasicToggle, IconToggle };
export default { BasicToggle, IconToggle };
