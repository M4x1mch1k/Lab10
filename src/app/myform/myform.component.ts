import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { Reader } from './Class/Reader';
import { Validators } from '@angular/forms';
import { phoneValidator } from './Service/phoneValidate';
import { emailValidator } from './Service/emailValidate';
import { ValidateEmail } from '../Service/ValidateEmail';
import { ValidatorPhoneService } from '../Service/ValidatePhone';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss'],
})

export class MyformComponent  implements OnInit {

  @Output() readerAdd: EventEmitter<Reader> = new EventEmitter<Reader>();
  readerForm!: FormGroup
  reader!: Reader

  
  constructor(private fb: FormBuilder) { 
    this.readerForm = this.fb.group({
      ReaderID: ['', [Validators.required]],
      ReaderName: ['', [Validators.required]],
      ReaderAddress: [''],
      ReaderPhone: ['', [phoneValidator()]],
      ReaderEmail: ['', [emailValidator()]],
      booksRead: new FormArray([new FormControl()]),
    })
  }

  addReadBooks(){
    console.log("New book has been read");
    (this.readerForm.controls['booksRead'] as FormArray).push(
      new FormControl()
    )
  }

  deleteBook(i: any){
    console.log("Deleting book");
    (this.readerForm.controls['booksRead'] as FormArray).removeAt(i)
  }

  getControls() { return (this.readerForm.get('booksRead') as FormArray).controls; }

  onSubmit() {
    let email = this.readerForm.value.ReaderEmail;
    let phone = this.readerForm.value.ReaderPhone;
    let readerid = this.readerForm.value.ReaderID;
    let name = this.readerForm.value.ReaderName;
    let address = this.readerForm.value.ReaderAddress;
    let readBooks = this.readerForm.value.booksRead;
    let validEmail = new ValidateEmail();
    let validPhone = new ValidatorPhoneService();

    if (validEmail.validate_email(email) && validPhone.validatePhone(phone)){
      this.reader = new Reader(readerid, name, address, phone, email, readBooks);
      console.log("Submit");
      console.log(this.reader);
      this.readerAdd.emit(this.reader)
    }else{
      alert("Incorrect input")
    }
  }

  ngOnInit() {}

}
