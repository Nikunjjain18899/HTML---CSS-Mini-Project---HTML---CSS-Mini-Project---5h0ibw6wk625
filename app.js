document.querySelector('.cross').style.display='none';
document.querySelector('.hamer').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebar-go');
    if( document.querySelector('.sidebar').classList.contains('sidebar-go')){
        document.querySelector('.cross').style.display='none';
        document.querySelector('.equal').style.display='inline';
    }
    else{
        document.querySelector('.equal').style.display='none';
        setTimeout(()=>{
            document.querySelector('.cross').style.display='inline';

        },400)
    }
});