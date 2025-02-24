import PropTypes from "prop-types";
import Profile from "./Profile";
import useBold from "../hooks/useBold";

export default function WelcomeMessage({ prop }) {
  const jsx = useBold(
    <div>
      <h1
        style={{
          fontWeight: prop.weight,
          color: prop.color,
        }}
      >
        Welcome to CRA-Router Home.
      </h1>
      <Profile />
    </div>
  );

  return <>{jsx}</>;
}

WelcomeMessage.propTypes = {
  prop: PropTypes.shape({
    weight: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    color: PropTypes.oneOf(["orange", "coral"]).isRequired,
  }),

  arr: PropTypes.arrayOf(PropTypes.number),
  func: PropTypes.func,

  // html element
  node: PropTypes.node,

  // react element
  ele: PropTypes.element,
};

// only in dev mode
// stripped out in production
