import React from 'react';

// Icons
import { ReactComponent as Icon1 } from '../assets/images/horizontalAccordion/icon-1.svg';
import { ReactComponent as Icon2 } from '../assets/images/horizontalAccordion/icon-2.svg';
import { ReactComponent as Icon3 } from '../assets/images/horizontalAccordion/icon-3.svg';


const colors = {
    lightBlue: 'rgba(0, 177, 244, 1)',
    orange: 'rgba(255, 134, 1, 1)',
    red: 'rgba(255, 28, 55, 1)',
    green: 'rgba(154,204,52, 1)',
    yellow: 'rgba(251,212,69, 1)'
}

export const data = [
    {
        orientation: 'left',
        image: <Icon1 />,
        title: 'Moeda local',
        description: 'A cobrança do serviço é feita em real, sem interferência da cotação do dólar.',
        color: colors.green
    },
    {
        orientation: 'left',
        image: <Icon2 />,
        title: 'Pagamento',
        description: 'Além do cartão de crédito, oferece pagamento em débito automático ou boleto bancário.',
        color: colors.yellow
    },
    {
        orientation: 'left',
        image: <Icon3 />,
        title: 'Sem impostos',
        description: 'Cobrança livre de taxas de compra internacional, como o IOF.',
        color: colors.yellow
    },
]