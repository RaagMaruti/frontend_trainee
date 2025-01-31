export default function WelcomeMessage({ prop }) {
  return (
    <h1
      style={{
        fontWeight: prop.weight,
        color: prop.color,
      }}
    >
      Welcome to CRA-Router Home.
    </h1>
  );
}
