/// <reference types="@types/google.maps" />
import {User} from './User';
import { Company } from './Company';

new google.maps.Map(document.getElementById('map') as HTMLElement, {
    zoom:5,
    center: {
        lat:0,
        lng:0
    }
});