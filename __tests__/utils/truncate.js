const {sequelize} = require('../../src/app/models');
module.exports = () => {
    return Promise.all(
        Object.keys(sequelize.models).map(Key => {
            return sequelize.models[Key].destroy({
                truncate:true,force:true
            });
        })
    );
}