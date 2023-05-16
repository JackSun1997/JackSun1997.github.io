
document.addEventListener('DOMContentLoaded', function () {

    Highcharts.setOptions({
        colors: ['#cc00ff', '#ff9900', '#99ffcc']
    });

    const chart = Highcharts.chart('container', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            height:310
        },
        credits: {
            enabled: false
        },
        title: {
            text: '',
            align: 'center'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.y:.0f}',
                    connectorColor: 'silver'
                }

            }
        },
        series: [{
            name: 'Percentage',
            data: [
                { name: 'Core', y: 1161 },
                { name: 'Accessory', y: 2940 },
                { name: 'Rare', y: 19555 }
            ]
        }]
    });
})