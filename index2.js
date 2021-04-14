const start = 2;
const end = 3;
var i;
var count = 0;

for (i = start; i < end + 1; i++) {
  if (i % 2 != 0) {
    count = count + 1;
  }
}
if (count % 2 == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
