import { ThreeCircles } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ThreeCircles
      height="200"
      width="200"
      color="#1cdb9e"
      wrapperStyle={{}}
      wrapperClass="loading"
      visible={true}
      ariaLabel="three-circles-rotating"
    />
  );
};

// height="100"
//       width="100"
//       color="#7265ec"
//       wrapperStyle={{}}
//       wrapperClass="loading"
//       visible={true}
//       outerCircleColor=""
//       innerCircleColor=""
//       barColor=""
//       ariaLabel="circles-with-bar-loading"
