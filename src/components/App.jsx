import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';

import user from '../data/user.json';
import data from '../data/data.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};

export const statList = ({ statistics }) => (
  <section>
    <Statistics title="Upload stats" stats={data} />
  <Statistics stats={data} />
  <ul>
    {statistics.map(item => (
      <li key={item.id}>
        {item.label} {item.percentage}
      </li>
    ))}
  </ul>
  </section>
);


  

