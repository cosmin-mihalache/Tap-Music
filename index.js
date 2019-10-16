window.addEventListener('load', () => {  
    const sounds = document.querySelectorAll('.sound'); 
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = [           
        'cornflowerblue',
        'darkgoldenrod',
        'rgb(237, 100, 196)',
        'rgb(100, 237, 134)',
        'rgba(237, 178, 100, 0.788)',
        'rgb(232, 100, 237)'
    ];

   // Sounds to work
   pads.forEach((pad, index) => { 
       pad.addEventListener('click', function() { 
           sounds[index].currentTime = 0; 
           sounds[index].play();


        createBubble(index); // IMPORTANT! Is not working if the function is not added up to the EventListener.
       });
   });
   // Create a function that make bubbles
   const createBubble = (index) => { 
       const bubble = document.createElement('div'); 
       visual.appendChild(bubble);
       bubble.style.backgroundColor = colors[index]; 
       bubble.style.animation = 'jump 1s ease'; 
       bubble.addEventListener('animationend', function() { 
           visual.removeChild(this); 
       });
   };
});



