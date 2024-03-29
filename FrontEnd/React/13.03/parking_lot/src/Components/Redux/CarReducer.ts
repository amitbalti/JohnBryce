import Car from "../Modal/Car";

// Phase I
// Create the data that should be exposed to the application
// מה יוחצן לאפליקציה
export class CarState {
  public cars: Car[] = JSON.parse(localStorage.getItem("parking")); // איתחול מערך
}

// Phase II
// Which actions we want to expose
// איזה פעולות אנחנו רוצים להחצין
// enum - a list of actions which we can't change the values inside.
// enum will have me all the actions I would like to have.
export enum CarActionType {
  carAdded = "CarAdded", // adding a car
  carDeleted = "CarDeleted", // deleting a car
  carUpdated = "CarUpdated", // updating a car
  carDownloaded = "CarDownloaded", // updating the whole car list, being executed only ONCE.
}

// Phase III
// How the data structure will be
// action, payload
export interface CarAction {
  type: CarActionType; // The reducer is expecting to get the action type
  payload?: any; // The payload - the data which I want to pass
}

// Phase IV
// The function that needs to be run according to action
export function CarAddedAction(cars: Car): CarAction {
  return { type: CarActionType.carAdded, payload: cars };
}

export function CarDeletedAction(parkingNumber: number): CarAction {
  return { type: CarActionType.carDeleted, payload: parkingNumber };
}

export function CarUpdatedAction(car: Car): CarAction {
  return { type: CarActionType.carUpdated, payload: car };
}

export function CarDownloadedAction(cars:Car[]): CarAction {
  return { type: CarActionType.carDownloaded };
}

// Phase V
// Building the reducer by it's signature
// We will not handle or use this function, the redux will handle it for us.
export function carReducer(
  currentState: CarState = new CarState(),
  action: CarAction
): CarState {
  const newState = {...currentState };
  switch (action.type) {
    case CarActionType.carAdded:
      newState.cars[action.payload.parkingNumber] = action.payload;
    break;
    case CarActionType.carDeleted:
      newState.cars[action.payload.parkingNumber] = new Car("na", "na", 'na', 0, 0, 0, action.payload.parkingNumber);
    break;
    case CarActionType.carUpdated:
      newState.cars[action.payload.parkingNumber] = action.payload;
    break;
    case CarActionType.carDownloaded:
      // error -> newState.cars = JSON.parse(localStorage.getItem("parking"));
      newState.cars = action.payload;
    break;
  }
  // localStorage.setItem("parking",JSON.stringify(newState.cars));
  return newState;
}
