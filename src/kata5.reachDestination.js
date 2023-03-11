const reachDestination = (distance, speed) =>
  `I should be there in ${Math.ceil((distance / speed) * 2) / 2} hours.`;

module.exports = reachDestination;
