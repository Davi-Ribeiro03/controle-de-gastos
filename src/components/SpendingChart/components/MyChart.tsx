// import { useEffect, useState } from "react";
// import { LinearGradient, useFont, vec } from "@shopify/react-native-skia";
// import { View } from "react-native";
// import { CartesianChart, Bar } from "victory-native";
// import { useTransactionStore } from "../../../store/transactions";
// import React = require("react");

// const DATA = [
//   {
//     category: "Alimentação",
//     value: 0,
//   },
//   {
//     category: "Transporte",
//     value: 0,
//   },
//   {
//     category: "Lazer ",
//     value: 0,
//   },
//   {
//     category: "Despesas",
//     value: 0,
//   },
// ];

// export function Chart() {
//   const transactions = useTransactionStore((store) => store.transactions);
//   const [data, setData] = useState([
//     {
//       category: "",
//       value: 0,
//     },
//   ]);

//   useEffect(() => {
//     setData(() =>
//       Array.from(
//         new Set(
//           transactions.map((item) => {
//             return JSON.stringify({
//               category: item.category,
//               value: item.value,
//             });
//           })
//         )
//       ).map((item2) => JSON.parse(item2))
//     );
//   }, []);

//   console.log(data);

//   const font = useFont(
//     require("../../../../assets/fonts/Inter_18pt-Regular.ttf"),
//     12
//   );

//   return (
//     <View style={{ width: "100%", flex: 1 }}>
//       <CartesianChart
//         data={DATA}
//         xKey="category"
//         yKeys={["value"]}
//         padding={5}
//         domainPadding={{ left: 50, right: 50, top: 30, bottom: 30 }}
//         axisOptions={{
//           labelPosition: "outset",
//           font,
//         }}
//       >
//         {({ points, chartBounds }) => (
//           <Bar
//             points={points.value}
//             chartBounds={chartBounds}
//             roundedCorners={{ topLeft: 10, topRight: 10 }}
//           >
//             <LinearGradient
//               start={vec(0, 0)}
//               end={vec(0, 400)}
//               colors={["#a78bfa", "#006DDA"]}
//             />
//           </Bar>
//         )}
//       </CartesianChart>
//     </View>
//   );
// }
