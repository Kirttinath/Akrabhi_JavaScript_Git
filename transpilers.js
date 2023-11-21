//Transpilers :
//A Software which translate  source code to another source code 
// It can parse modern code and rewrites it using older syntax construct. so It can work in outdated

 //before use transpilers
height ?? 100;// in Morden code  nullish coalescing operator
// After use transpilers 
(height !== undefined && height !==null) ? height : 100;
