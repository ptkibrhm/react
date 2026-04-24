const Course = ({ course }) => {
  const { id, title, description, price, link, image } = course;
  return (
    <div className="course">
      <div>
        <img src={image} width={200} height={130} />
        <h4 className="course-title">{title}</h4>
        <h5 className="course-desc">{description}</h5>

        <div className="course-footer">
          <h3 className="course-price">{price} ₺</h3>
          <a className="course-link" href={link}>Satın almak için</a>
        </div>

      </div>
    </div>
  );
};

export default Course;
