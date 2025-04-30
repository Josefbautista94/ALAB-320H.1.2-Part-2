export default function Article({ date, title, image, alt }) {
  return (
    <article>
      <p className="date">{date}</p>
      <h3>{title}</h3>
      <img src={image} alt={alt} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quidem deserunt
        nemo dignissimos fuga veniam inventore eligendi magnam aperiam odit mollitia
        cupiditate eveniet velit officiis magni aliquid, laborum dolor? Quasi? Veniam amet
        rerum ducimus est ea at neque alias. Temporibus perspiciatis at impedit voluptas
        aut...
      </p>
      <a href="#" className="read-more">Continues ...</a>
    </article>
  );
}
