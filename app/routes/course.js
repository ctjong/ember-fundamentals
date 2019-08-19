import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.modelFor('application').filter(c => c.title === params.id)[0]
  }
});
