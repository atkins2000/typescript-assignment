export class carInfo{
    numberPlate: string;
    color: string;
    slotNo: number;                                         //not a car property

    //constructor for a new car
    constructor(numberPlate = '', color = '', slotNo = 0){
        this.numberPlate = numberPlate;                     //no number plate makes no sense
        this.color = color;
        this.slotNo = slotNo;
    }
};
