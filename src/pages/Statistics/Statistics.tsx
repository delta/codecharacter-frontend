import styles from './Statistics.module.css';

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Area,
  AreaChart,
  Legend,
  BarChart,
  Tooltip,
  Bar,
} from 'recharts';
import GraphFooter from '../../components/GraphFooter/GraphFooter';
import { apiConfig, ApiError } from '../../api/ApiConfig';
import { StatsApi } from '@codecharacter-2024/client';
import { useState, useEffect } from 'react';
import Toast from 'react-hot-toast';

const BarChartToolTip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.barChartToolTip}>
        <ul>
          <li className="label">{`Your Wins: ${payload[0].value}`}</li>
          <li className="label">{`Your Losses: ${payload[1].value}`}</li>
        </ul>
      </div>
    );
  }

  return null;
};

const LineChartToolTip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.barChartToolTip}>
        <ul>
          <li className="label">{`Your Attacks ${payload[0].value}%`}</li>
          <li className="label">{`Leaderboard Top: ${payload[1].value}%`}</li>
        </ul>
      </div>
    );
  }
  return null;
};

const AreaChartToolTip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.barChartToolTip}>
        <div>
          <p>Coins Used By:</p>
          <ul>
            <li className="label">{`You: ${payload[0].value}`}</li>
            <li className="label">{`Leaderboard Top: ${payload[1].value}`}</li>
          </ul>
        </div>
      </div>
    );
  }
  return null;
};
const DCToolTip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.barChartToolTip}>
        <div>
          <p>Daily Challenges Attempts Made:</p>
          <ul>
            <li className="label">{`You: ${payload[0].value}`}</li>
            <li className="label">{`Leaderboard Top: ${payload[1].value}`}</li>
          </ul>
        </div>
      </div>
    );
  }
  return null;
};
const Statistics = () => {
  const [selected, setSelected] = useState(0);
  const [data, setData] = useState({});

  const fetchTop = () => {
    const statisticsApi = new StatsApi(apiConfig);
    statisticsApi
      .getStats()
      .then(response => {
        const cdata = [];
        for (
          let i = 0;
          i < Math.min(response[0].length, response[1].length);
          i++
        ) {
          const currentDataObject = {};
          const player1Data = response[0][i];
          const player2Data = response[1][i];

          for (const keys in player1Data) {
            currentDataObject[`${keys}1`] = player1Data[keys];
            currentDataObject[`${keys}2`] = player2Data[keys];
          }
          cdata.push(currentDataObject);
        }
        setData(cdata);
        console.log(cdata);
      })
      .catch(error => {
        if (error instanceof ApiError) Toast.error(error.message);
      });
  };
  useEffect(() => {
    fetchTop();
  }, []);
  const titles = [
    'Average Attack Rates',
    'Coins Usage Per Match',
    'Daily Challenges Attempts',
    'Daily Challenges Info',
  ];
  return (
    <>
      <div className={styles.parent}>
        <div className={styles.footer}>
          <GraphFooter
            graph={['1', '2', '3', '4']}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
        <div className={styles.bg}>
          <div className={styles.graphContainer}>
            <h1 className={styles.title}>{titles[selected]}</h1>
            <div className={styles.graphParent}>
              {selected == 0 && (
                <AreaChart
                  width={1130}
                  height={600}
                  data={data}
                  margin={{
                    right: 80,
                    bottom: 30,
                  }}
                >
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                  </defs>

                  <XAxis
                    className={styles.axis}
                    stroke="white"
                    label={{
                      value: 'Past Matches',
                      position: 'insideBottomRight',
                      offset: -15,
                    }}
                  />
                  <YAxis className={styles.axis} stroke="white" />
                  <Tooltip
                    cursor={{
                      fill: '#ffffff34',
                    }}
                    content={<LineChartToolTip external={external} />}
                  />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Area
                    type="monotone"
                    strokeWidth="4px"
                    dataKey="avgAtk1"
                    stroke="#8884d8"
                    fillOpacity={1}
                    fill="url(#colorUv)"
                    activeDot={{ r: 8 }}
                    name="You"
                  />
                  <Area
                    type="monotone"
                    dataKey="avgAtk2"
                    strokeWidth="2px"
                    strokeDasharray="5 5"
                    stroke="#82ca9d"
                    activeDot={{ r: 3 }}
                    fillOpacity={1}
                    fill="url(#colorPv)"
                    name="Leaderboard Top"
                  />

                  <Legend
                    wrapperStyle={{
                      fontFamily: 'monospace',
                      textStyle: 'bold',
                      fontWeight: '900',
                    }}
                    verticalAlign="top"
                  />
                </AreaChart>
              )}
              {selected == 1 && (
                <AreaChart
                  width={1130}
                  height={600}
                  data={data}
                  margin={{
                    right: 80,
                    bottom: 30,
                  }}
                >
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00ffff" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#00ffff" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ffff66" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#ffff66" stopOpacity={0} />
                    </linearGradient>
                  </defs>

                  <XAxis
                    className={styles.axis}
                    stroke="white"
                    label={{
                      value: 'Past Matches',
                      position: 'insideBottomRight',
                      offset: -15,
                    }}
                  />
                  <YAxis className={styles.axis} stroke="white" />
                  <Tooltip
                    cursor={{
                      fill: '#ffffff34',
                    }}
                    content={<AreaChartToolTip external={external} />}
                  />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Area
                    type="monotone"
                    strokeWidth="4px"
                    dataKey="coins1"
                    stroke="#00ffff"
                    fillOpacity={1}
                    fill="url(#colorUv)"
                    activeDot={{ r: 8 }}
                    name="You"
                  />
                  <Area
                    type="monotone"
                    dataKey="coins2"
                    strokeWidth="2px"
                    strokeDasharray="5 5"
                    stroke="#ffff66"
                    activeDot={{ r: 3 }}
                    fillOpacity={1}
                    fill="url(#colorPv)"
                    name="Leaderboard Top"
                  />

                  <Legend
                    wrapperStyle={{
                      fontFamily: 'monospace',
                      textStyle: 'bold',
                      fontWeight: '900',
                    }}
                    verticalAlign="top"
                  />
                </AreaChart>
              )}
              {selected == 2 && (
                <LineChart
                  width={1230}
                  height={630}
                  data={data}
                  margin={{
                    right: 180,
                    bottom: 30,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    className={styles.axis}
                    stroke="white"
                    label={{
                      value: 'Past Matches',
                      position: 'insideBottomRight',
                      offset: -15,
                    }}
                  />
                  <YAxis className={styles.axis} stroke="white" />

                  <Legend
                    wrapperStyle={{
                      fontFamily: 'monospace',
                      textStyle: 'bold',
                      fontWeight: '900',
                    }}
                    verticalAlign="top"
                  />
                  <Tooltip
                    cursor={{
                      fill: '#ffffff34',
                    }}
                    content={<DCToolTip external={external} />}
                  />
                  <Line
                    type="monotone"
                    dataKey="dc_completions1"
                    stroke="#8884d8"
                    strokeWidth="4px"
                    activeDot={{ r: 8 }}
                    name="You"
                  />
                  <Line
                    type="monotone"
                    strokeDasharray="5 5"
                    strokeWidth="2px"
                    dataKey="dc_completions2"
                    activeDot={{ r: 3 }}
                    stroke="#82ca9d"
                    name="Leaderboard Top"
                  />
                </LineChart>
              )}
              {selected == 3 && (
                <BarChart
                  width={1250}
                  height={600}
                  data={data}
                  margin={{
                    right: 150,
                    bottom: 30,
                  }}
                >
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ffe900" stopOpacity={1} />
                      <stop offset="95%" stopColor="red" stopOpacity={0.8} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2cff00" stopOpacity={1} />
                      <stop
                        offset="95%"
                        stopColor="#00fdff"
                        stopOpacity={0.8}
                      />
                    </linearGradient>
                  </defs>

                  <CartesianGrid strokeDasharray="3 3" />
                  <Legend
                    wrapperStyle={{
                      fontFamily: 'monospace',
                      textStyle: 'bold',
                      fontWeight: '900',
                    }}
                    verticalAlign="top"
                  />

                  <Tooltip
                    cursor={{
                      fill: '#ffffff34',
                    }}
                    content={<BarChartToolTip external={external} />}
                  />
                  <Bar
                    dataKey="dc_wins2"
                    stackId="b"
                    name="Your Wins"
                    fill="url(#colorPv)"
                  />
                  <Bar
                    dataKey="dc_losses2"
                    stackId="b"
                    name="Your Losses"
                    fill="url(#colorUv)"
                  />

                  <XAxis
                    className={styles.axis}
                    stroke="white"
                    label={{
                      value: 'Past Matches',
                      position: 'insideBottomRight',
                      offset: -15,
                    }}
                  />

                  <YAxis className={styles.axis} stroke="white" />
                </BarChart>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
