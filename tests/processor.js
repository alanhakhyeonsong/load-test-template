module.exports = {
  randomMessage: function (userContext, events, done) {
    const x = Math.floor(Math.random() * 1000) + 1;
    userContext.vars.message = `kafka queue 동시요청 테스트 by 라모스 - ${x}`;
    return done();
  }
};