const ham = document.getElementById('ham')
ham.addEventListener('click',()=>{
    // document.querySelector('nav ul').style.display === 'flex' ? document.querySelector('nav ul').style.display = 'none' : document.querySelector('nav ul').style.display = 'flex' 
    document.querySelector('nav ul').style.display = 'flex'
    document.querySelector('nav ul').style.marginTop = '3vh'
    document.querySelector('nav ul').style.flexDirection = 'column'
})
