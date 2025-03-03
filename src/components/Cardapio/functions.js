// src/pages/Cardapio/functions.js

// Função para adicionar um item ao cardápio
export function addMenuItem(date, food, nutrition) {
    // Recupera a lista de itens do cardápio do localStorage
    const menuList = JSON.parse(localStorage.getItem('menuList')) || [];
    
    // Adiciona um novo item à lista
    menuList.push({ date, food, nutrition });
    
    // Atualiza o localStorage com a nova lista
    localStorage.setItem('menuList', JSON.stringify(menuList));
    
    // Retorna a lista atualizada
    return menuList;
  }
  
  // Função para recuperar os itens do cardápio
  export function getMenuItems() {
    // Recupera a lista de itens do cardápio do localStorage
    return JSON.parse(localStorage.getItem('menuList')) || [];
  }
  