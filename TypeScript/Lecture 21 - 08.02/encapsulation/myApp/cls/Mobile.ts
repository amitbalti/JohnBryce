import Application from "./Application";

class Mobile {
  // fields
  private versionNum: string = "";
  private isAndroid: boolean = false;
  private memorySize: number = 0;
  private apps: Application[] = [];
  // constructor
  constructor(versionNum: string, isAndroid: boolean, memorySize: number) {
    this.setVersionNum(versionNum);
    this.setIsAndroid(isAndroid);
    this.setMemorySize(memorySize);
  }
  // setters
  public setVersionNum(versionNum: string) {
    this.versionNum = versionNum;
  }
  public setIsAndroid(memorySize: boolean) {
    this.isAndroid = memorySize;
  }
  public setMemorySize(memorySize: number) {
    if (memorySize < 0) {
      console.log(`The application memory size must be greater than zero`);
      return;
    }
    this.memorySize = memorySize;
  }

  // getters
  public getVersionNum(): string {
    return this.versionNum;
  }
  public getIsAndroid(): boolean {
    return this.isAndroid;
  }
  public getMemorySize(): number {
    return this.memorySize;
  }

  // methods
  public printMobileInfo(): string {
    let useMemo = this.memoryUsed();
    let appsInfo = "";
    this.apps.forEach((app) => {
      appsInfo += app.print();
    });
    return `
    Mobile version: ${this.getVersionNum()} 
    Is the app an Android? ${this.getIsAndroid()}
    Mobile Memory used: ${useMemo}    
    Mobile Memory size: ${this.getMemorySize()}    
    Any apps? ${this.apps.length} ${appsInfo}
    `;
  }

  public installApp(app: Application): boolean {
    if (app.getAppSize() + this.memoryUsed() > this.getMemorySize()) {
      console.log(`Cannot add app`);
      return false;
    } else {
      this.apps.push(app);
      return true;
    }
  }

  public memoryUsed(): number {
    let useMemo = 0;
    this.apps.forEach((app) => {
      useMemo += app.getAppSize();
    });
    return useMemo;
  }
}

export default Mobile;
