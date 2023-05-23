import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function PokemonChart({ baseExperience, weight, height }) {
  const options = {};

  const labels = ["Base Experience", "Height", "Weight-KG "];

  const data = {
    labels,
    datasets: [
      {
        label: "Stats",
        data: [baseExperience, height, weight],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };
  return <Bar options={options} data={data} />;
}
