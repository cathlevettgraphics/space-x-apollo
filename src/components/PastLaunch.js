import styled from 'styled-components';
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
      // weekday: 'long',
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
      {/* Only render mission if there is a logo */}
      {links.mission_patch !== null ? (
        <>
          <MissionWrapper>
            <MissionTitle>
              <MissionLogo src={links.mission_patch} alt="" />
              <div>
                <LaunchDate>
                  {convertDateToReadable(launch_date_utc)}
                </LaunchDate>
                <MissionName>{mission_name}</MissionName>
              </div>
            </MissionTitle>

            <LaunchImageWrapper>
              {links.flickr_images.length ? (
                <LaunchImage src={links.flickr_images} alt="" />
              ) : undefined}
            </LaunchImageWrapper>
            <LaunchLocation>
              Launched from {launch_site.site_name_long}
            </LaunchLocation>
            {/* <p>Rocket used: {rocket.rocket_name}</p> */}
          </MissionWrapper>
          <LinkWrapper>
            <Link href={links.article_link}>💻 Read</Link>
            <Link href={links.video_link}>🚀 Watch</Link>
          </LinkWrapper>
        </>
      ) : null}
      {/* <SupportShips ships={ships} /> */}
    </li>
  );
};

const MissionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  --max-width: 343px;
  max-width: var(--max-width);
  margin: 0 auto;
`;
const MissionTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 16px;
`;

const MissionLogo = styled.img`
  width: 25%;
  margin-right: 16px;
`;
const MissionName = styled.h2`
  color: hotpink;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: -1px;
  margin-bottom: 0;
`;

const LaunchDate = styled.p`
  font-size: 1.4rem;
  font-style: italic;
  color: grey;
  margin-bottom: 4px;
`;

const LaunchLocation = styled.p`
  max-width: var(--max-width);
  margin: 0 auto;
  margin-bottom: 16px;
`;

const LaunchImageWrapper = styled.div`
  /* background-color: hotpink; */
`;

const LaunchImage = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  filter: grayscale(40%) contrast(105%) brightness(133%);
  /* mix-blend-mode: multiply; */
  margin-bottom: 16px;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 343px;
  margin: 0 auto;
  margin-bottom: 40px;
`;

const Link = styled.a`
  width: 49%;
  border: 2px solid grey;
  padding: 8px 16px;
  margin: 0;
  text-transform: uppercase;
  text-align: center;
  font-weight: 800;
`;

export default PastLaunch;
