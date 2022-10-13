
//method get 
// url : /api/client/me
// acess : public
const Client = (req , res) => {
    res.status(200).send("I'am client");
};

module.exports = {Client};