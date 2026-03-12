export function fibIter (iter, timeout){
    const start = Date.now();
    const timeMs = timeout*1000;
    let count = 0, sum = 0, aver;

    const id = setInterval(function(){
        if(timeMs + start < Date.now()) {clearInterval(id); return;}
        const val = iter.next().value;
        count++;
        sum+=val;
        aver=sum/count;
        console.log(`iter ${count}: value = ${val}, sum = ${sum}, average = ${aver.toFixed(2)}`);
    }, 500);
}
