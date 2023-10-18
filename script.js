// 기본색상 재설정
Chart.defaults.borderColor = '#c1c1c1'; //그래프 수치선 색
Chart.defaults.color = '#333333'; //텍스트 색

// 막대그래프 bar
const ctx = document.getElementById('chart_bar');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['그래프1', '그래프2', '그래프3'],
        datasets: [{
            label: '막대그래프 bar',
            data: [12, 19, 3, 5, 2, 3],
        }]
    },
    options: {
        scales: {
            y: {beginAtZero: true}
        }
    }
});