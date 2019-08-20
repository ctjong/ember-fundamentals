import Route from '@ember/routing/route';

export default Route.extend({
  model()
  {
    return fetch("https://api.mike.works/api/v1/courses").then(async response =>
    {
      const data = await response.json()
      return data.data.map(item => (
        {
          title: item.attributes.title,
          summary: item.attributes.summary,
          'image-info': item.attributes['image-info']
        }
      ));
    });
  }
});
