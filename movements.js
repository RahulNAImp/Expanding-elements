//  in order to expand all the cards whenever you select 
// simple thing is to shift the .active class to the another pannel class

const pannel = document.querySelectorAll('.pannel');

// ok but this pannel will give us the node list of every pannel it finds 
// console.log(pannel[1]);

pannel.forEach( (pannel) => {
    // console.log(pannel)         try on console 
    // we will be useing event listener which listens on the click 
    pannel.addEventListener('click', () => {
        // console.log(3);
        removeActiveClass();
        pannel.classList.add('active')         // ok this works but we want when we click on the tile other tiles should shrink at the same time 
    })
});

// function to remove active class from the elements which are not selected 

function removeActiveClass () {
    pannel.forEach( (panel) => {
        panel.classList.remove('active');
    });
}
