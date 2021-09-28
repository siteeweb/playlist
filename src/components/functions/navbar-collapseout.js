const collapseout = () =>{
  document.getElementById('sidebar').style.visibility='hidden';
  document.getElementById('sidebar').style.transition='0s';
    document.getElementById('sidebar').style.width = '0px';
    document.getElementById('sidebar').style.height = '0px';
    document.getElementById('sidebar').style.paddingTop ='0rem';
    document.body.style.overflow = 'visible';
    document.getElementById('body').style.visibility='visible';
  }
  
  export default collapseout;