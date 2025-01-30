export function AdminMessage() {
  return (
    <p style={{ fontSize: "1em" }}>
      You are seeing this secret message, because you are admin.
    </p>
  );
}

export default function Message({ prop }) {
  return (
    <p style={{ fontSize: "2em", fontWeight: "bold" }}>
      {prop.greet} {prop.name}! How are you?
    </p>
  );
}
