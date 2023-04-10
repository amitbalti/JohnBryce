import Vacation from "../../Model/Vacation";

// Phase 1: create the data that should be exposed to the app
export class VacationState{
    public vacations: Vacation[] = []; // איתחול מערך
}

// Phase 2: which actions we want to expose
export enum VacationActionType{
    vacationAdded = "VacationAdd", // Adding a vacation
    vacationDeleted = "VacationDelete", // Deleting a vacation
    vacationUpdated = "VacationUpdate", // Updating a vacation
    vacationDownloaded = "VacationDownload" // Updating the whole vacation list - executed once.
}

// Phase 3: how the data structure will be - action, payload
export interface VacationAction  {
    type: VacationActionType,
    payload?: any
}

// Phase 4: the function that needs to be run according to action
export function VacationAddedAction(vacation:Vacation):VacationAction {
    return {type: VacationActionType.vacationAdded, payload: vacation}
}

export function VacationDeletedAction(vacationId:number):VacationAction {
    return {type: VacationActionType.vacationDeleted, payload: vacationId}
}

export function VacationUpdatedAction(vacation:Vacation):VacationAction {
    return {type: VacationActionType.vacationUpdated, payload: vacation}
}

export function VacationDownloadedAction(vacations:Vacation[]):VacationAction {
    return {type: VacationActionType.vacationDownloaded}
}

// Phase 5: building the reducer by it's signature. We will not handle or use this function, the redux will handle it for us.
export function vacationReducer(currentState:VacationState = new VacationState, action:VacationAction):VacationState {
    const newState = {...currentState};
    switch (action.type) {
        case VacationActionType.vacationAdded:
            newState.vacations[action.payload.vacationId]=action.payload;
        break;
        case VacationActionType.vacationDeleted:
            newState.vacations[action.payload.vacationId]=new Vacation("na","na",new Date(),new Date(),0,"na",action.payload.vacationId);
        break;
        case VacationActionType.vacationUpdated:
            newState.vacations[action.payload.vacationId]=action.payload;
        break;
        case VacationActionType.vacationDownloaded:
            // error -> newState.vacations = JSON.parse(localStorage.getItem("vacation"));
            newState.vacations = action.payload;
        break;
    }
    // localStorage.setItem("vacation",JSON.stringify(newState.vacations));
    return newState;
}