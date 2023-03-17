

//Every Defect will have an object and connected to the corresponding Property/Tag
let noReadObj = {
   "noReadL0" : {percent: .23, total: 22},
   "noReadL1" : {percent: .23, total: 22},
   "noReadL2" : {percent: .23, total: 22},
   "noReadL3" : {percent: .23, total: 22},
   "noReadL4" : {percent: .23, total: 22},
   "noReadL5" : {percent: .23, total: 22},
   "noReadL6" : {percent: .23, total: 22},
   "noReadL7" : {percent: .23, total: 22},
   "noReadL8" : {percent: .23, total: 22},
}
let barcodeMismatchObj = {
   "barcodeMismatchL0" : {percent: .233, total: 13},
   "barcodeMismatchL1" : {percent: .233, total: 13},
   "barcodeMismatchL2" : {percent: .233, total: 13},
   "barcodeMismatchL3" : {percent: .233, total: 13},
   "barcodeMismatchL4" : {percent: .233, total: 13},
   "barcodeMismatchL5" : {percent: .233, total: 13},
   "barcodeMismatchL6" : {percent: .233, total: 13},
   "barcodeMismatchL7" : {percent: .233, total: 13},
   "barcodeMismatchL8" : {percent: .233, total: 13},   
}
let offsetLidObj = {
   "offsetLidL0" : {percent: .42, total: 18},
   "offsetLidL1" : {percent: .42, total: 18},
   "offsetLidL2" : {percent: .42, total: 18},
   "offsetLidL3" : {percent: .42, total: 18},
   "offsetLidL4" : {percent: .42, total: 18},
   "offsetLidL5" : {percent: .42, total: 18},
   "offsetLidL6" : {percent: .42, total: 18},
   "offsetLidL7" : {percent: .42, total: 18},
   "offsetLidL8" : {percent: .42, total: 18},   
}
let tippedPodObj = {
   "tippedPodL0" : {percent: .432, total: 02},
   "tippedPodL1" : {percent: .432, total: 12},
   "tippedPodL2" : {percent: .432, total: 22},
   "tippedPodL3" : {percent: .432, total: 32},
   "tippedPodL4" : {percent: .432, total: 42},
   "tippedPodL5" : {percent: .432, total: 52},
   "tippedPodL6" : {percent: .432, total: 62},
   "tippedPodL7" : {percent: .432, total: 72},
   "tippedPodL8" : {percent: .432, total: 82},   
}
let grossDefectObj = {
   "grossDefectL0" : {percent: .20, total: 10},
   "grossDefectL1" : {percent: .21, total: 11},
   "grossDefectL2" : {percent: .22, total: 12},
   "grossDefectL3" : {percent: .23, total: 13},
   "grossDefectL4" : {percent: .24, total: 14},
   "grossDefectL5" : {percent: .25, total: 15},
   "grossDefectL6" : {percent: .26, total: 16},
   "grossDefectL7" : {percent: .27, total: 17},   
   "grossDefectL8" : {percent: .28, total: 18},   
}
let partialSealObj = {
   "partialSealL0": {percent: .033, total: 20},
   "partialSealL1": {percent: .133, total: 21},
   "partialSealL2": {percent: .233, total: 22},
   "partialSealL3": {percent: .333, total: 23},
   "partialSealL4": {percent: .433, total: 24},
   "partialSealL5": {percent: .533, total: 25},
   "partialSealL6": {percent: .633, total: 26},
   "partialSealL7": {percent: .733, total: 27},
   "partialSealL8": {percent: .833, total: 28},
}
let coffeeInSealObj = {
   "coffeeInSealL0" : {percent: .02, total: 01},
   "coffeeInSealL1" : {percent: .12, total: 11},
   "coffeeInSealL2" : {percent: .22, total: 21},
   "coffeeInSealL3" : {percent: .32, total: 31},
   "coffeeInSealL4" : {percent: .42, total: 41},
   "coffeeInSealL5" : {percent: .52, total: 51},
   "coffeeInSealL6" : {percent: .62, total: 61},
   "coffeeInSealL7" : {percent: .72, total: 71},
   "coffeeInSealL8" : {percent: .82, total: 81},
}
let dirtyRimObj = {
   "dirtyRimL0" : {percent: .20, total: 11},
   "dirtyRimL1" : {percent: .21, total: 11},
   "dirtyRimL2" : {percent: .22, total: 11},
   "dirtyRimL3" : {percent: .23, total: 11},
   "dirtyRimL4" : {percent: .24, total: 11}, 
   "dirtyRimL5" : {percent: .25, total: 11},
   "dirtyRimL6" : {percent: .26, total: 11},
   "dirtyRimL7" : {percent: .27, total: 11},
   "dirtyRimL8" : {percent: .28, total: 11},
}
let pressDepthObj = {
   "pressDepthL0" : {percent: .22, total: 10},
   "pressDepthL1" : {percent: .22, total: 11},
   "pressDepthL2" : {percent: .22, total: 12},
   "pressDepthL3" : {percent: .22, total: 13},
   "pressDepthL4" : {percent: .22, total: 14},
   "pressDepthL5" : {percent: .22, total: 15},
   "pressDepthL6" : {percent: .22, total: 16},
   "pressDepthL7" : {percent: .22, total: 17},
   "pressDepthL8" : {percent: .22, total: 18},
}

//Use this to create the tags in the json
// let arr = []
// for(let i=171; i<=179; i++){
//    arr.push(`"${i}":{"name":"pressDepthTotalL${i-171}"},`)
// }
// console.log(arr)


//Create the arrays for each defect object
let lengthObj = Object.keys(noReadObj).length

//percents array for all defects
let noReadPercentArr = []
let barcodeMismatchPercentArr = []
let offsetLidPercentArr = []
let tippedPodPercentArr = []
let grossDefectPercentArr = []
let partialSealPercentArr = []
let coffeeInSealPercentArr = []
let dirtyRimPercentArr = []
let pressDepthPercentArr = []

//total array for all defects
let noReadTotalArr = []
let barcodeMismatchTotalArr = []
let offsetLidTotalArr = []
let tippedPodTotalArr = []
let grossDefectTotalArr = []
let partialSealTotalArr = []
let coffeeInSealTotalArr = []
let dirtyRimTotalArr = []
let pressDepthTotalArr = []



//looping through object and push() into either Percent Array or Total Array
for(let i=0; i<lengthObj; i++){

   noReadPercentArr.push(noReadObj[`noReadL${i}`]['percent'].toFixed(3))
   noReadTotalArr.push(noReadObj[`noReadL${i}`]['total'])

   barcodeMismatchPercentArr.push(barcodeMismatchObj[`barcodeMismatchL${i}`]['percent'].toFixed(3))
   barcodeMismatchTotalArr.push(barcodeMismatchObj[`barcodeMismatchL${i}`]['total'])

   offsetLidPercentArr.push(offsetLidObj[`offsetLidL${i}`]['percent'].toFixed(3))
   offsetLidTotalArr.push(offsetLidObj[`offsetLidL${i}`]['total'])

   tippedPodPercentArr.push(tippedPodObj[`tippedPodL${i}`]['percent'].toFixed(3))
   tippedPodTotalArr.push(tippedPodObj[`tippedPodL${i}`]['total'])

   grossDefectPercentArr.push(grossDefectObj[`grossDefectL${i}`]['percent'].toFixed(3))
   grossDefectTotalArr.push(grossDefectObj[`grossDefectL${i}`]['total'])

   partialSealPercentArr.push(partialSealObj[`partialSealL${i}`]['percent'].toFixed(3))
   partialSealTotalArr.push(partialSealObj[`partialSealL${i}`]['total'])

   coffeeInSealPercentArr.push(coffeeInSealObj[`coffeeInSealL${i}`]['percent'].toFixed(3))
   coffeeInSealTotalArr.push(coffeeInSealObj[`coffeeInSealL${i}`]['total'])

   dirtyRimPercentArr.push(dirtyRimObj[`dirtyRimL${i}`]['percent'].toFixed(3))
   dirtyRimTotalArr.push(dirtyRimObj[`dirtyRimL${i}`]['total'])

   pressDepthPercentArr.push(pressDepthObj[`pressDepthL${i}`]['percent'].toFixed(3))
   pressDepthTotalArr.push(pressDepthObj[`pressDepthL${i}`]['total'])
}

//legend default on load 
document.querySelector('.total1').innerText = `${noReadTotalArr[1]}`
document.querySelector('.total2').innerText = `${barcodeMismatchTotalArr[1]}`
document.querySelector('.total3').innerText = `${offsetLidTotalArr[1]}`            
document.querySelector('.total4').innerText = `${tippedPodTotalArr[1]}`
document.querySelector('.total5').innerText = `${grossDefectTotalArr[1]}`
document.querySelector('.total6').innerText = `${partialSealTotalArr[1]}`
document.querySelector('.total7').innerText = `${coffeeInSealTotalArr[1]}`         
document.querySelector('.total8').innerText = `${dirtyRimTotalArr[1]}`
document.querySelector('.total9').innerText = `${pressDepthTotalArr[1]}`

document.querySelector('.percent1').innerText = `${noReadPercentArr[1]}%`
document.querySelector('.percent2').innerText = `${barcodeMismatchPercentArr[1]}%`
document.querySelector('.percent3').innerText = `${offsetLidPercentArr[1]}%`            
document.querySelector('.percent4').innerText = `${tippedPodPercentArr[1]}%`
document.querySelector('.percent5').innerText = `${grossDefectPercentArr[1]}%`
document.querySelector('.percent6').innerText = `${partialSealPercentArr[1]}%`
document.querySelector('.percent7').innerText = `${coffeeInSealPercentArr[1]}%`         
document.querySelector('.percent8').innerText = `${dirtyRimPercentArr[1]}%`
document.querySelector('.percent9').innerText = `${pressDepthPercentArr[1]}%`


//sample code for hover action
// let rect;
// const hoverMarker= {
//    id: 'hoverMarker',
//    events: ['mousemove'], 
//    beforeDatasetsDraw(chart, args, plugins) {
//       if(rect) {
//          const { ctx } = chart;
//          ctx.save();
//          ctx.fillStyle = 'rgba(102, 102, 102, 0.2)'   //makes it grey
//          ctx.fillRect(rect.x, rect.y, rect.w, rect.h)
//          ctx.restore()
//       }
//    },
//    afterEvent(chart, args) {
//       const {ctx, chartArea: {top, bottom, height}, scales: {x,y} } = chart;
//       if(!args.inChartArea && rect) {  //says that if the mouse is not on the bar then still make the hover turn on
//          rect = undefined;
//          args.changed = true
//       } else if(args.inChartArea && !rect) {
//          //sent info to rect?
//       console.log(args)

//          rect = {
//             x:x.getPixelForValue(2),
//             y:top,
//             w:x.getPixelForValue(5) - x.getPixelForValue(2),
//             h:height,
//          };
//          args.changed = true
//       }
//    }
// }



//GRAPH
var ctx = document.getElementById("myChart4").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["UNKNOWN LANE","LANE 1","LANE 2","LANE 3","LANE 4","LANE 5","LANE 6","LANE 7","LANE 8"],
    datasets: [{
      label: 'NO READ',
      backgroundColor: "rgb(0, 70, 255)",
      data: noReadPercentArr
    }, {
      label: 'BARCODE MISMATCH',
      backgroundColor: "rgb(138, 207, 87)",
      data: barcodeMismatchPercentArr
    }, {
      label: 'OFFSET LID',
      backgroundColor: "rgb(0, 174, 238)",
      data: offsetLidPercentArr
    }, {
      label: 'TIPPED POD',
      backgroundColor: "rgb(114, 50, 157)",
      data: tippedPodPercentArr,
    }, {
      label: 'GROSS DEFECT',
      backgroundColor: "rgb(255, 191, 40)",
      data: grossDefectPercentArr,
    }, {
      label: 'PARTIAL SEAL',
      backgroundColor: "rgb(126, 126, 126)",
      data: partialSealPercentArr,
    }, {
      label: 'COFFEE IN SEAL',
      backgroundColor: "rgb(255, 0, 255)",
      data: coffeeInSealPercentArr,
    }, {
      label: 'DIRTY RIM',
      backgroundColor: "rgb(0, 255, 255)",
      data: dirtyRimPercentArr,
    }, 
      {
      label: 'PRESS DEPTH',
      backgroundColor: "rgb(0, 0, 0)",
      data: pressDepthPercentArr,
    },
   ],
  },
   options: {
      onClick(click, elements, chart) {
         if(elements[0]){
         let positionNum = elements[0].index
         let laneNum = elements[0].index
         document.querySelector('h1').innerText = `LANE ${laneNum}`
         document.querySelector('.total1').innerText = `${noReadTotalArr[positionNum]}`
         document.querySelector('.total2').innerText = `${barcodeMismatchTotalArr[positionNum]}`
         document.querySelector('.total3').innerText = `${offsetLidTotalArr[positionNum]}`            
         document.querySelector('.total4').innerText = `${tippedPodTotalArr[positionNum]}`
         document.querySelector('.total5').innerText = `${grossDefectTotalArr[positionNum]}`
         document.querySelector('.total6').innerText = `${partialSealTotalArr[positionNum]}`
         document.querySelector('.total7').innerText = `${coffeeInSealTotalArr[positionNum]}`         
         document.querySelector('.total8').innerText = `${dirtyRimTotalArr[positionNum]}`
         document.querySelector('.total9').innerText = `${pressDepthTotalArr[positionNum]}`


         document.querySelector('.percent1').innerText = `${noReadPercentArr[positionNum]}%`
         document.querySelector('.percent2').innerText = `${barcodeMismatchPercentArr[positionNum]}%`
         document.querySelector('.percent3').innerText = `${offsetLidPercentArr[positionNum]}%`            
         document.querySelector('.percent4').innerText = `${tippedPodPercentArr[positionNum]}%`
         document.querySelector('.percent5').innerText = `${grossDefectPercentArr[positionNum]}%`
         document.querySelector('.percent6').innerText = `${partialSealPercentArr[positionNum]}%`
         document.querySelector('.percent7').innerText = `${coffeeInSealPercentArr[positionNum]}%`         
         document.querySelector('.percent8').innerText = `${dirtyRimPercentArr[positionNum]}%`
         document.querySelector('.percent9').innerText = `${pressDepthPercentArr[positionNum]}%`
         }
      },

      datasets:{
         bar:{
            hoverInnerGlowWidth: 20,
            hoverInnerGlowColor: 'rgba(146,151,164,.5)',          
         }
      },
      // onHover(event, legendItem){


      //    if(legendItem[0]){
      //       console.log('yes')
        
      //    }else{
      //       console.log('no')
      //    }
      // },
      // datasets:{
      //    bar: {
      //       grouped:true,
      //       hoverBackgroundColor: "rgb(0, 0, 0)",
      //    },
      // },
      plugins:{
         tooltip: {
            enabled:false
         },
         legend: {
            display:false,
         },
      },
      // hoverBackgroundColor:"grey",
      //on hover get the width and height and color grey 
           
      scales: {
         x: {
            stacked: true,
            grid:{
               display: false,
            },
         },
         y: {
            stacked: true,
            ticks: {
               stepSize: .10,
               format: {
                  style: 'percent'
               },
            },
         },
      },

   },
   // plugins:[hoverMarker],
});