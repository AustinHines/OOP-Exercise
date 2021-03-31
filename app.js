const mulan = {
    title: `mulan`,
    main: `Fa Mulan`,
    quote: function(){
        return `Dishonor! Dishonor on your whole family!`
    },
    storyLine: function() {
       return this.title + "&" + this.main
    }
}

const tangled = {
    title: `Tangled`,
    main: `Rapunzel`,
    quote: function() {
        return `I can't believe I did this! I can't believe I did this! I have to go home! I am never going back! I'm a horrible daughter! BEST DAY EVER!`
    },
    storyLine: function() {
        return this.title + "&" + this.main
    }
}

function DisneyMovie(title, main){
    this.title = title;
    this.main = main;
}

// DisneyMovie.prototype.storyLine = function() {
//     this.main,
//     this.title
// }

const mulan1 =  new DisneyMovie(`mulan`, `Fa Mulan`, `Dishonor! Dishonor on your whole family!` )

const tangeld1 = new DisneyMovie(`tangled`, `rapunzel`,`I can't believe I did this! I can't believe I did this! I have to go home! I am never going back! I'm a horrible daughter! BEST DAY EVER!` )

const DM = (title, main) => {
    this.title = title,
    this.main = main
}
    
    


// DM.prototype.storyLine  = function(){
//     this.main
//     this.title
// }

const mulan2 = new mulan(`mulan`, `Fa Mulan`,)
