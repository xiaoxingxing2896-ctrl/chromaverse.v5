const apiUrl = "https://chromaverse_Data.super-block-5474.xiaoxingxing2896.workers.dev";
fetch(apiUrl)
  .then(res => res.json())
  .then(data => {
    subscribersChart.data.datasets[0].data = data.subscribers;
    fundsChart.data.datasets[0].data = data.funds;
    dailyChart.data.datasets[0].data = data.daily;
    subscribersChart.update();
    fundsChart.update();
    dailyChart.update();
  });
document.addEventListener("DOMContentLoaded", () => {
  const ctx1 = document.getElementById('subscribersChart').getContext('2d');
  const ctx2 = document.getElementById('fundsChart').getContext('2d');
  const ctx3 = document.getElementById('dailyChart').getContext('2d');

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    tension: 0.4,
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: 'rgba(0,0,0,0.05)' },
      },
      x: {
        grid: { display: false },
      }
    },
    plugins: {
      legend: { display: false },
    }
  };

  const subscribersChart = new Chart(ctx1, {
    type: 'line',
    data: {
      labels: ["10/21","10/22","10/23","10/24","10/25","10/26","10/27"],
      datasets: [{
        label: '订阅人数',
        data: [50, 75, 120, 200, 310, 400, 480],
        borderColor: '#007aff',
        backgroundColor: 'rgba(0,122,255,0.2)',
        fill: true,
      }]
    },
    options: chartOptions
  });

  const fundsChart = new Chart(ctx2, {
    type: 'line',
    data: {
      labels: ["10/21","10/22","10/23","10/24","10/25","10/26","10/27"],
      datasets: [{
        label: '筹款进度（万元）',
        data: [10, 25, 40, 65, 80, 90, 100],
        borderColor: '#ff9500',
        backgroundColor: 'rgba(255,149,0,0.2)',
        fill: true,
      }]
    },
    options: chartOptions
  });

  const dailyChart = new Chart(ctx3, {
    type: 'line',
    data: {
      labels: ["10/21","10/22","10/23","10/24","10/25","10/26","10/27"],
      datasets: [{
        label: '每日筹款金额（万元）',
        data: [2, 3, 5, 8, 10, 6, 7],
        borderColor: '#34c759',
        backgroundColor: 'rgba(52,199,89,0.2)',
        fill: true,
      }]
    },
    options: chartOptions
  });

  // 切换按钮逻辑
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      document.querySelectorAll('canvas').forEach(c => c.classList.add('hidden'));
      document.getElementById(`${tab.dataset.target}Chart`).classList.remove('hidden');
    });
  });
});
