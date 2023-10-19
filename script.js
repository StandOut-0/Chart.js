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
            backgroundColor: ['#a59bf0', '#c7c0f5','#998bf7', '#7b6fd5']
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
            legend: { labels: { font: { 
                family: 'Arial', //Helvetica Neue, Helvetica, Arial, sans-serif
                style: 'italic', //normal, italic, oblique, initial, inherit
                size: 9
             } } }
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
            data: [10,3,30,23,10,5,50]
        }]
    }
});
