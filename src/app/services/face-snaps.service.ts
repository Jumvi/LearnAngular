import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { error } from "console";

@Injectable({
    providedIn:'root'
})

export class FaceSnapServices {
    private faceSnap:FaceSnap[] = [
        new FaceSnap(
            'mon snap',"https://img.freepik.com/photos-premium/famille-du-secteur-agricole-recueillant-legumes-dans-son-jardin-biologique-concept-alimentaire-frais_592794-3124.jpg?w=740",
            'ma description',
            new Date(),
            10
          ),
          new FaceSnap(
            'deuxieme Snap',
            "https://img.freepik.com/photos-gratuite/jardinier-dans-tablier-guy-africain-dans-serre-fleurs-dans-pot_1157-47084.jpg?size=626&ext=jpg&uid=R79722685&ga=GA1.1.2053009138.1718194973&semt=ais_user",
            'deuxième description',
            new Date(),
            5
          ),
          new FaceSnap(
            'troisième Snap',
            "https://img.freepik.com/photos-gratuite/jardinier-dans-tablier-guy-africain-dans-serre-fleurs-dans-pot_1157-47084.jpg?size=626&ext=jpg&uid=R79722685&ga=GA1.1.2053009138.1718194973&semt=ais_user",
            'troisième description',
            new Date(),
            8
          )
    ]

    getFaceSnaps():FaceSnap[]{
        return [...this.faceSnap]
    }

    snapFaceSnapById(faceSnapId:number):void{
        const foundFaceSnap:FaceSnap  | undefined= this.faceSnap.find((faceSnap:FaceSnap) =>faceSnap.id === faceSnapId);

        if (!foundFaceSnap) {
            throw new Error ('Snap not found');
        }

        foundFaceSnap.addSnap();

    }
}