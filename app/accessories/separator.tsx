interface ColoredLineProps {
  color: string;
}

const ColoredLine: React.FC<ColoredLineProps> = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 5,
    }}
  />
);

export default ColoredLine;
