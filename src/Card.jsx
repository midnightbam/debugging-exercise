function Card({ title, description, imageUrl }) {
  return (
    <article className="card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
export default Card;
