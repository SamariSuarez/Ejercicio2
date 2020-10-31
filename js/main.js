var app = new Vue ({
  el: '#app',
  data: {
    hours:0,
  },
  methods: {
    validate:function(){
      var basic=520000;
      var valuExtra=5800;
      var result=0;
      var result1=0

      if(this.hours>8){
     result=(this.hours-8)
     result1=(result*valuExtra)+(basic)
     alert("El salario a pagar es de $"+result1+".")
      }
     else if(this.hours<=8)
     alert("El salario a pagar es de $"+ basic+".")
  }
    }
})