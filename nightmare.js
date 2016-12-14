const Nightmare = require('nightmare')
const nightmare = Nightmare({
  openDevTools: {
    mode: 'detach'
  },
  show: true
})

// const getGoogleDate = () => {
//   Date.now()
// }

// nightmare
//   .goto('https://calendar.google.com/calendar/b/3/render?tab=mc#main_7%7Csearch-1+23945+23945+23945-n+HIR%209++++++++1+7')
//   .wait(10000)
//   .evaluate(() => {

//     let items = document.querySelectorAll('.lv-event-time')
//     // let items = document.querySelectorAll('.lv-event-time')
//     let times = [];
//     for (let i = 0; i < items.length; i++) {
//       // console.log(items[i].innerHTML, 'item')
//       times.push(items[i].innerText)
//     }
//     // return {
//     //   // times: times,
//     //   items: items
//     // }
//     console.log(times, 'times')
//     return times
//   }) 
//   // .wait(10000)
//   .end()
//   .then((result) => {
//     // console.log(result.times, 'The items')
//     console.log(result, 'The results')
//   })
//   .catch((err) => {
//     console.log('Error: ', err)
//   })



  // localStorage.removeItems('slots')

  // .lv-event-time

  // .lv-event-title
