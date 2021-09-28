const collapse = () =>{
  document.getElementById('sidebar').style.visibility='visible';
  document.getElementById('sidebar').style.transition='1s';
  document.getElementById('sidebar').style.width = '100%';
  document.getElementById('sidebar').style.height = '100%';
  document.getElementById('sidebar').style.paddingTop ='6rem';
  document.body.style.overflow = 'hidden';
  document.getElementById('search').style.width = '40%';
  document.getElementById('body').style.visibility='hidden';
}

export default collapse;