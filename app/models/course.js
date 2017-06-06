import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  slug: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  summary: DS.attr('string'),
  stages: DS.hasMany('course-stage'),

  'image-info': DS.attr()
});
