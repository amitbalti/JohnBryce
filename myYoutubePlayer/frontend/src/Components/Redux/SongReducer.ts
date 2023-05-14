import Song from "../Model/Song";

// Initial State
// What the state suppose to save?
export class SongsState {
  public allSongs: Song[] = [];
}

// What action I will use...
// We are putting it as 'enum' in advance - it will help me afterwards to write the switch and to tell me what is missing.
// We are putting it as 'enum' in advance - also because the odds to have typo is low.
export enum SongActionType {
  addSong = "addSong",
  deleteSong = "deleteSong",
  searchSong = "searchSong",
  downloadSongs = "downloadSongs",
}

// Action data structure
export interface SongAction {
  type: SongActionType;
  payload?: any; // Since there is a chance I won't transfer data, I will put question mark next to the payload
}

// Which function will run when I will dispatch an action
export const addSongAction = (newSong: Song): SongAction => {
  return { type: SongActionType.addSong, payload: newSong };
};

export const deleteSongAction = (songID: number): SongAction => {
  return { type: SongActionType.deleteSong, payload: songID };
};

export const searchSongAction = (songName: string): SongAction => {
  return { type: SongActionType.searchSong, payload: songName };
};

export const downloadSongsAction = (allSongs: Song[]): SongAction => {
  return { type: SongActionType.downloadSongs, payload: allSongs };
};

export function SongReducer(
  currentState: SongsState = new SongsState(),
  action: SongAction
): SongsState {
  const newState = { ...currentState };

  switch (action.type) {
    // action.type to the SWITCH
    // action.payload to the DATA

    case SongActionType.addSong:
      // Will give us an error - data mutation...
      newState.allSongs.push(action.payload);
      break;

    case SongActionType.deleteSong:
      // Returns all of them except for one
      newState.allSongs = newState.allSongs.filter(
        (item) => item.title != action.payload
      );
      break;

    case SongActionType.searchSong:
      // As long as the search includes something from the song it will work
      newState.allSongs = newState.allSongs.filter((item) =>
        item.title.includes(action.payload)
      );
      break;

    case SongActionType.downloadSongs:
      // Getting an array of songs and updating the state.
      newState.allSongs = action.payload;
      break;
  }

  return newState;
}
