import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
})
export class ValidateEmail {
    validate_email(value: string): boolean{
        const pattern = /^(.+)@(.+)$/

        return pattern.test(value);
    }

    constructor() {}
}