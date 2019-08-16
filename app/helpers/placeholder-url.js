import { helper } from '@ember/component/helper';

export default helper(function placeholderUrl(params, { w, h }) {
    h = h === undefined ? 120 : (h < 10 ? 10 : h)
    w = w === undefined ? 100 : (w < 10 ? 10 : w)
    return `http://placekitten.com/${w}/${h}`;
});
