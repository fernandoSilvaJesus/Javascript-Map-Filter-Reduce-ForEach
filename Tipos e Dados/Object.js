/*
Um objeto tem:
----> Proiedades e atributos
----> Funcionalidades e metodos

{propriedade: 'Valor'}

Objetos no mundo real:
> Um celular, tem propiedades, altura, largura, cor, tamanho etc...
> Todo celular tem funcionalidades, por exemplo ligar celular, e isso dentro de obejtos são chamados de metodos

Objetos são  dados estruturais, todos os dados dentro dele estão estruturados.


*/

const celular = {
  name: "Samsung",
  ano: 2022,
  ligar: function () {
    console.log("Ligou");
  },
  desligar: function () {
    console.log("Desligou");
  },
};
