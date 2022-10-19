import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'vuela'
})
export class VuelaPipe implements PipeTransform {
    
    transform(value: boolean): string {

        // if( enMayusculas){
        // return value.toUpperCase();
        // } else {
        //     return value.toLocaleLowerCase();
        // }

        //Con un ternario sería
        return ( value )
            ? 'vuela'
            : 'no vuela';
    }



}