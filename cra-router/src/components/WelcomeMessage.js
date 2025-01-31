export default function WelcomeMessage({ prop }) {
  return (
    <p
      style={{
        fontSize: prop.size,
        fontWeight: prop.weight,
        color: prop.color,
      }}
    >
      Welcome to CRA-Router App.
    </p>
  );
}
