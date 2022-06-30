import {carInfo} from './car';

export class parkArea{
    size: number;
    slots: Boolean[];
    slotInfo: carInfo[];

    //constructor for the parking lot

    //remove the slots and slotInfo initialisation codes
    constructor(size = 0, slots = [], slotInfo = []){
        this.size = size;                       //size of the parking lot
        this.slots = slots;                     //bool array indicating availabililty of the spot
        this.slotInfo = slotInfo;               //carInfo object array containing information about the car at the place

        const newCar = new carInfo();

        this.resize(slots, size, false);        //resizes the slots array of boolean type 
        this.resize(slotInfo, size, newCar);    //resizes the slotInfo array of carInfo type
    }
    
    resize(arr: any, newSize: number, defaultValue: any) {
        while(newSize > arr.length){
            arr.push(defaultValue);
        }
    }
}





