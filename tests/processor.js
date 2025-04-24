module.exports = {
  randomMessage: function (userContext, events, done) {
    // 1~1000 사이 랜덤 정수 생성
    const x = Math.floor(Math.random() * 1000) + 1;
    userContext.vars.message = `kafka queue 동시요청 테스트 by 라모스 - ${x}`;
    return done();
  }
};