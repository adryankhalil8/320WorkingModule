export default function Nav({ links, ariaLabel, navClass }) {
  return (
    <nav aria-label={ariaLabel} role="navigation" className={navClass}>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
