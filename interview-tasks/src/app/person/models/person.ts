export class Person {

  public constructor(public surName: string, public lastName: string, public birthYear: number) {}

  public getAge(): number {
    const now = new Date().getFullYear();
    return now - this.birthYear;
  }

  public isAgePrime(): boolean {
    for(let i = 2; i < this.getAge(); i++){
      if(this.getAge() % i === 0) return false;
    }
    return true;
  }
}
