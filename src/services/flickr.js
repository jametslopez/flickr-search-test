export const flickrData = async (tags) => {
  if (!tags) {
    return [];
  }
  const apiKey = "2d215fa217113f4accf29356326b1a4f";
  const extras =
    "description,+ license,+ date_upload,+ date_taken,+ owner_name,+ icon_server,+ original_format,+ last_update,+ geo,+ tags,+ machine_tags,+ o_dims,+ views,+ media,+ path_alias,+ url_sq,+ url_t,+ url_s,+ url_q,+ url_m,+ url_n,+ url_z,+ url_c,+ url_l,+ url_o";

  const url = `https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=${apiKey}&tags=${encodeURI(
    tags
  )}&page=1&per_page=15&format=json&nojsoncallback=1&extras=${extras}`;

  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const { photos } = await response.json();
  return photos.photo.map((item) => {
    return {
      title: item.title,
      author: item.ownername,
      tags: item.tags.split(" "),
      imageLarge: item.url_l,
      imageThumbnail: item.url_q,
      dateTaken: item.datetaken,
    };
  });
};
