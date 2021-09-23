//annotate every argument & annotate what function will return
//ts will analyze body of function
const add = (a: number, b: number): number => {
  return a + b;
};

//make sure to annotate what function will return
//if not situation like below can occur where ts thinks this is okay
//no return statement in body doesn't allow for inference, ts doesn't flag error
const subtract = (a: number, b: number) => {
  a - b;
};
