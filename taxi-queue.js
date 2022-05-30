function TaxiQueue() {
	let count = 0
	let taxiCount = 0
	function joinQueue() {
		return count++
	}

	function leaveQueue() {
		return count == 0 ? count : count--
	}

	function joinTaxiQueue() {
		return taxiCount++
	}

	function queueLength() {
		return count
	}

	function taxiQueueLength() {
		return taxiCount
	}

	function taxiDepart() {
		if (count < 12) {
			return taxiCount
		} else {
			if (taxiCount == 0) {
				taxiCount = 0
			} else {
				taxiCount--
			}
			if (taxiCount == 0) {
				return count
			} else {
				return count = count - 12
			}
		}
	}

	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		taxiQueueLength,
		taxiDepart
	}
}