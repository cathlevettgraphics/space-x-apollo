import { useQuery, gql } from '@apollo/client';
import PastLaunch from './PastLaunch';

const SPACE_X_LAUNCHES_PAST = gql`
  query GetLaunchesPast {
    launchesPast(limit: 10) {
      mission_name
      launch_date_utc
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

  return (
    <section>
      <ul>
        {data.launchesPast.map(
          ({
            mission_name,
            launch_date_utc,
            launch_site,
            links,
            rocket,
            ships,
          }) => (
            <PastLaunch
              key={mission_name}
              data={data}
              mission_name={mission_name}
              launch_date_utc={launch_date_utc}
              launch_site={launch_site}
              rocket={rocket}
              links={links}
              ships={ships}
            />
          ),
        )}
      </ul>
    </section>
  );
}

export default PastLaunches;
