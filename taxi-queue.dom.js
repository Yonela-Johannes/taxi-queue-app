import { TaxiQueue } from "./taxi-queue.js";
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
// create Factory Function instance
const join = () => {
    taxiQueue.joinQueue()
    passengerCounter.innerHTML = taxiQueue.queueLength()
}

const leave = () => {
    taxiQueue.leaveQueue()
    passengerCounter.innerHTML = taxiQueue.queueLength()
}

const joinTaxiQueue = () => {
    taxiQueue.joinTaxiQueue()
    taxiQueCount.innerHTML = taxiQueue.taxiQueueLength()
}

const departTaxi = () => {
    taxiQueue.taxiDepart()
    console.log(taxiQueue.taxiDepart())
    // departCount.innerHTML = 
}
// DOM events
joinBtn.addEventListener('click', join)
leaveBtn.addEventListener('click', leave)
joinTaxiBtn.addEventListener('click', joinTaxiQueue)

departBtn.addEventListener('click', departTaxi)
