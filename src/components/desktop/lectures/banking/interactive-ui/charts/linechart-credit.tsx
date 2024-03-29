import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useMantineTheme } from "@mantine/core";
import ChartContainer from "./chart-container";
import { useAppSelector } from "../../../../../../app/hooks";
import { selectBanks } from "../../../../../../features/banks/banksSlice";
import { colors } from "../../../../../../config/colorPalette";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export default function LineChart() {
  const { analytics } = useAppSelector(selectBanks);

  const theme = useMantineTheme();
  let creditData = [];
  let reservesData = [];
  if (analytics.graphs.credit.length === 0) {
    creditData = [0];
    reservesData = [0];
  } else {
    creditData = [analytics.graphs.credit[0], ...analytics.graphs.credit];
    reservesData = [analytics.graphs.reserves[0], ...analytics.graphs.reserves];
  }

  const options = {
    // responsive: true,
    maintainAspectRatio: false,
    elements: {
      line: {
        // borderWidth: 1,
        // tension: 1,
        // borderJoinStyle: "bevel" as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        suggestedMax: reservesData[0] * 2,
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Credit vs Reserves",
      },
    },
  };

  const labels = creditData.map((c, i) => i);
  const data = {
    labels,
    datasets: [
      {
        label: "Credit",
        data: creditData,
        borderColor: colors.charts.qualitative[1],
        backgroundColor: colors.charts.qualitative[1],
      },
      {
        label: "Reserves",
        data: reservesData,
        borderColor: colors.charts.qualitative[2],
        backgroundColor: colors.charts.qualitative[2],
      },
    ],
  };

  if (analytics.graphs.credit.length === 0) {
    return <>Waiting For Graph Data</>;
  }
  // return <Line options={options} data={data} />;

  return (
    <ChartContainer>
      <Line options={options} data={data} />
    </ChartContainer>
  );
}
