import Song from "../Model/Song";

// initial state
export class SongsState {
  public allSongs: Song[] = [];
}

// What action I will use...
export enum SongActionType {
  addSong = "addSong",
  deleteSong = "deleteSong",
  searchSong = "searchSong",
  downloadSong = "downloadSong",
}

// action data structure
export interface SongAction {
  type: SongActionType;
  payload?: any;
}

// Which functions I will run when I will dispatch an action
export const addSongAction = (newSong: Song): SongAction => {
  return { type: SongActionType.addSong, payload: newSong };
};

export const deleteSongAction = (songID: number): SongAction => {
  return { type: SongActionType.deleteSong, payload: songID };
};

export const searchSongAction = (songName: string): SongAction => {
  return { type: SongActionType.searchSong, payload: songName };
};

export const downloadSongAction = (allSongs: Song[]): SongAction => {
  return { type: SongActionType.downloadSong, payload: allSongs };
};

// This is the reducer function, but since it's managed only by redux, we built the function above
export function SongReducer(
  currentState: SongsState = new SongsState(),
  action: SongAction
): SongsState {
  const newState = { ...currentState };

  switch (action.type) {
    case SongActionType.addSong:
      // will give as an error - data mutation....
      // newState.allSongs.push(action.payload);
      newState.allSongs = [...newState.allSongs, action.payload];
      break;

    case SongActionType.deleteSong:
      //   newState.allSongs = newState.allSongs.filter(
      //     (item) => item.title != action.payload
      //   );
      newState.allSongs = [...newState.allSongs].filter(
        (item) => item.id !== action.payload
      );
      break;

    case SongActionType.searchSong:
      newState.allSongs = newState.allSongs.filter((item) =>
        item.title.includes(action.payload)
      );
      break;

    case SongActionType.downloadSong:
      newState.allSongs = action.payload;
      break;
  }

  return newState;
}
