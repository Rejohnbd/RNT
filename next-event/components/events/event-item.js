import Link from "next/link";

import classes from "./event-item.module.css";

function EventItem(props) {
  const { title, image, date, location, id } = props;

  const humanReadableDAte = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{humanReadableDAte}</time>
          </div>
          <div className={classes.action}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <Link href={exploreLink}>Explode Event</Link>
      </div>
    </li>
  );
}

export default EventItem;
