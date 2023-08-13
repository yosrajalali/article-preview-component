const ImageContainer = (props) => {
  const { imageSrc, imageAlt } = props;
  return (
    <div className="imageContainer">
      <img className="drawerImg" src={imageSrc} alt={imageAlt} />
    </div>
  );
};

export default ImageContainer;
