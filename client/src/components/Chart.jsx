// src/components/Chart.jsx
import { Line, Bar } from 'react-chartjs-2'

const Chart = ({ type = 'line', data, options }) => {
  if (type === 'bar') {
    return <Bar data={data} options={options} />
  }
  return <Line data={data} options={options} />
}

export default Chart
