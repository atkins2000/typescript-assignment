import {carInfo} from './car';
import {parkArea} from './area';

export class index{
    
    dict: {[key:string]: number} = {                                //remove dictionary
        "create_parking_lot": 1,
        "park": 2,
        "leave": 3,
        "status": 4,
        "registration_numbers_for_cars_with_colour": 5,
        "slot_numbers_for_cars_with_colour": 6,
        "slot_number_for_registration_number":7,
        "Colour": 8
    };

    parkingArea: parkArea;
                                                                
    constructor(){                                                  //create_parking_lot should not be called again
        this.parkingArea = new parkArea(0, [], []);
    }

    getReq(command: string){
        const majorReq = command.split(" ")[0];
        const params1 = command.split(" ")[1];
        const params2 = command.split(" ")[2];

        switch(this.dict[majorReq]){
            case 1: 
                this.parkingArea = new parkArea(Number(params1), [], []);
                console.log(`Created a parking lot with ${params1} slots`); 
                break;
            case 2: 
                this.parkHelper(this.parkingArea, params1, params2);
                break;
            case 3:
                this.leaveHelper(this.parkingArea, Number(params1));
                console.log(`Slot number ${params1} is free`);
                break;
            case 4:
                this.status(this.parkingArea);
                break;
            case 5: 
                this.regColour(this.parkingArea, params1);
                break;
            case 6:
                this.slotColour(this.parkingArea, params1);
                break;
            case 7:
                this.slotReg(this.parkingArea, params1);
                break;
            case 8:
                this.colourHelper(this.parkingArea);
                break;
            default: 
                console.log("Please provide a valid input");
                break;
        }
    }
    
    parkHelper(parkingArea: parkArea, params1: string, params2: string){    //method of area.ts: owner is the parking lot
        let newCar = new carInfo(params1, params2, 0);
        for(let i=1; i<=parkingArea.size; i++){
            if(parkingArea.slots[i-1]===false){
                parkingArea.slots[i-1] = true;
                newCar.slotNo = i;
                parkingArea.slotInfo[i-1] = newCar;
                console.log(`Allocated slot number: ${i}`);
                return;
            }
        }
        console.log("Sorry, parking lot is full");
    }

    leaveHelper(parkingArea: parkArea, params: number){
        parkingArea.slots[params-1] = false;
    }

    status(parkingArea: parkArea){
        for(let i=0; i<parkingArea.size; i++){
            if(parkingArea.slots[i]===true){
                console.log(`${i+1}    ${parkingArea.slotInfo[i].numberPlate}`);
            }
        }
    }

    regColour(parkingArea: parkArea, params: string){
        for(let i=0; i<parkingArea.size; i++){
            if(parkingArea.slotInfo[i].color === params){
                process.stdout.write(`${parkingArea.slotInfo[i].numberPlate}  `);
            }
        }
        console.log(" ");
    }
    slotColour(parkingArea:parkArea, params: string){
        for(let i=0; i<parkingArea.size; i++){
            if(parkingArea.slotInfo[i].color === params){
                process.stdout.write(`${i+1}  `);
            }
        }
        console.log(" ");    
    }
    slotReg(parkingArea: parkArea, params: string){
        for(let i=0; i<parkingArea.size; i++){
            if(parkingArea.slotInfo[i].numberPlate === params) console.log(i+1);
        }    
    }
    colourHelper(parkingArea: parkArea){
        for(let i=0; i<parkingArea.size; i++){
            console.log(parkingArea.slotInfo[i].color);
        }
    }
}