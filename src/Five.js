import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';


// describe one gesture ✌️
export const fiveDescription = new GestureDescription('five');


// thumb:
fiveDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
fiveDescription.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 0.75);
fiveDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

// index:
fiveDescription.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
fiveDescription.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.75);
fiveDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

// middle:
fiveDescription.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
fiveDescription.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.75);
fiveDescription.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);


// ring:
fiveDescription.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
fiveDescription.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.75);
fiveDescription.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);

// pinky:
fiveDescription.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
fiveDescription.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.75);
fiveDescription.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);

// fiveDescription.setWeight(Finger.Ring, 2);
// fiveDescription.setWeight(Finger.Pinky, 4);
