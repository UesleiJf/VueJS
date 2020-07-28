new Vue({
    el: '#desafio',
    data: {
        nome: 'Ueslei',
        idade: 35,
        imagem: 'https://img2.gratispng.com/20180429/wuw/kisspng-umbrella-corps-resident-evil-4-resident-evil-7-bi-umbrella-vector-png-5ae6386bac4ca8.8334099615250371637057.jpg'
    },
     methods: {
         idadeVezes3(){
             return this.idade * 3
         },
         randon(){
             return Math.random()
         }
     }
})