const Section = ({ category, images }) => {
  return (
    <div className="container">
      <p className="category">{category}</p>
      <div className="images">
        {images.map((img, index) => {
          return <img key={index} src={img} />;
        })}
      </div>
    </div>
  );
};
export default Section;
