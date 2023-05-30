import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Reader } from '../myform/Class/Reader';
import { ValidateEmail } from '../Service/ValidateEmail';
import { ValidatorPhoneService } from '../Service/ValidatePhone';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.scss'],
})
export class UpdateformComponent implements OnInit {

  @Input() reader!: Reader;
  @Input() show: boolean = true;
  @Output() readerChange: EventEmitter<Reader> = new EventEmitter<Reader>();
  @Output() showChange = new EventEmitter();
  constructor() { }

  validate_phone(p: string): boolean {
    let validator = new ValidatorPhoneService();

    if (p) {
      if (!validator.validatePhone(p)) return false;
      else return true;
    }
    else return true;

  }

  validate_email(a: string): boolean {
    let validator = new ValidateEmail()

    if (a) {
      if (!validator.validate_email(a)) return false;
      else return true;
    }
    else return true;

  }

  save(id: any, name: any, address: any, phone: any, email: any) {


    this.show = false;
    if (!(this.validate_phone(phone) && this.validate_email(email))) {
      console.log(phone)
      console.log(email)
      throw Error("phone or email error")
    }
    this.reader = new Reader(id, name, address, phone, email, this.reader.books_read)
    this.readerChange.emit(this.reader);
    this.showChange.emit(this.show)
  }

  ngOnInit() { }

}