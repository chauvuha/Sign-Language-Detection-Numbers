import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';


// describe one gesture ✌️
export const threeDescription = new GestureDescription('three');


// thumb:
threeDescription.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
threeDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
threeDescription.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
threeDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

// index:
threeDescription.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.7);
threeDescription.addCurl(Finger.Index, FingerCurl.NoCurl, 0.7);
threeDescription.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.2);
threeDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

// middle:
threeDescription.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
threeDescription.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.75);
threeDescription.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);

// ring:
threeDescription.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
threeDescription.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.75);
threeDescription.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);

// pinky:
threeDescription.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
threeDescription.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.75);
threeDescription.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);

// give additional weight to middle, ring,  finger
// threeDescription.setWeight(Finger.Middle, 2);
// threeDescription.setWeight(Finger.Ring, 2);
threeDescription.setWeight(Finger.Pinky, 4);

