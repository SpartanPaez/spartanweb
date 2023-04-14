// Sidebar imports
import{
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
    UilUsdSquare  
} from '@iconscout/react-unicons';  

export const SidebarData = [
    {
        icon: UilEstate,
        title: 'Dashboard',
        link: '/dashboard',
    },
    {
        icon: UilClipboardAlt,
        title: 'Clientes',
        link: '/clientes',
        open:'showClientesModal',
        modal: 'ClientesModal'
    },
    {
        icon: UilUsersAlt,
        title: 'Proveedores',
        link: '/customers',
    },
    {
        icon: UilPackage,
        title: 'Productos',
        link: '/productos',
    },
    {
        icon: UilChart,
        title: 'Ajustes',
        link: '/products',
    }
];

export const cardsData = [
    {
        title: 'Ventas',
        color:{
            background: "linear-gradient(90deg, rgba(255, 255, 255, 0.57) 20%, rgba(255, 255, 255, 0.1) 100%), #8652ee",
            boxShadow: "0px 19px 60px rgb(0 0 0 / 8%)",
        },
        barValue:10,
        value: "89",
        png: UilUsdSquare,
        series:[
            {
                name: "Ventas",
                data: [20, 50, 60, 72, 80, 90, 120, 12, 69, 87],
            }
        ],
    },
    {
        title: 'Ganancias',
        color: {
            background: "linear-gradient(90deg, rgba(255, 255, 255, 0.57) 20%, rgba(255, 255, 255, 0.1) 100%), #8652ee",
            boxShadow: "0px 10px 20px opx #e0c6f5",
        },
        barValue:60,
        value: "50",
        png: UilUsdSquare,
        series:[
            {
                name: "Vencimientos",
                data: [60, 40, 80, 60, 90, 80],
            }
        ],
    },
    {
        title: 'Cobros',
        color:{
            background: "linear-gradient(90deg, rgba(255, 255, 255, 0.57) 20%, rgba(255, 255, 255, 0.1) 100%), #8652ee",
            boxShadow: "0px 10px 20px opx #e0c6f5",
        },
        barValue:60,
        value: "10",
        png: UilUsdSquare,
        series:[
            {
                name: "Cobros",
                data: [60, 40, 80, 60, 90, 80, 70],
            }
        ]
    }
]
export const cardsclientSet = [
    {
        title: 'Alta de clientes ',
        color:{
            background: "linear-gradient(180deg, rgba(55, 27, 81, 0.879) 20%, rgba(255, 255, 255, 0.1) 100%), #6543a4",
            boxShadow: "0px 19px 60px rgb(0 0 0 / 8%)",
        },
        value: "89",
        png: UilUsersAlt,
        series:[
            {
                name: "Ventas",
                data: [20, 50, 60, 72, 80, 90, 120, 12, 69, 87],
            }
        ],
        link: '/clientes'
    },
   
]