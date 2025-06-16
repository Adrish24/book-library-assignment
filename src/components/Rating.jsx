import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";

const Rating = ({ rating }) => {
  //Function to render stars based on rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - (fullStars + halfStar);

    return (
      <div className="flex items-center text-warning">
        {fullStars > 0 &&
          [...Array(fullStars)].map((_, index) => <IoStar key={index} />)}
        {halfStar > 0 && <IoStarHalf />}
        {emptyStars > 0 &&
          [...Array(emptyStars)].map((_, index) => (
            <IoStarOutline key={index} />
          ))}
      </div>
    );
  };

  return (
    <div className="flex items-center gap-1">
      {renderStars(rating)}
      <span>{rating}</span>
    </div>
  );
};

export default Rating;
