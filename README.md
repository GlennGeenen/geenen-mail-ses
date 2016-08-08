# Geenen Mail SES service

This is a geenen-mail service for sending emails with SES.

## Install

```
npm i geenen-mail-ses --save
```

## Options

http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SES.html#constructor-property

## Example

This example uses the geenen-mail-aws service.

```
server.register({
  register: require('geenen-mail'),
  options: {
    service: require('geenen-mail-aws'),
    options: {
      region: 'eu-west-1',
      accessKeyId: 'accesskey',
      secretAccessKey: 'secretkey'
    }, // Options from the service
    path: `${__dirname}/../templates`, // Required, templates directory
    route: {
      path: '/my/mail/path', // Default /mail
      cors: true, // Default false
      auth: 'myAuth' // Default none
    }, // Optional, will add route to server when defined
    from: 'Glenn Geenen <glenn@geenentijd.be>' // Required, from fallback
    templates: [{
      name: 'contact', // Required, should be name of the hbs file
      subject: 'Contact Form', // Required, subject fallback
      schema: Joi.object({
        message: Joi.string().required()
      }), // Optional, joi validation schema
    }]
  }
});
```
