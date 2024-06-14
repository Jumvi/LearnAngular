import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { FaceSnapServices } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snape',
  standalone: true,
  imports: [NgStyle,NgClass,UpperCasePipe,DatePipe],
  templateUrl: './face-snape.component.html',
  styleUrl: './face-snape.component.scss'
})
export class FaceSnapeComponent implements OnInit {

  @Input() faceSnap!:FaceSnap;
  
    isSnap!:boolean;
    btnName!:string;

    constructor(private faceSnapService:FaceSnapServices){

    }
    ngOnInit(): void {

        this.isSnap = true;
        this.btnName ="oh Snap";
    };

    onAddSnap(){
      if (this.isSnap) {
        this.faceSnapService.snapFaceSnapById(this.faceSnap.id);
        this.isSnap=false;
        this.btnName ="oh unSnap"
      }else{
        this.faceSnap.removeSnape();
        this.isSnap = true;
        this.btnName ="oh snap"
      }

      
    };

    
}
