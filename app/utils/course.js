import EmberObject from '@ember/object'

const Course = EmberObject.extend({
    title: 'No Title',
    description: '',
    init() {
        this._super(...arguments);
        this.set('tags', []);
        this.set('languages', []);
    }
});

Course.reopenClass({
    _languageNames: {js: 'JavaScript'},
    languageName(key) {
        return this._languageNames[key] || 'Unknown'
    }
})

export default Course;