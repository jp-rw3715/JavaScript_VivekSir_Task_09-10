let low = 100, high = 999;
for(let i=low; i<=high; i++){
  let d = i.toString().split('');
  let s = d.reduce((a, v)=>a+Math.pow(+v, d.length),0);
  if(s === i) console.log(i);
}
