
// for other class if they want to be argument to 'addMarker'
export interface Mappable {
    location : {
        lat:number,
        lng:number
    }

    markerContent():string
    color:string
}



export class CustomMap {
    private googleMap: google.maps.Map;
    constructor (divId:string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
            zoom:1,
            center: {
                lat:0,
                lng:0
            }
        });
    }

    //---- bad code its a duplicate code for company
    
    // one solution to add muliplte arg type option 
    //      but due to this we wont be able to access all elements from mappable because of ts interpretation like user name or company name

    // addUserMarker( mappable:User | Company):void{
    //     new google.maps.Marker ({
    //         map: this.googleMap,
    //         position:{
    //             lat:mappable.location.lat,
    //             lng:mappable.location.lng
    //         }
    //     })
    // }

    
    // addCompanyMarker(company:Company):void{
        //     new google.maps.Marker ({
            //         map: this.googleMap,
            //         position:{
                //             lat:company.location.lat,
                //             lng:company.location.lng
                //         }
                //     })
                // }
                
    // so better option is to add interface from mappable which checks if class has locaiton object in it.
    
    // --- good approach 
    addMarker (mappable:Mappable):void {
        const marker = new google.maps.Marker({
            map:this.googleMap,
            position:{
                lat:mappable.location.lat,
                lng:mappable.location.lng
            }
        })
        marker.addListener('click', ()=>{
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            })
            infoWindow.open(this.googleMap, marker)
        })




    }
}   