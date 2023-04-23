// Needs to be under Model
// Will handle any possible error we can think of

export class ClientError {
  public status: number;
  public message: string;

  public constructor(status: number, message: string) {
    this.status = status;
    this.message = message;
  }
}

// "child" client error class
export class RouteNotFoundError extends ClientError {
  public constructor(route: string) {
    super(404, `Route ${route} not found`);
  }
}

// "child" video error class
export class VideoNotFoundError extends ClientError {
  public constructor(videoID: string) {
    super(404, `Video ID ${videoID} not found`);
  }
}

// "child" user not logged in
export class UserNotLoggedError extends ClientError {
  public constructor() {
    super(401, `User not authorized, please login...`);
  }
}
