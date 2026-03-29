import PlotlyModule from "react-plotly.js";
const Plot = PlotlyModule.default;

const Visualization = ({ trajectory_data }) => {
  const max_val = Math.max(
    ...trajectory_data.x_data,
    ...trajectory_data.y_data,
  );

  const min_val = Math.min(
    ...trajectory_data.x_data,
    ...trajectory_data.y_data,
  );

  return (
    <Plot
      data={[
        {
          x: trajectory_data.x_data,
          y: trajectory_data.y_data,
          z: trajectory_data.z_data,
          type: "scatter3d",
          mode: "lines",
        },
      ]}
      layout={{
        width: 700,
        height: 700,
        scene: {
          aspectmode: "data",
          xaxis: { range: [min_val, max_val] },
          yaxis: { range: [min_val, max_val] },
        },
        title: { text: "Графік прямолінійного рівноприскореного руху" },
      }}
    />
  );
};

export default Visualization;
