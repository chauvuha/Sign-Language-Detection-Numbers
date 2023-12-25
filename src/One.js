import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';


// describe one gesture ✌️
export const oneDescription = new GestureDescription('one');


// thumb:
oneDescription.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
oneDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
oneDescription.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
oneDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

// index:
oneDescription.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
oneDescription.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.75);
oneDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

// middle:
oneDescription.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
oneDescription.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.2);
oneDescription.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);


// ring:
oneDescription.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
oneDescription.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.2);
oneDescription.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
oneDescription.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.2);

// pinky:
oneDescription.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
oneDescription.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.2);
oneDescription.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);
oneDescription.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.2);

// give additional weight to index finger
oneDescription.setWeight(Finger.Index, 2);
