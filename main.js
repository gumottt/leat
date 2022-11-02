//dz
/*

var items = [
    { firstName: 'Edward', lastName: 'Logan'},
    { firstName: 'Sharpe', lastName: 'Grob' },
    { firstName: 'Znd', lastName: 'zebag' },
    { firstName: 'The', lastName: 'Grolib' },
    { firstName: 'Magnetic', lastName: 'olkjffg' },
    { firstName: 'Zeros', lastName: 'wifhwj' }
];

 items.sort(function(a, b){
    if(a.firstName > b.firstName ){
        return 1;
    }
    if(a.firstName < b.firstName ){
        return -1;
    } 
    return 0;

       
});
console.log ([items]);
*/

//buble sort - done
/*
let arr = [5, 1, 6, 9, 5];
console.log(arr)
for(let i=0;i<arr.length-1; i++){
    for(let o=0; o<arr.length-1; o++){
        if(arr[o]>arr[o+1]){
            const j =arr[o];
            arr[o]=arr[o+1];
            arr[o+1]=j;

        }
    }
}
console.log(arr)
*/

//buble sort rev
/*
let arr = [5, 1, 6, 9, 5];
console.log(arr)
for(let i=0;i<arr.length-1; i++){
    for(let o=0; o<arr.length-1; o++){
        if(arr[o]<arr[o+1]){
            const j =arr[o];
            arr[o]=arr[o+1];
            arr[o+1]=j;

        }
    }
}
console.log(arr)
*/

//сортування слів за другим символом
/*
let arr = ['Ivan', 'Sasha', 'Dima', 'Oleg', 'Anton']

for(let i=0;i<arr.length-1; i++){
    for(let o=0; o<arr.length-1; o++){
        if(arr[o][1]>arr[o+1][1]){
            const j =arr[o];
            arr[o]=arr[o+1];
            arr[o+1]=j;

        }
    }
}
console.log(arr)
*/

Виконав Кучера Олександр ІПЗ 1