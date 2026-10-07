const maps = [
  {
    nodes: [
      [16, 64],
      [38, 32],
      [58, 50],
      [82, 26],
      [72, 74],
      [30, 80],
    ],
    links: [
      [0, 1],
      [1, 2],
      [2, 3],
      [2, 4],
      [0, 5],
      [1, 5],
    ],
  },
  {
    nodes: [
      [20, 40],
      [42, 72],
      [60, 28],
      [84, 48],
      [48, 16],
      [74, 80],
    ],
    links: [
      [0, 1],
      [0, 2],
      [2, 3],
      [2, 4],
      [1, 5],
      [3, 5],
    ],
  },
  {
    nodes: [
      [22, 70],
      [36, 34],
      [56, 56],
      [80, 30],
      [66, 78],
      [14, 28],
    ],
    links: [
      [5, 1],
      [1, 2],
      [2, 3],
      [2, 4],
      [0, 2],
      [0, 4],
    ],
  },
] as const;

export default function Constellation({ index = 0 }: { index?: number }) {
  const map = maps[index % maps.length];

  return (
    <svg className="constellation" viewBox="0 0 100 100" aria-hidden="true">
      {map.links.map(([from, to], linkIndex) => (
        <line
          key={linkIndex}
          x1={map.nodes[from][0]}
          y1={map.nodes[from][1]}
          x2={map.nodes[to][0]}
          y2={map.nodes[to][1]}
        />
      ))}
      {map.nodes.map(([x, y], nodeIndex) => (
        <circle key={nodeIndex} cx={x} cy={y} r={nodeIndex === 2 ? 2.3 : 1.35} />
      ))}
    </svg>
  );
}
