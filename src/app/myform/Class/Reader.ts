export class Reader {
    reader_id: string = ""
    name: string = ""
    address: string = ""
    phone: string = ""
    email: string = ""
    books_read: string[] = []
    constructor(reader_id: string, name: string, address: string, phone: string, email: string, books_read: string[]){
        this.reader_id = reader_id
        this.name = name
        this.address = address
        this.phone = phone
        this.email = email
        this.books_read = books_read
    }
}