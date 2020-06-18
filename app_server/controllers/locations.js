/* GET 'Home'  page*/
const homelist = (req,res) => {
    res.render('location-list',{title:'Home'});
};
/* GET 'Location info'  page*/
const locationInfo = (req,res) => {
    res.render('location-info',{title:'Location Info'});
};
/* GET 'Add view'  page*/
const addReview = (req,res) => {
    res.render('location-review-form',{title:'Add Review'});
};

module.exports = {
    homelist,
    locationInfo,
    addReview
};