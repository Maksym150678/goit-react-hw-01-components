const Statistics = ({title, stats}) => {
    return (
<section className="statistics">
 {title ?
    <h2 className="title">Upload stats</h2>: null}
  <ul className="stat-list">
  {stats.map(item => (
        <li key={item.id}>
          {item.label} {item.percentage}
        </li>
      ))}
  </ul>
</section>
);
}

export default Statistics;



