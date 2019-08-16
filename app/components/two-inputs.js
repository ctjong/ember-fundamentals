import Component from '@ember/component';
import { computed } from '@ember/object';

const StringKey = 'str'

export default Component.extend({
  upperStr: computed(StringKey, {
    get() {
      return this.get(StringKey).toUpperCase()
    },
    set(key, newUpperStr) {
      this.set(StringKey, newUpperStr.toLowerCase())
      return newUpperStr;
    }
  })
});
