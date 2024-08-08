class User {
    constructor(fullname, password,email){
      this.fullname = fullname
      this.password = password
      this.email = email
    }
    login(email, password) {
        if (this.email === email && this.password === password) {
            console.log("o login foi um sucesso!")
        } else {
            console.log("as credenciais estão erradas, reveja!")
        }
    }
}

const user = new User(
  'Davi',
  'davisousa@gmail',
  'goleirodark9'
)
user.login('davisousa@gmail','goleirodark9')
        
