'use strict'

const request = require('request-promise');
const fs = require('fs');

const services = {
  pedestrians: {
    url: 'https://ie-pedestrian.run.aws-usw02-pr.ice.predix.io',
    zoneId: 'bf4d94b5-4c77-4e48-a808-42bcab9d32f5'
  },
  traffic: {
    url: 'https://ie-traffic.run.aws-usw02-pr.ice.predix.io',
    zoneId: 'a81cac54-4994-48ca-8180-b58108450b9d'
  },
  public_safety: {
    url:'https://ie-public-safety.run.aws-usw02-pr.ice.predix.io',
    zoneId:'f767ff5d-ab4d-4633-b1cf-5ff416016ae1' 
  },
  positioning: {
    url: 'https://ie-positioning.run.aws-usw02-pr.ice.predix.io',
    zoneId: 'da1e230b-a790-4dab-8428-37167b67cb18'
  },
  parking: {
    url: 'https://ie-parking.run.aws-usw02-pr.ice.predix.io',
    zoneId: 'a9bff88a-0f0d-4c3e-92fe-f25be68624b7'
  }
}

const auth = {
  url: 'https://6ffced61-7eb5-4c6d-95a1-842fb65e8af3.predix-uaa.run.aws-usw02-pr.ice.predix.io',
}

const fetch_uaa_token = (username, pass, service) => {
  const encodeCredentials = () => {
    return new Buffer(username + ':' + pass).toString('base64');
  }
  var options = {
    uri: auth.url + '/oauth/token?grant_type=client_credentials',
    headers: {
      'Authorization' : 'Basic ' + encodeCredentials(),
      'Predix-Zone-Id': services[service].zoneId
    },
    json: true
  };
  return request(options);
}

const format_headers = (token, service) => {
  return {
    uri: services[service].url,
    headers: {
      'Authorization' : 'Bearer ' + token,
      'Predix-Zone-Id': services[service].zoneId
    }
  };
};

module.exports = {
  fetch_uaa_token: fetch_uaa_token,
  format_headers: format_headers
};