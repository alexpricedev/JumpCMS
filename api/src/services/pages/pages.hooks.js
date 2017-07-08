const { authenticate } = require('feathers-authentication').hooks;
const { setNow } = require('feathers-hooks-common');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [ authenticate('jwt'), setNow('createdAt', 'updatedAt') ],
    update: [ authenticate('jwt'), setNow('updatedAt') ],
    patch: [ authenticate('jwt'), setNow('updatedAt') ],
    remove: [ authenticate('jwt') ]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
