const input = await Deno.readTextFile("./input.txt");

let elfs = input
    .split("\n\n")
    .map(x => x.split("\n"))
    .map(y => y.map(i => parseInt(i)))
    .map((z) => z.reduce((total, num) => total + num))
    .sort((a, b) => b - a);
    
    console.log(elfs);
