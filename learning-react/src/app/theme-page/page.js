import "../../styles/tailTheme.css";

export default function Page() {
  const Button = styled.button`
    color: ${(props) => props.theme.fg};
    border: 2px solid ${(props) => props.theme.fg};
    background: ${(props) => props.theme.bg};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
  `;

  // Define our `fg` and `bg` on the theme
  const theme = {
    fg: "#BF4F74",
    bg: "white",
  };

  // This theme swaps `fg` and `bg`
  const invertTheme = ({ fg, bg }) => ({
    fg: bg,
    bg: fg,
  });

  return (
    <>
      <div className="bg-secondary text-primary font-heavy text-big m-8">
        Tailwind Theme
      </div>
      <ThemeProvider theme={theme}>
        <div>
          <Button>Default Theme</Button>

          <ThemeProvider theme={invertTheme}>
            <Button>Inverted Theme</Button>
          </ThemeProvider>
        </div>
      </ThemeProvider>
    </>
  );
}
