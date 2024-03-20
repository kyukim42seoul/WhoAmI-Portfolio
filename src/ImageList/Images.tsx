const Images = ({ photos }: { photos: Array<any> }) => {
  return (
    <>
      {photos.map((photo) => {
        return <img key={photo.id} src={photo.src.small} />;
      })}
    </>
  );
};

export default Images;
