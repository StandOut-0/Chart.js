// 기본색상 재설정
Chart.defaults.font.size = 14; //폰트크기
Chart.defaults.borderColor = '#c1c1c1'; //그래프 수치선 색
Chart.defaults.color = '#333333'; //텍스트 색

// 막대그래프 bar
const chart_bar = document.getElementById('chart_bar');
new Chart(chart_bar, {
    type: 'bar',
    data: {
        labels: ['그래프1', '그래프2', '그래프3', '그래프4'],
        datasets: [{
            label: '막대그래프 bar',
            data: [12, 19, 3, 5, 2, 3],

            //border
            borderColor: '#1e0dad',
            borderWidth: 2,

            //background
            backgroundColor: ['#a59bf0', '#c7c0f5', '#998bf7', '#7b6fd5']
        }]
    },
    options: {
        //animation
        animation: true,

        scales: { y: { beginAtZero: true } },
        //layout setting
        layout: {
            padding: 10
            // padding: {left:50}
        },
        plugins: {
            //legend font setting
            legend: {
                labels: {
                    font: {
                        family: 'Arial', //Helvetica Neue, Helvetica, Arial, sans-serif
                        style: 'italic', //normal, italic, oblique, initial, inherit
                        size: 9
                    }
                }
            }
        }
    }
});

// 라인그래프 line
const chart_line = document.getElementById('chart_line');
new Chart(chart_line, {
    type: 'line',
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        datasets: [{
            label: '라인그래프 line',
            data: [10, 3, 30, 23, 10, 5, 50],
            backgroundColor: ['#a59bf0', '#c7c0f5', '#998bf7'],
            borderColor: '#1e0dad',
            fill: false, //origin, start, end
        }]
    },
    options: {
        //animations 세부설정
        animations: {
            tension: {
                duration: 3000,
                easing: 'linear', //www.chartjs.org/docs/latest/configuration/animations.html#easing
                from: 5, to: 0,
                loop: false
            }
        }
    }
});

// 도넛그래프 doughnut
const chart_doughnut = document.getElementById('chart_doughnut');
new Chart(chart_doughnut, {
    type: 'doughnut',
    data: {
        labels: ['파트1', '파트2', '파트3'],
        datasets: [{
            data: [10, 3, 30],
            backgroundColor: ['#a59bf0', '#c7c0f5', '#998bf7'],
        }]
    }
});

// 레이더그래프 radar
const chart_radar = document.getElementById('chart_radar');
new Chart(chart_radar, {
    type: 'radar',
    data: {
        labels: ['파트1', '파트2', '파트3', '파트4', '파트5'],
        datasets: [{
            label: "레이더그래프 radar",
            data: [10, 10, 10, 10, 10],
            backgroundColor: '#a59bf090'
        }]
    },
    
});

// const sample = document.getElementById('sample');
// new Chart(sample, {});