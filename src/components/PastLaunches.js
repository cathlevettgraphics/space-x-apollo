import { useQuery, gql } from '@apollo/client';

const SPACE_X_LAUNCHES_PAST = gql`
  query GetLaunchesPast {
    launchesPast(limit: 10) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
        mission_patch
        flickr_images
      }
      rocket {
        rocket_name
      }
      ships {
        name
        home_port
        image
      }
    }
  }
`;

function PastLaunches() {
  const { loading, error, data } = useQuery(SPACE_X_LAUNCHES_PAST);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error: :(</p>;

  return data.launchesPast.map(
    ({
      mission_name,
      launch_date_local,
      launch_site,
      links,
      rocket,
      ships,
    }) => (
      <div key={mission_name}>
        <img src={links.mission_patch} alt="" width="100" />
        <h2>{mission_name}</h2>
        <p>{launch_date_local}</p>
        <p>{launch_site.site_name_long}</p>
        <a href={links.article_link}>Read more ...</a>
        <a href={links.video_link}>Rewatch the launch</a>
        <div>
          <p>Support ships: </p>
          {ships.map((ship) => (
            <div key={ship.name}>
              <img src={ship.image} alt="" width="250" />
              <p>
                {ship.name}, {ship.home_port}
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
  );
}

export default PastLaunches;
