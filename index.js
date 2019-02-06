class Driver {
    constructor(name,startDate) {
        this.name = name;
        this.startDate = new Date(startDate);
    }

    yearsExperienceFromBeginningOf(year) {
        let ttlYears = year - this.startDate.getFullYear();
        return ttlYears;
    }

} 

let eastWest = [
    '1st Avenue',
    '2nd Avenue',
    '3rd Avenue',
    'Lexington Avenue',
    'Park',
    'Madison Avenue',
    '5th Avenue'
];

class Route {
    constructor(beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation;
        this.endingLocation = endingLocation;
    }

    blocksTravelled() {
        let horiz1 = eastWest.indexOf(this.beginningLocation.horizontal);
        let horiz2 = eastWest.indexOf(this.endingLocation.horizontal);
        let horizontal = Math.abs(horiz1 - horiz2)
        let vertical = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
        let total = horizontal + vertical
        return total
    }

    estimatedTime(status) {
        if (status) {
            return this.blocksTravelled()/2
        } else { 
            return this.blocksTravelled()/3 
        }
    }
} 