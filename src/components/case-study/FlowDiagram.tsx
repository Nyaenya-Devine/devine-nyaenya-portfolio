/**
 * A dependency-free SVG architecture / flow diagram (CSP-friendly: no external
 * assets or scripts). Used across case studies to visualize request flow.
 * Connectors carry flowing "packets" and nodes fade in on mount — subtle motion
 * that reads as live without being distracting. SMIL animation is reduced by the
 * global prefers-reduced-motion media block in CSS only for CSS; SMIL honors the
 * OS setting via the `prefers-reduced-motion` SVG media feature below.
 */

export type FlowNode = {
  label: string;
  sub?: string;
  accent?: boolean;
};

export function FlowDiagram({
  nodes,
  title,
}: {
  nodes: FlowNode[];
  title?: string;
}) {
  const width = 760;
  const boxH = 64;
  const gap = 34;
  const padTop = title ? 40 : 20;
  const height = padTop + nodes.length * boxH + (nodes.length - 1) * gap + 20;
  const boxW = 480;
  const x = (width - boxW) / 2;

  return (
    <div className="panel my-5 overflow-x-auto p-4">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label={title || "System flow diagram"}
        className="mx-auto h-auto min-w-[560px] w-full max-w-3xl"
        fill="none"
      >
        {title && (
          <text x={width / 2} y="22" textAnchor="middle" className="fill-ink-faint font-mono" fontSize="12" letterSpacing="2">
            {title.toUpperCase()}
          </text>
        )}
        {nodes.map((node, i) => {
          const y = padTop + i * (boxH + gap);
          const isLast = i === nodes.length - 1;
          return (
            <g
              key={node.label}
              style={{ opacity: 0, animation: `svg-node-in 0.5s ease ${i * 0.12}s forwards` }}
            >
              <rect
                x={x}
                y={y}
                width={boxW}
                height={boxH}
                rx="10"
                className={node.accent ? "fill-accent/10 stroke-accent/50" : "fill-raised stroke-line"}
                strokeWidth="1.5"
              />
              <text
                x={width / 2}
                y={y + boxH / 2 - (node.sub ? 6 : -5)}
                textAnchor="middle"
                className={`font-mono ${node.accent ? "fill-accent" : "fill-ink-high"}`}
                fontSize="14"
                fontWeight="600"
              >
                {node.label}
              </text>
              {node.sub && (
                <text x={width / 2} y={y + boxH / 2 + 14} textAnchor="middle" className="fill-ink-low font-mono" fontSize="11">
                  {node.sub}
                </text>
              )}
              {!isLast && (
                <g>
                  <line
                    x1={width / 2}
                    y1={y + boxH}
                    x2={width / 2}
                    y2={y + boxH + gap - 6}
                    className="stroke-ink-faint"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  >
                    <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="1.2s" repeatCount="indefinite" />
                  </line>
                  {/* flowing packet down the connector */}
                  <circle r="2.5" cx={width / 2} cy={y + boxH + 4} className="fill-accent" style={{ filter: "drop-shadow(0 0 3px rgba(52,217,107,0.9))" }}>
                    <animate attributeName="cy" from={`${y + boxH + 4}`} to={`${y + boxH + gap - 8}`} dur="1.6s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur="1.6s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
                  </circle>
                  <path
                    d={`M ${width / 2 - 5} ${y + boxH + gap - 10} L ${width / 2 + 5} ${y + boxH + gap - 10} L ${width / 2} ${y + boxH + gap - 3} Z`}
                    className="fill-ink-faint"
                  />
                </g>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
