export interface IConfig{
  processor?: string;
  memory?: number;
}

export class Config implements IConfig{
  constructor(public processor?: string, public memory?: number){}
}

export interface ILaptop {
  id?: number;
  model?: string;
  brand?: string;
  mfgYear?: number;
  config?: IConfig;
}

export class Laptop implements ILaptop {
  constructor(public id?: number, public model?: string, public brand?: string, public mfgYear?: number, public config?: IConfig) {}
}