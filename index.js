'use strict';

let ses;

const configure = function (options, callback) {

  // Options: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SES.html#constructor-property

  // Only load for setup
  const AWS = require('aws-sdk');
  ses = new AWS.SES(options.options);
  callback();
};

const sendMail = function (email, callback) {

  const params = {
    Source: email.from,
    Destination: {
      ToAddresses: email.recipients
    },
    Message: {
      Subject: {
        Data: email.subject,
        Charset: 'UTF-8'
      },
      Body: {}
    },
    ReplyToAddresses: email.replyTo,
    ReturnPath: email.returnPath
  };

  if (email.text) {
    params.Message.Body.Text = {
      Data: email.text,
      Charset: 'UTF-8'
    };
  }

  if (email.html) {
    params.Message.Body.Html = {
      Data: email.html,
      Charset: 'UTF-8'
    };
  }

  ses.sendEmail(params, callback);
};

module.exports = {
  configure,
  sendMail
};
