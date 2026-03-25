const calculate = ({ x0, y0, v0, a, angle, t }) => {
  let angle_rad = (angle * Math.PI) / 180;
  let v0_x = v0 * Math.cos(angle_rad);
  let v0_y = v0 * Math.sin(angle_rad);
  let a_x = a * Math.cos(angle_rad);
  let a_y = a * Math.sin(angle_rad);

  let x_data = [];
  let y_data = [];
  let z_data = [];

  for (let t_current = 0; t_current <= t; t_current += 0.25) {
    let x = coordinate(x0, v0_x, a_x, t_current);
    let y = coordinate(y0, v0_y, a_y, t_current);
    if (v0 + a * t_current <= 0) break;
    x_data.push(x);
    y_data.push(y);
    z_data.push(t_current);
  }

  return { x_data, y_data, z_data };
};

const coordinate = (c0, v0, a, t) => {
  return c0 + v0 * t + (a * t ** 2) / 2;
};

export default calculate;
