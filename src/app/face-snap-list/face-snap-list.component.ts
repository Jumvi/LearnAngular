import { Component, OnInit } from '@angular/core';
import { FaceSnapeComponent } from '../face-snape/face-snape.component';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapServices } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnapeComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!:FaceSnap[];

  constructor(private faceSnapService:FaceSnapServices){

  }

  ngOnInit(): void {

      this.faceSnaps = this.faceSnapService.getFaceSnaps();

      this.faceSnaps[0].setLocation('à bandaka');
  }

}
