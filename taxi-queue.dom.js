import { TaxiQueue } from './taxi-queuetwo.js'

// create Factory Function instance
const taxiQueue = TaxiQueue();
// write your DOM code here.
let passengerCounter = document.querySelector('.passenger_queue_count')
let taxiQueCount = document.querySelector('.taxi_queue_count')
let departCount = document.querySelector('.count_depart')
// DOM element references
const joinBtn = document.querySelector('.join_queue')
const leaveBtn = document.querySelector('.leave_queue')
const joinTaxiBtn = document.querySelector('.join_taxi_queue')
const departBtn = document.querySelector('.depart')

passengerCounter.innerHTML = localStorage.getItem('passCounter') ? localStorage.getItem('passCounter') : 0
taxiQueCount.innerHTML = localStorage.getItem('taxiCounter') ? localStorage.getItem('taxiCounter') : 0
const join = () => {
    taxiQueue.joinQueue()
    passengerCounter.innerHTML = taxiQueue.queueLength()
    localStorage.setItem('passCounter', JSON.stringify(taxiQueue.queueLength()))
}

const leave = () => {
    taxiQueue.leaveQueue()
    passengerCounter.innerHTML = taxiQueue.queueLength()
}

const joinTaxiQueue = () => {
    taxiQueue.joinTaxiQueue()
    taxiQueCount.innerHTML = taxiQueue.taxiQueueLength()
    localStorage.setItem('taxiCounter', JSON.stringify(taxiQueue.taxiQueueLength()))
}

const departTaxi = () => {
    // taxiQueue.taxiDepart()
    // departCount.innerHTML = taxiQueue.taxiDepart()
}
// DOM events
joinBtn.addEventListener('click', join)
leaveBtn.addEventListener('click', leave)
joinTaxiBtn.addEventListener('click', joinTaxiQueue)

departBtn.addEventListener('click', departTaxi)
