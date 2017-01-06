# RBYA App Backend Service

## Dependencies
Sails is the only dependency required.

It can be installed using npm `npm install sails -g`

## Deployment
This code auto deploys `master` branch to https://rbya-development.herokuapp.com/

## To run locally:
1. Clone repo
2. Create file `config/local.js` with the contents:

  ```
    module.exports = {
        models: {
            connection: 'localDiskDb',
        }
    };
  ```
  This would force the service to use a local database rather than the remote mongo database

3. You can now sart the service with `sails lift` or run the tests with `npm test`
