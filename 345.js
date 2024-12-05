let obj1={
    a:"html",
    b:function(x,y){
        console.log(`hello`,this.a,this.b,x,y);
        
    },
let obj2={
        a:"hello"
        b:"welcome"

    }
    obj1.b.call(obj2,"10kcoders","ert")
}