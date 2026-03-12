export function* fibGen(){
    let i = 0;
    let j = 1;
    
    while (true){
        yield i;
        [i, j] = [j, i+j];
    }
}