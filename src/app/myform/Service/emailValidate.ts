import { AbstractControl, ValidatorFn } from "@angular/forms";
import { ValidateEmail } from "src/app/Service/ValidateEmail";

export function emailValidator(): ValidatorFn{
    return (
        control: AbstractControl
    ): {
        [key: string]: boolean
    } | null => {
        let validator = new ValidateEmail()
        let valid = !control.value || validator.validate_email(control.value);
        return valid ? null : { email: true }
    }
}