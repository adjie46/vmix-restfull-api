const vmixBuilder = require('../services/vmix');

module.exports = app => {
    app
        .route('/api/vmix')
        .get(vmixBuilder.getDataVmix);
};