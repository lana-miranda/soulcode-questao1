import { LightningElement } from "lwc";

export default class App extends LightningElement {
  name = "Lana Souza";
  phone = "3030-1616";
  cpf = "000.000.000-00";
  age = 33;

  email = "lana@gmail.com";
  instagram = "lanavbz";
  twitter = "lanavbz";
  visible = true;

  

toggleVisibility(){
  this.visible = !this.visible;
}

changeData(){
  this.name = "Souza";
  this.phone = "3036-1617";
  this.cpf = "000.000.000-10";
  this.age = 30;


  }

}