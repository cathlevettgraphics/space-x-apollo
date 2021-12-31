import SupportShips from './SupportShips';

const PastLaunch = ({
  data,
  mission_name,
  links,
  launch_date_utc,
  launch_site,
  rocket,
  ships,
}) => {
  const convertDateToReadable = (date) => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const launchDateActual = new Date(launch_date_utc);
    const dateReadable = launchDateActual.toLocaleDateString(
      undefined,
      options,
    );
    return dateReadable;
  };

  return (
    <li key={mission_name}>
      <div>
        <img src={links.mission_patch} alt="" width="100" />
        <h2>{mission_name}</h2>
        <p>{convertDateToReadable(launch_date_utc)}</p>
        {links.flickr_images.length ? (
          <img src={links.flickr_images} alt="" height="50" width="50" />
        ) : undefined}
        <p>{launch_site.site_name_long}</p>
        <p>Rocket used: {rocket.rocket_name}</p>
      </div>
      <div>
        <a href={links.article_link}>Read more ...</a>
        <a href={links.video_link}>Rewatch the launch</a>
      </div>
      <SupportShips ships={ships} />
    </li>
  );
};

export default PastLaunch;
