const store = (req,res) => {
    console.log(req.body);
    return res.status(200).send();
}

module.exports = { store }