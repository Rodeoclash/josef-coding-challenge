var fp = require('lodash/fp');

const OP = {
  CONTAINS: 'CONTAINS',
  IS: 'IS',
  IS_NOT: 'IS_NOT',
}

const hasAnswer = (question, userAnswers) => {
  return fp.has(question, userAnswers)
}

const getAnswer = (question, userAnswers) => {
  return fp.get(question, userAnswers)
}

const checkAnswer = (rule, userAnswers) => {
  answer = getAnswer(rule.question, userAnswers)

  if (rule.operation === OP.IS) {
    return answer === rule.answer;
  } else if (rule.operation === OP.IS_NOT) {
    return answer !== rule.answer;
  } else if (rule.operation === OP.CONTAINS) {
    return fp.includes(rule.answer)(answer);
  } else {
    throw new Error('Unknown operation');
  }
}

const checkRule = (rule, userAnswers) => {
  if (hasAnswer(rule.question, userAnswers) === false) {
    return false;
  }

  return checkAnswer(rule, userAnswers)
}

module.exports = {
  OP,
  checkAnswer,
  checkRule,
  getAnswer,
  hasAnswer,
}
