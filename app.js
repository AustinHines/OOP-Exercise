const mulan = {
    title: `mulan`,
    main: `Fa Mulan`,
    quote: function () {
        return `Dishonor! Dishonor on your whole family!`
    },
    storyLine: function () {
        return `the movie ${this.title} is about ${this.main}`
    }
};

const tangled = {
    title: `Tangled`,
    main: `Rapunzel`,
    quote: function () {
        return `I can't believe I did this! I can't believe I did this! I have to go home! I am never going back! I'm a horrible daughter! BEST DAY EVER!`
    },
    storyLine: function () {
        return `the movie ${this.title} is about ${this.main}`
    }
};

function DisneyMovie(title, main) {
    this.title = title;
    this.main = main;
}

DisneyMovie.prototype.storyLine = function () {
    return `the movie ${this.title} is about ${this.main}`
}

const mulan1 = new DisneyMovie(`mulan`, `Fa Mulan`)

const tangeld1 = new DisneyMovie(`tangled`, `rapunzel`)

class DM {
    constructor(title, main) {
        this.title = title,
            this.main = main
    }
    storyLine() {
        `the movie ${this.title} is about ${this.main}`;
    }
    static loveDisneyMovies() {
        return `I love Disney Movies`
    }
}

const mulan2 = new DM(`Mulan`, `Fa Mulan`)

const tangeld2 = new DM(`tangled`, `rapunzel`)

class DMCast extends DM {
    constructor(title, main, cast) {
        super(title, main);
        this.cast = cast
    }
}

const mulan3 = new DMCast(
    `Mulan`,
    `Fa Mulan`,
    {
        mulan: `Ming-Na Wen`,
        mushu: `Eddie Murphy`,
        shang: `BD Wong`,
        theEmperor: `Pat Morita`
    }
)

const tangeld3 = new DMCast(
    `tangeld`,
    `rapunzel`,
    {
        rapunzel: `Mandy Moore`,
         flynnRider: `Zachary Levi`,
          motherGothel: `Donna Murphy`
    }
)

const 











