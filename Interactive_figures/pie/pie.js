document.addEventListener('DOMContentLoaded', function () {
    Highcharts.setOptions({
        colors: ['rgba(128, 0, 128, 0.8)',
            'rgba(255, 165, 0, 0.8)',
            'rgba(0, 128, 0, 0.8)'] // Update with the desired colors
    });

    const chart = Highcharts.chart('container', {

        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            spacingBottom: 15,
            spacingTop: 15,
            spacingLeft: 15,
            spacingRight: 15,
            center: ['50%', '50%']  // Here
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
                size: '60%',
                dataLabels: {
                    enabled: true,
                    format: '{point.name}: {point.y:.0f}',
                    connectorColor: 'silver',
                    style: {
                        fontSize: '14px', // Adjust the font size as needed
                        fontFamily: 'Arial, sans-serif', // Adjust the font family as needed
                        fontWeight: 'normal', // Set font weight to normal
                        color: '#000000'
                    }
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


    // Listen to the window resize event
    window.addEventListener('resize', function () {
        let newSize;

        if (window.innerWidth < 500) {
            newSize = '50%';  // smaller size for small screens
        } else if (window.innerWidth < 800) {
            // Gradual increase in size for intermediate viewport sizes
            newSize = `${70 + (window.innerWidth - 500) / 3}%`; // adjust numbers as per your need
        } else {
            newSize = '70%';  // maximum size for large screens
        }

        chart.update({
            plotOptions: {
                pie: {
                    size: newSize
                }
            }
        });
    });

});
