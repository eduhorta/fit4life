import { GalleryImages } from './GalleryImages';
import { Link } from 'react-router-dom';

function GalleryPage2() {
  const firstPageImages = GalleryImages.filter((item) => {
    return item.id > 9 && item.id <= 15;
  });

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className="grid -translate-y-8 grid-cols-1 gap-6 p-8 shadow-2xl drop-shadow-2xl md:grid-cols-2 lg:-translate-y-20 lg:grid-cols-3">
        {firstPageImages.map((image) => (
          <div key={image.id}>
            <img className="rounded-lg shadow-lg" src={image.img} />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-4">
        <Link
          className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-solid border-teal-500 text-center"
          onClick={goTop}
          to="/gallery/page-1"
        >
          1
        </Link>
        <Link
          className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-solid border-teal-500 bg-teal-500 text-center text-white"
          onClick={goTop}
          to="/gallery/page-2"
        >
          2
        </Link>
      </div>
    </>
  );
}

export default GalleryPage2;
