const tokenCleanupScheduler = require("./tokenCleanupScheduler");
const environmentScoreScheduler = require("./environmentScoreScheduler");
const decrementEnvironmentScoreScheduler = require("./decrementEnvironmentScoreScheduler");

// 스케줄러 작업 시작
const startSchedulers = () => {
  tokenCleanupScheduler.startTokenCleanupJob();
  environmentScoreScheduler.startEnvironmentScoreJob();
  decrementEnvironmentScoreScheduler.startDecrementEnvironmentScoreJob();
};

module.exports = { startSchedulers };
