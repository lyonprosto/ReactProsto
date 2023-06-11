const a = 0;

{
    const a = 1;
}

const f = () => {
    const a = 2;
}
f();

// What will the console log display?
console.log(a);
