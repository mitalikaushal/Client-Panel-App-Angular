import { Injectable } from '@angular/core';
import { Setting } from '../models/Setting';

@Injectable()
export class SettingsService {
setting: Setting = {
  allowRegisteration:false,
  disabledBalanceAdd: true,
  disabledBalanceEdit:true
}
  constructor() { }
  getSetting(){
    return this.setting;
  }
}
