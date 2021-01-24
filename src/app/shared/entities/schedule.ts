export class Schedule {

    constructor(
        public id?: number,
        public cinemaHallId?: number,
        public filmId?: number,
        public startTime?: Date,
        public freeSeats?: number

    ) {}

}