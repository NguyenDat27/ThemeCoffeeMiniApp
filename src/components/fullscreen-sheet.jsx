import PropTypes from "prop-types";
import { Sheet as OrginalSheet } from "zmp-ui";
import { useMatchStatusTextColor } from "../hooks/hooks";

const Sheet = (props) => {
  useMatchStatusTextColor(props.visible);
  return <OrginalSheet {...props} />;
};

Sheet.propTypes = {
  visible: PropTypes.bool,
};

const ActionSheet = (props) => {
  useMatchStatusTextColor(props.visible);
  return <OrginalSheet.Actions {...props} />;
};

ActionSheet.propTypes = {
  visible: PropTypes.bool,
};

export { Sheet, ActionSheet };
