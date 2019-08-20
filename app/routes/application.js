import Route from '@ember/routing/route';

export default Route.extend({
  model()
  {
    return fetch("https://api.mike.works/api/v1/courses")
      .then(response => response.json())
      .then(async json =>
      {
        return json.data.map(item => (
          {
            title: item.attributes.title,
            summary: item.attributes.summary,
            slug: item.attributes.slug,
            'image-info': item.attributes['image-info']
          }
        ));
      });
  }
});
