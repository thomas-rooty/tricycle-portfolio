import dynamic from 'next/dynamic';

// Import useSpline function from @splinetool/r3f-spline using dynamic import
const Spline = dynamic(() => import('@splinetool/r3f-spline'), {
    ssr: false
});

export const useSpline = Spline.useSpline;

export default Spline;