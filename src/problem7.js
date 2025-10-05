function problem7(user, friends, visitors) {
  var graph = {};
  for (var i = 0; i < friends.length; i++) {
    var a = friends[i][0];
    var b = friends[i][1];

    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }

  var userFriends = [];
  if (graph[user]) {
    for (var i = 0; i < graph[user].length; i++) {
      userFriends.push(graph[user][i]);
    }
  }
  var score = {};

  for (var i = 0; i < userFriends.length; i++) {
    var friend = userFriends[i];
    var fList = graph[friend] ? graph[friend] : [];

    for (var j = 0; j < fList.length; j++) {
      var person = fList[j];
      if (person === user) continue;
      var isUserFriend = false;
      for (var k = 0; k < userFriends.length; k++) {
        if (userFriends[k] === person) {
          isUserFriend = true;
          break;
        }
      }
      if (isUserFriend) continue;
      if (!score[person]) score[person] = 0;
      score[person] += 10;
    }
  }

  for (var i = 0; i < visitors.length; i++) {
    var v = visitors[i];
    if (v === user) continue;
    var isUserFriend = false;
    for (var k = 0; k < userFriends.length; k++) {
      if (userFriends[k] === v) {
        isUserFriend = true;
        break;
      }
    }
    if (isUserFriend) continue;
    if (!score[v]) score[v] = 0;
    score[v] += 1;
  }

  var keys = [];
  for (var key in score) {
    if (score[key] > 0) keys.push(key);
  }
  keys.sort(function (a, b) {
    if (score[b] !== score[a]) return score[b] - score[a];
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  return keys.slice(0, 5);
}

module.exports = problem7;
