import { helper } from '@ember/component/helper';

const TruncateLength = 150

export default helper(function truncate(params) {
  const str = params[0]
  if (!str) return ""
  return str.length <= TruncateLength ? str : `${str.substring(0, TruncateLength)}...`
});
