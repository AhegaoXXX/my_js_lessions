"use strict";
const getOptions = function(size, num){
    let board = document.createElement('div');
    for(let i = 1; i < num; i++){
        let horizontal = document.createElement('div');
        for(let j = 1; j < num; j++){
            horizontal.style.display = 'flex';
            const coll = document.createElement('div');
            if(i %  2 == j % 2){
                coll.style.backgroundColor = 'black';
                coll.style.width = size + 'px';
                coll.style.height = size + 'px';
            }else{
                coll.style.backgroundColor = 'white';
                coll.style.width = size + 'px';
                coll.style.height = size + 'px';
            }
            horizontal.append(coll);
        };
        board.append(horizontal)
    };
    document.body.append(board);
}
let infiniti = Infinity;