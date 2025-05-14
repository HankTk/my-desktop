// @ts-ignore
import ReactHighcharts from 'react-highcharts'
// @ts-ignore
import priceData from '../btcdata.json'
import moment from 'moment'

export default function LineChart() {

    const options = {style: 'currency', currency: 'USD'};
    const numberFormat = new Intl.NumberFormat('en-US', options);

    // @ts-ignore
    const configPrice = {

        yAxis: [{
            offset: 20,

            labels: {
                // @ts-ignore
                formatter: function () {
                    // @ts-ignore
                    return numberFormat.format(this.value)
                }
                ,
                x: -15,
                style: {
                    "color": "#000", "position": "absolute"

                },
                align: 'left'
            },
        },

        ],
        tooltip: {
            shared: true,
            // @ts-ignore
            formatter: function () {
                // @ts-ignore
                return numberFormat.format(this.y, 0) +  '</b><br/>' + moment(this.x).format('MMMM Do YYYY, h:mm')
            }
        },
        plotOptions: {
            series: {
                showInNavigator: true,
                gapSize: 6,

            }
        },
        title: {
            text: `Bitcoin stock price`
        },
        chart: {
            height: 600,
        },

        credits: {
            enabled: false
        },

        legend: {
            enabled: true
        },
        xAxis: {
            type: 'date',
        },
        /*
        rangeSelector: {
            selected: 1
        },
        */
        rangeSelector: {
            buttons: [{
                type: 'day',
                count: 1,
                text: '1d',
            }, {
                type: 'day',
                count: 7,
                text: '7d'
            }, {
                type: 'month',
                count: 1,
                text: '1m'
            }, {
                type: 'month',
                count: 3,
                text: '3m'
            },
                {
                    type: 'all',
                    text: 'All'
                }],
            selected: 4
        },
        series: [{
            name: 'Price',
            type: 'spline',

            data: priceData,
            tooltip: {
                valueDecimals: 2
            },

        }
        ]
    };
    return (
        <div>
            <ReactHighcharts config = {configPrice}></ReactHighcharts>
        </div>
    )
}
