var award_config = {
    "award01": 1,
    "award02": 3,
    "award03": 6,
    "award04": 20
};

if (!localStorage.getItem('award_initial')) {
    var award_str = JSON.stringify(award_config);
    localStorage.setItem('award_initial', award_str);
}