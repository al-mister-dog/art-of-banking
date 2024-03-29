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
import { selectBanks } from "../../../../../../features/banks/banksSlice";
import { useAppSelector } from "../../../../../../app/hooks";
import { bankData } from "../../../../../../domain/structures/objects";
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

export const options = {
  responsive: true,
  elements: {
    line: {
      borderWidth: 1,
      // tension: 1,
      // borderJoinStyle: "bevel" as const,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Deposits & Reserves",
    },
  },
};

export default function LineChart() {
  const { analytics } = useAppSelector(selectBanks);
  const theme = useMantineTheme();

  const options = {
    responsive: true,
    elements: {
      line: {
        borderWidth: 1,
        // tension: 1,
        // borderJoinStyle: "bevel" as const,
      },
    },
    // scales: {
    //   y: {
    //     beginAtZero: true,
    //     suggestedMax: reservesData[0] * 2,
    //   },
    // },
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

  let labels = [];
  let data = {
    labels,
    datasets: [
      {
        label: "Reserves",
        data: [1],
        borderColor: "pink",
        backgroundColor: "pink",
      },
    ],
  };
  if (Object.keys(analytics.graphs.nationalData).length > 0) {
    labels = analytics.graphs.nationalData[0].map((c, i) => i);
    data = {
      labels,
      datasets: [
        ...Object.keys(analytics.graphs.nationalData).map((bank) => {
          const bData = analytics.graphs.nationalData[bank];
          return {
            label: `${bankData.banks[bank].name} Reserves`,
            data: bData.map((data) => data.reserves),
            borderColor: colors.charts.qualitative[1],
            backgroundColor: colors.charts.qualitative[1],
          };
        }),
        ...Object.keys(analytics.graphs.nationalData).map((bank) => {
          const bData = analytics.graphs.nationalData[bank];
          return {
            label: `${bankData.banks[bank].name} Deposits`,
            data: bData.map((data) => data.deposits),
            borderColor: colors.charts.qualitative[2],
            backgroundColor: colors.charts.qualitative[2],
          };
        }),
      ],
    };
  }

  if (Object.keys(analytics.graphs.nationalData).length === 0) {
    return <>Loading...</>;
  }
  return (
    <ChartContainer>
      <Line options={options} data={data} />
    </ChartContainer>
  );
}
