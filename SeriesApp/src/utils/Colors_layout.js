import React from 'react';

const colors_package = {
    "Roxo_escuro":"#9C49DD",
    "Roxo_claro":"#9964AB",
    "Azul_claro":"#4047E7",
    "Azul_escuro":"blue",
    "Cinza_claro":"#e6e6fa",
    "Vermelho_escuro":"red",
    "Cinza_escuro":"#464646"
}

export default class Colors_services {
    
    static Get_ColorsPack(){
        return colors_package;
    }
}