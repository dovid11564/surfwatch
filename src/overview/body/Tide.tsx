import { useState, useEffect } from 'react';
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

const Tide = () => {
    const [tide, setTide] = useState<any[]>([])
    
    const lat = "40.5891"
    const lng = "-73.8010"

    useEffect(() => {
            fetch(`https://api.stormglass.io/v2/tide/sea-level/point?lat=${lat}&lng=${lng}&start=2020-02-24&end=2020-02-26`, {
                headers: {
                    'Authorization': `${import.meta.env.VITE_REACT_APP_STORMGLASS}`
                }
            })
                .then(res => res.json())
                .then(data => setTide(data.data))
        }, [])

    // const sgData = tide?.map((item) => item.sg);
    // const timeLabels = tide?.map((item) => item.time);
    const sgData = tide ? tide.map((item) => item.sg) : ["loading..."];
    const timeLabels = tide ? tide.map((item) => String(item.time)) : [];

    // const sgData = ["loading..."];
    // const timeLabels = ["loading..."];

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
                min: -5,
                max: 5
            }
        }
    }
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