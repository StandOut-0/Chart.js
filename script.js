// 기본색상 재설정
Chart.defaults.font.size = 14; //폰트크기
Chart.defaults.borderColor = '#c1c1c1'; //그래프 수치선 색
Chart.defaults.color = '#333333'; //텍스트 색

// 막대그래프 bar
const ctx = document.getElementById('chart_bar');
new Chart(ctx, {
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
            backgroundColor: '#a59bf5'
        }]
    },
    options: {
        scales: { y: { beginAtZero: true } },
        plugins: {
            //legend font setting
            legend: { labels: { font: { 
                family: "Arial", //Helvetica Neue, Helvetica, Arial, sans-serif
                style: "italic", //normal, italic, oblique, initial, inherit
                size: 9
             } } }
        }
    }
});


