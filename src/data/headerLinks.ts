
import { LinkType } from "@/types/linkType"

export const headerLinks: LinkType[] = [
    {
        name: 'Институт',
        submenu: [
            {
                subname: 'Об институте',
                subhref: '/institute',
            },
            {
                subname: 'Мы и далянь',
                subhref: '/dalian',
            },
            {
                subname: 'РИКК',
                subhref: '/rikk',
            },
            {
                subname: 'Контакты',
                subhref: '/contacts',
            },
            {
                subname: 'Нормативные документы',
                subhref: '/docs',
            },
        ]
    },

    {
        name: 'Новости',
        href: '/news'
    },

    {
        name: 'Абитуриентам',
        submenu: [
            {
                subname: 'Специальности',
                subhref: '/specialities',
            },
            {
                subname: 'Проходные баллы',
                subhref: '/passing-grades',
            },
            {
                subname: 'План приёма',
                subhref: '/admission-plan',
            },
            {
                subname: 'Подача документов',
                subhref: '/filing-of-documents',
            },
        ]
    },

    {
        name: 'Студентам',
        submenu: [
            {
                subname: 'График учебного процесса',
                subhref: '/schedule',
            },
            {
                subname: 'Общежитие',
                subhref: '/dormitory',
            },
        ]
    }
]