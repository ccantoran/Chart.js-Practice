const ctx = document.getElementById('myChart');
        

//Variables will be set to each cwidget.Property/Tag
let noReadTag = cwidget.NoReadDonut
let barcodeMismatchTag = cwidget.BarcodeMismatchDonut
let offsettLidTag = cwidget.OffsetLidDonut
let tippedPodTag = cwidget.TippedPodDonut
let grossDefectTag = cwidget.GrossDefectDonut
let partialSealTag = cwidget.PartialSealDonut
let coffeeInSealTag = cwidget.CoffeeInSealDonut
let dirtyRimTag = cwidget.DirtyRimDonut
let pressDepthTag = cwidget.PressDepthDonut

//Calculates percent of each tag and puts in array called percentArray
let tagArray = [noReadTag, barcodeMismatchTag, offsettLidTag, tippedPodTag, grossDefectTag, partialSealTag, coffeeInSealTag, dirtyRimTag, pressDepthTag]

let defectTotal = tagArray.reduce((a, b) => a + b)

let percentArray = []

for(let i=0; i<tagArray.length; i++){
  percentArray.push(
    parseFloat(((tagArray[i]/defectTotal) * 100).toFixed(2))
    )
}

let labelArray = ['NO READ', 'BARCODE MISMATCH', 'OFFSET LID', 'TIPPED LID', 'GROSS DEFECT', 'PARTIAL SEAL', 'COFFEE IN SEAL', 'DIRTY RIM', 'PRESS DEPTH']


//on window load the default value inside circle will be whatever is at [0]
document.querySelector('.centerText').innerText = labelArray[0]
document.querySelector('.centerPercent').innerText = `${percentArray[0]}`




new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['NO READ', 'BARCODE MISMATCH', 'OFFSET LID', 'TIPPED LID', 'GROSS DEFECT', 'PARTIAL SEAL', 'COFFEE IN SEAL', 'DIRTY RIM', 'PRESS DEPTH'],
    datasets: [{
      data: [percentArray[0], percentArray[1], percentArray[2], percentArray[3], percentArray[4], percentArray[5], percentArray[6], percentArray[7], percentArray[8]],
      borderWidth: 5,
      cutout:'85%',
      hoverOffset:20,
      backgroundColor: [
        'rgb(0, 70, 255)',
        'rgb(138, 207, 87)',
        'rgb(0, 174, 238)',
        'rgb(114, 50, 157)',
        'rgb(255, 191, 40)',
        'rgb(126, 126, 126)',
        'rgb(255, 0, 255)',
        'rgb(0, 255, 255)',
        'rgb(0, 0, 0)'
      ],
    }]
  },
  options: {
    onClick(click, elements, chart) {
      if(elements[0]){
      console.log(elements[0].index)
      document.querySelector('.centerText').innerText = labelArray[elements[0].index]
      document.querySelector('.centerPercent').innerText = `${percentArray[elements[0].index]}%`
      }
    },
    layout:{
      padding:30
    },
    plugins: {
      tooltip: {
        enabled:false
      },
      legend: {
        display:false,
        // position:"right",
        // labels: {
        //   boxWidth:30,
        //   padding:30,
        //   usePointStyle: true, 
        //   pointStyle: "circle"
        // }
      },

    }
  }
});







