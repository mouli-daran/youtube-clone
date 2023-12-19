const Shimmer = () => {
  return (
    <div className="border border-gray-300 rounded-md p-4 w-72 mx-auto my-4 animate-pulse">
    <div className="bg-gray-300 rounded-md h-40 mb-4"></div>
    <div className="space-y-2">
      <div className="bg-gray-300 h-4 rounded-md"></div>
      <div className="bg-gray-300 h-4 rounded-md"></div>
      <div className="bg-gray-300 h-4 rounded-md"></div>
    </div>
  </div>
  );
};


const MultipleShimmer = () => {

  const shimmerCount = 20;

  return (
    <div className="flex flex-wrap justify-center">
      {[...Array(shimmerCount)].map((_, index) => (
        <Shimmer key={index} />
      ))}
    </div>
  )
}

export default MultipleShimmer;