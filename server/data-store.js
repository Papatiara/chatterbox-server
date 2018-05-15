var dataStore = {
  add: function(data) {
    data.objectId = (new Date).getTime(); // epoch time for guaranteed unique key
    data.createdAt = new Date();
    this._results.push(data);
  },
 getAll: function() { return {results: this._results}},
  _results: [{username: 'Jono', roomname: 'Lobby', text: 'Do my bidding!'}],
};

exports.dataStore = dataStore;