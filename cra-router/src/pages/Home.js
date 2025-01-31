import WelcomeMessage from "../components/WelcomeMessage";
import Counter from "../components/Counter";

export default function Home() {
  return (
    <div style={{ padding: "1em" }}>
      <WelcomeMessage prop={{ weight: "bold", color: "coral" }} />
      <Counter />
    </div>
  );
}
