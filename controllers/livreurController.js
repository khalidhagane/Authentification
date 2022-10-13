
//method get 
// url : /api/livreur/me
// acess : public
const Livreur = (req , res) => {
    res.status(200).send("I'am livreur");
};

module.exports = {Livreur};