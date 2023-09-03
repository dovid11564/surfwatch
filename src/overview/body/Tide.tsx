import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip
)

const sgData =  ["loading..."];
const timeLabels = ["loading..."];

const data = {
    labels: timeLabels,
    datasets: [
        {
            label: 'Tide over next day',
            data: sgData,
            backgroundColor: 'green',
            borderColor: 'yellow',
            pointBorderColor: 'black',
            fill: true, //this toggles background color for the chart based on backgroundColor prop set
            tension: 0.4 //this effects the curve. edit to find one that is comfy
        }
    ]
}

const options = {
    plugins: {
        legend: {
            display: true,
        }
    },
    scales: {
        y: {
            min: 0,
            max: 10
        }
    }
}
const Tide = () => {
    return (
        <div>
            <div>Tide does this reguster</div>
            <Line
                data={data}
                options={options}
            ></Line>
        </div>
    )
}

export default Tide