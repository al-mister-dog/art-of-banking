// import { useEffect, useState, useMemo } from "react";
// // import Chart from "react-apexcharts";

// const stonksUrl = "https://yahoo-finance-api.vercel.app/GME";
// async function getStonks() {
//   const response = await fetch(stonksUrl);
//   return response.json();
// }

// const directionEmojis = {
//   up: "🚀",
//   down: "💩",
//   "": "",
// };

// const chart = {
//   options: {
//     chart: {
//       type: "candlestick",
//       height: 350,
//     },
//     title: {
//       text: "CandleStick Chart",
//       align: "left",
//     },
//     xaxis: {
//       type: "datetime",
//     },
//     yaxis: {
//       tooltip: {
//         enabled: true,
//       },
//     },
//   },
// };

// const round = (number) => {
//   return number ? +number.toFixed(2) : null;
// };

// function App() {
//   const [series, setSeries] = useState([
//     {
//       data: [],
//     },
//   ]);
//   const [price, setPrice] = useState(-1);
//   const [prevPrice, setPrevPrice] = useState(-1);
//   const [priceTime, setPriceTime] = useState(null);

//   useEffect(() => {
//     let timeoutId;
//     async function getLatestPrice() {
//       try {
//         const data = await getStonks();

//         const gme = data.chart.result[0];
//         setPrevPrice(price);
//         setPrice(gme.meta.regularMarketPrice.toFixed(2));
//         setPriceTime(new Date(gme.meta.regularMarketTime * 1000));
//         const quote = gme.indicators.quote[0];
//         const prices = gme.timestamp.map((timestamp, index) => ({
//           x: new Date(timestamp * 1000),
//           y: [
//             quote.open[index],
//             quote.high[index],
//             quote.low[index],
//             quote.close[index],
//           ].map(round),
//         }));
//         setSeries([
//           {
//             data: prices,
//           },
//         ]);
//       } catch (error) {

//       }
//       timeoutId = setTimeout(getLatestPrice, 5000 * 2);
//     }

//     getLatestPrice();

//     return () => {
//       clearTimeout(timeoutId);
//     };
//   }, []);

//   const direction = useMemo(
//     () => (prevPrice < price ? "up" : prevPrice > price ? "down" : ""),
//     [prevPrice, price]
//   );

//   return (
//     <div>
//       <div>
//         FOR ENTERTAINMENT PURPOSES ONLY!
//         <br />
//         DO NOT USE THIS SITE AS FINANCIAL ADVICE!
//       </div>
//       <div>GME</div>
//       <div>
//         ${price} {directionEmojis[direction]}
//       </div>
//       <div>{priceTime && priceTime.toLocaleTimeString()}</div>
//       <Chart
//         options={chart.options}
//         series={series}
//         type="candlestick"
//         width="100%"
//         height={320}
//       />
//     </div>
//   );
// }

// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch("https://.../posts");
//   const posts = await res.json();

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts,
//     },
//   };
// }

// export default App;
export default function Stocks() {
  return <>Stocks </>
}