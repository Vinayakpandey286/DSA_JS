function Get_Mazepath(sr, sc, dr, dc) {
  if (sr == dr && sc == dc) {
    temp = [];
    temp.push("");
    return temp;
  }

  let path_H = [];
  let path_V = [];
  if (sc < dc) {
    path_H = Get_Mazepath(sr, sc + 1, dr, dc);
  }
  if (sr < dr) {
    path_V = Get_Mazepath(sr + 1, sc, dr, dc);
  }

  const path = [];

  for (let x of path_H) {
    path.push("h" + x);
  }
  for (let y of path_V) {
    path.push("v" + y);
  }

  return path;
}

let path = Get_Mazepath(1, 1, 3, 3);
console.log(path.length);


// to count no. of ways we can reach destination
function fn(sr, sc, dr, dc) {
  if (sr == dr - 1 && sc == dc - 1) return 1;
  if (sr >= dr || sc >= dc) return 0;

  return fn(sr, sc + 1, dr, dc) + fn(sr + 1, sc, dr, dc);
}

console.log(fn(0,0 ,3,3))