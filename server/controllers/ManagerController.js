
//method get 
// url : /api/manager/me
// acess : public
const Manager = (req,res) => {
    // res.status(200).send(req.body)
    res.status(200).json({mssage:'I am manager '} )
}


module.exports = {Manager};