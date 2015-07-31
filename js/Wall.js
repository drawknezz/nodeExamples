var Wall = function(number){
    this.addBottles(number);
};

Wall.prototype = {
    bottles: 0,
    addBottles: function(n){
        if(/^([0-9]+)$/.test(n)){
            if(+n > 0){
                this.bottles += n;
            }
        }
    },
    subtractBottles: function(n){
        if(/^([0-9]+)$/.test(n)){
            this.bottles -= n;
        }
    }
};