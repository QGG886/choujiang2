var award_config = {
    "award01": 1,
    "award02": 2,
    "award03": 1,
    "award04": 0
};

if (!localStorage.getItem('award_initial')) {
    var award_str = JSON.stringify(award_config);
    localStorage.setItem('award_initial', award_str);
}