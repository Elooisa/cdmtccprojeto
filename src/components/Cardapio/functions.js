export function addMenuItem(date, food, nutrition) {
    
    const menuList = JSON.parse(localStorage.getItem('menuList')) || [];
    
   
    menuList.push({ date, food, nutrition });
    
    
    localStorage.setItem('menuList', JSON.stringify(menuList));
    
    
    return menuList;
  }
  
  
  export function getMenuItems() {
    
    return JSON.parse(localStorage.getItem('menuList')) || [];
  }
  