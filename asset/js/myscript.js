function uji(){
    nama = window.prompt("Masukkan nama:");
    console.log("Hello, "+nama);
    document.getElementById("teks").innerHTML = "Hello, " + nama;
}

function uji2(){
    nama = window.prompt("Masukkan nama:");
    par = $("#teks");
    par.text("Hello, " + nama);
    par.css("font-size", "50px");
}

const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });