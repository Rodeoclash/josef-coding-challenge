var _ = require('lodash')
var fp = require('lodash/fp');
const rule = require('./rule.js');

const OP = {
  ALL: 'ALL',
  ANY: 'ANY',
}

const checkCurrentGroup = (ruleGroup, checkUsersAnswers) => {
  if (ruleGroup.logic === OP.ALL) {
    return fp.every(checkUsersAnswers)(ruleGroup.rules)
  }

  if (ruleGroup.logic === OP.ANY) {
    return fp.some(checkUsersAnswers, ruleGroup.rules)
  }
}

/**
 * Checks the current groups rules and will recurse into any child rule groups if present.
 */
const checkGroupMaybeNested = (ruleGroup, checkUsersAnswers) => {
  const currentGroupPasses = checkCurrentGroup(ruleGroup, checkUsersAnswers)

  if (fp.isArray(ruleGroup.ruleGroups) && ruleGroup.ruleGroups.length > 0) {
    return currentGroupPasses && fp.every((innerRuleGroup) => {
      return checkGroupMaybeNested(innerRuleGroup, checkUsersAnswers)
    }, ruleGroup.ruleGroups)
  } else {
    return currentGroupPasses
  }
}

const checkGroup = (ruleGroup, userAnswers) => {
  const checkUsersAnswers = _.partialRight(rule.checkRule, userAnswers)
  return checkGroupMaybeNested(ruleGroup, checkUsersAnswers)
}

module.exports = {
  OP,
  checkGroup
}
