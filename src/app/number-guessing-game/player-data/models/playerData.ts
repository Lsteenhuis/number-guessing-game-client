export class PlayerData {
  public constructor(private _userName: string,
                     private _userDateOfBirth: string) {
  }

  public get userName(): string {
    return this._userName;
  }

  public set userName(value: string) {
    this._userName = value;
  }

  public get userDateOfBirth(): string {
    return this._userDateOfBirth;
  }

  public set userDateOfBirth(value: string) {
    this._userDateOfBirth = value;
  }
}
