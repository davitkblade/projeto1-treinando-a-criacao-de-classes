// criando as primeiras classes
class User {
    constructor(fullname, passaword,email){
      this.fullname = fullname;
      this.password= passaword;
      this.email = email;
    }

login(email, password) {
    if (this.email ===email && this.passwrod === password) {
        console.log("Login bem-sucedido");
    } else {
        console.log("Email ou senha estão incorretos, reveja por-favor!");
    }
}
}
const user = new User('Davi', 'davisousa@gmail', 'goleirodark9')
        