
function newImage (asset, dirLeft, dirBottom) {

    let icon = document.createElement('img')
    icon.src = asset
    icon.style.position = 'fixed'
    icon.style.left = dirLeft
    icon.style.bottom = dirBottom
    document.body.append(icon)

}

function newItem (asset, dirLeft, dirBottom) {

    let icon = document.createElement('img')
    icon.src = asset
    icon.style.position = 'fixed'
    icon.style.left = dirLeft
    icon.style.bottom = dirBottom
    document.body.append(icon)

    icon.addEventListener('dblclick', function(){ icon.remove()})
    
}

function createBackground(){
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    let grassHeight = height*.6;
    let skyHeight = height*.4;

    for(let i=0; i<width; i+=100){
        for(let j=0; j<grassHeight; j+=100){
            newImage('assets/grass.png', i+'px', j+'px');
        }
    }

    for(let i=0; i<width; i+=100){
        for(let j=0; j<skyHeight; j+=100){
            let k = grassHeight + j;
            newImage('assets/sky.png', i+'px', k+'px');
        }
    }
}

createBackground();

newImage('assets/green-character.gif', '100px', '100px');

newImage('assets/pine-tree.png', '450px', '200px');

newImage('assets/tree.png', '200px', '300px');

newImage('assets/pillar.png', '350px', '100px');

newImage('assets/crate.png', '150px', '200px');

newImage('assets/well.png', '500px', '425px');

newItem('assets/sword.png', '500px', '405px');

newItem('assets/shield.png', '165px', '185px');

newItem('assets/staff.png', '600PX', '100PX');



