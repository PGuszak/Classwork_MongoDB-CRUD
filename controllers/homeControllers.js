var courses = [ //later will be in the DB
    {
        title: "Raspberry Cake",
        cost: 50,
    },
    {
        title: "Artichoke",
        cost: 20,
    },
    {
        title: "Burger",
        cost: 100,
    },
]

//made templates for routes 
exports.showCourses = (req, res) => {
    res.render("courses", {offeredCourses: courses});
}

exports.showSignUp = (req, res) => {
    res.render("contact"); 
}

exports.postedSignUpForm = (req, res) => {
    res.render("thanks");
}

exports.showHome = (req, res) => {
    res.render("home"); //loads the ejs file with this name
}