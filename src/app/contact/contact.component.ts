import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  labol:string="";
  write1:boolean=false;
  write2:boolean=false;
  write3:boolean=false;
  write4:boolean=false;
  laboldisplay1(inpot1:HTMLInputElement):void{
    if(inpot1.value=='')
      this.write1=false;
    else
    this.write1=true;
  }
  laboldisplay2(inpot2:any):void{
    if(inpot2.value=='')
      this.write2=false;
    else
    this.write2=true;
  }
  laboldisplay3(inpot3:any):void{
    if(inpot3.value=='')
      this.write3=false;
    else
    this.write3=true;
  }
  laboldisplay4(inpot4:any):void{
    if(inpot4.value=='')
      this.write4=false;
    else
    this.write4=true;
  }

}
