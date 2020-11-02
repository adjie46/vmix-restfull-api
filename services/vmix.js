const xml2js = require('xml-js').xml2js;
const config = require('../config/config');
const fetch = require('node-fetch');
const https = require('http');

const vmixLoadTimeout = 4000;

const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
});

exports.getDataVmix = (req, res) => {
    fetch('http://localhost:8088/api', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/xml'
            },
            agent: httpsAgent
        }).then(res => res.text())
        .then(json => {

            let vmixAPIObject = xml2js(json, {
                trim: true,
                compact: true,
                spaces: 0,
                textKey:"text",
                attributesKey: "attributes"
            });

           res.json(vmixAPIObject)
        });
}