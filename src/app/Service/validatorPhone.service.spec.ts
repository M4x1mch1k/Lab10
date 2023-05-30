import { TestBed } from "@angular/core/testing";
import { ValidatorPhoneService } from "./ValidatePhone"; 

describe('ValidateEmail', () => {
    let validateEmail: ValidatorPhoneService;
  
    beforeEach(() => {
      TestBed.configureTestingModule({})
      validateEmail = TestBed.inject(ValidatorPhoneService);
    });
    
    it('should be created', () => {
        expect(validateEmail).toBeTruthy();
    });

    it('should validate if an phone is correct', () => {
      expect(validateEmail.validatePhone('080-534-76-34')).toBe(true);
    });
  
    it('should fail if an phone is incorrect', () => {
      expect(validateEmail.validatePhone('12331232132')).toBe(false);
    });
  });