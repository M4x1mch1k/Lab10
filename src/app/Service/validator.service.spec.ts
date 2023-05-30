import { TestBed } from "@angular/core/testing";
import { ValidateEmail } from "./ValidateEmail";

describe('ValidateEmail', () => {
    let validateEmail: ValidateEmail;
  
    beforeEach(() => {
      TestBed.configureTestingModule({})
      validateEmail = TestBed.inject(ValidateEmail);
    });
    
    it('should be created', () => {
        expect(validateEmail).toBeTruthy();
    });

    it('should validate if an email is correct', () => {
      expect(validateEmail.validate_email('test@example.com')).toBe(true);
    });
  
    it('should fail if an email is incorrect', () => {
      expect(validateEmail.validate_email('testexample.com')).toBe(false);
    });
  });