import { AbstractControl, ValidatorFn } from "@angular/forms";
import { ValidatorPhoneService } from "src/app/Service/ValidatePhone";

export function phoneValidator(): ValidatorFn{
    return (
        control: AbstractControl
    ): {
        [key: string]: boolean
    } | null => {
        let validator = new ValidatorPhoneService()
        let valid = !control.value || validator.validatePhone(control.value);
        return valid ? null : { phone: true }
    }
}