import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';


// describe one gesture ✌️
export const fourDescription = new GestureDescription('four');


// thumb:
fourDescription.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
fourDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
fourDescription.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
fourDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

// index:
fourDescription.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
fourDescription.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.75);
fourDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

// middle:
fourDescription.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
fourDescription.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.75);
fourDescription.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);

// ring:
fourDescription.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
fourDescription.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.75);
fourDescription.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);

// pinky:
fourDescription.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
fourDescription.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);
fourDescription.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);

// give additional weight to middle, ring,  finger
fourDescription.setWeight(Finger.Thumb, 4);

