

export class FaceSnap {

    location?:string;
    id!:number;

    constructor(public title:string,
                public image:string,
                public description:string,
                public createdAt : Date,
                public snaps :number,

    ){
        this.id = Math.floor(Math.random()*10);
        console.log(this);
        
    }

    addSnap(){
        this.snaps++;
    }

    removeSnape(){
        this.snaps--;
    }

    setLocation(location:string):void{
        this.location =location;
    }
}