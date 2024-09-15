import React from 'react';
import HyperLink from './HyperLink';
import type { Link } from '../../types/Link';
import { routes } from '../../constants/routes';

const Greeting = (): React.ReactElement => {
  const projectsLink: Link = {
    url: `${routes.projects.path}/`,
  };

  const blogLink: Link = {
    url: `${routes.blog.path}/`,
  };

  const projectsLinkElement = (
    <span className="inline-block">
      <HyperLink link={projectsLink} className="underline font-semibold">projects</HyperLink>
    </span>
  );

  const blogLinkElement = (
    <span className="inline-block">
      <HyperLink link={blogLink} className="underline font-semibold">articles</HyperLink>
    </span>
  );

  return (
    <p className="font-light">
      Hi everyone! I’m Hào. After earning my master’s degree in Applied Mathematics in France, I returned to Vietnam to continue my career and passion for AI and Mathematics. I’m very enthusiastic about AI, both as a researcher and as an engineer building products. Currently, I work full-time as a AI Engineer at Spartan and part-time as a researcher for the International Society of Data Scientists on weekends. Both roles are remote in the US. 
  
      In my spare time, I love working on {projectsLinkElement} hands-on applied AI projects and exploring the mathematics behind them to share knowledge and help others learn. I also work on other {projectsLinkElement} focusing on Python syntax and Data Science. 
  
      Additionally, I write {blogLinkElement} about my life, my experiences studying abroad, living in big cities, and my time spent in my hometown. Nice to meet you all!
    </p>
  );
};

export default Greeting;
